"use client";
import { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchUsers } from "@/app/hooks/fetchUsers";
import YourTasks from "@/app/components/YourTasks";
import Table from "@/app/components/Table";
import Footer from "@/app/components/Footer";

// needs users in a group
const GroupPage = (props: {
  params: Promise<{ groupId: string }>;
}) => {
  const params = use(props.params);
  const { data: session } = useSession();
  const router = useRouter();
  const [members, setMembers] = useState<string[]>([]);

  useEffect(() => {
    // will eventually need to fetch all data associated with the group
    const fetchGroupData = async () => {
      const userEmails = await fetchUsers(params.groupId);
      setMembers(userEmails);
    };
    fetchGroupData();
  }, [session, params.groupId, router]);
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <header className="p-5 bg-accent shadow-md text-center text-5xl font-bold">
        Group Members
      </header>
      {/* Main Content Area */}
      <div className="flex flex-1 p-5 gap-x-8">
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
          <YourTasks />
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroupPage;

// {/* <ul className="text-lg">
//   {members.map((email, index) => (
//     <li key={index} className="p-2 border-b">
//       {email}
//     </li>
//   ))}
// </ul> */}
