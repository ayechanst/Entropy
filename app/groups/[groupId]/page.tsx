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
      {/* Stuck Header */}
      <header className="p-5 bg-white shadow-md text-center text-5xl font-bold">
        Group Members
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 p-5 gap-x-8">
        {/* Left Side - YourTasks (Full Height) */}
        <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
          <YourTasks />
        </div>

        {/* Right Side - Table (Fills Remaining Space) */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <Table />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );

  // return (
  //   <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
  //     <div className="hero-content text-center">
  //       <div className="max-w-md">
  //         <h1 className="text-5xl font-bold mb-5">
  //           Group Members
  //         </h1>
  //         <YourTasks />
  //         <Table />
  //         <Footer />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default GroupPage;

// {/* <ul className="text-lg">
//   {members.map((email, index) => (
//     <li key={index} className="p-2 border-b">
//       {email}
//     </li>
//   ))}
// </ul> */}
