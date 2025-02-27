"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { supabase } from "../../../lib/supabaseClient";
import { supabase } from "@/app/lib/supabaseClient";

const GroupPage = ({
  params,
}: {
  params: { group_id: string };
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [members, setMembers] = useState<string[]>([]);
  const [isAuthorized, setIsAuthorized] = useState<
    boolean | null
  >(null);
  useEffect(() => {
    if (!session?.user?.email) return;
    const fetchGroupData = async () => {
      const { data, error } = await supabase
        .from("group_members")
        .select("email")
        .eq("group_id", params.group_id);
      if (error) {
        console.error(
          "Error fetching group members:",
          error
        );
        return;
      }
      const memberEmails = data.map(
        (member) => member.email
      );
      setMembers(memberEmails);
      if (!memberEmails.includes(session.user?.email)) {
        setIsAuthorized(false);
        router.push("/");
      } else {
        setIsAuthorized(true);
      }
    };
    fetchGroupData();
  }, [session, params.group_id, router]);
  if (isAuthorized === null) return <p>loading...</p>;
  if (!isAuthorized) return null;
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
