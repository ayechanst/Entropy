"use client";
import { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { fetchUsers } from "@/app/hooks/fetchUsers";

// needs users in a group
const GroupPage = (props: {
  params: Promise<{ groupId: string }>;
}) => {
  const params = use(props.params);
  const { data: session } = useSession();
  const router = useRouter();
  const [members, setMembers] = useState<string[]>([]);

  useEffect(() => {
    const fetchGroupData = async () => {
      const userEmails = await fetchUsers(params.groupId);
      setMembers(userEmails);
    };
    fetchGroupData();
  }, [session, params.groupId, router]);
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-5">
            Group Members
          </h1>
          <ul className="text-lg">
            {members.map((email, index) => (
              <li key={index} className="p-2 border-b">
                {email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
