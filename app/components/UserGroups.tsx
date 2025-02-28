"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { fetchGroups } from "../hooks/fetchGroups";

// all good
const UserGroups = () => {
  const { data: session } = useSession();
  const [groups, setGroups] = useState<
    { id: string; name: string }[]
  >([]);
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (!userEmail) return;
    const loadGroups = async () => {
      const userGroups = await fetchGroups(userEmail);
      setGroups(userGroups);
    };
    loadGroups();
  }, [userEmail]);

  return (
    <div className="hero flex items-center justify-center">
      <div className="card  text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <div className="flex flex-col items-center gap-4">
            {groups.map((group) => (
              <Link
                key={group.id}
                href={`/groups/${group.id}`}
                className="btn btn-secondary w-full"
              >
                {group.name}
              </Link>
            ))}
            <Link
              href="/newGroup"
              className="btn btn-primary w-full"
            >
              +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGroups;
