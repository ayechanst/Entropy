"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabaseClient";

const UserGroups = () => {
  const { data: session } = useSession();
  const [groups, setGroups] = useState<
    { id: string; name: string }[]
  >([]);
  const userEmail = session?.user?.email;
  if (!userEmail) return;
  useEffect(() => {
    const fetchGroups = async () => {
      const { data, error } = await supabase
        .from("group_members")
        .select("group_id, groups(name)")
        .eq("email", userEmail);

      if (error) {
        console.log("Error fetching groups:", error);
        return;
      }

      const userGroups =
        data?.map((entry: any) => ({
          id: entry.group_id,
          name: entry.groups.name,
        })) ?? [];

      setGroups(userGroups);
    };
    fetchGroups();
  }, [userEmail]);

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-semibold mb-2">
          Your Groups
        </h2>
        {groups.map((group) => (
          <Link
            key={group.id}
            href={`/group/${group.id}`}
            className="btn btn-secondary"
          >
            {group.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserGroups;
