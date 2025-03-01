"use client";
import { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import YourTasks from "@/app/groups/[groupId]/components/YourTasks";
import Table from "@/app/groups/[groupId]/components/Table";
import Footer from "@/app/groups/[groupId]/components/Footer";
import { useGroupStore } from "@/app/hooks/useGroupStore";
import { fetchUsers } from "@/app/hooks/fetchGroupInfo";

// this needs group info
const GroupPage = (props: {
  params: Promise<{ groupId: string }>;
}) => {
  const params = use(props.params);
  const groupId = params.groupId; // we already have the groupId
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const groupName = useGroupStore(
    (state) => state.groupName
  );
  // const users = useGroupStore((state) => state.users);
  const fetchGroupUsers = useGroupStore(
    (state) => state.fetchGroupUsers
  );
  const fetchGroupName = useGroupStore(
    (state) => state.fetchGroupName
  );

  useEffect(() => {
    const loadUsers = async () => {
      fetchGroupUsers(groupId);
      fetchGroupName(groupId);
    };
    loadUsers();
  }, [groupId, userEmail]);

  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <header className="p-5 bg-accent shadow-md text-center text-5xl font-bold">
        {/* Group Members */}
        {groupName ? groupName : "Loading..."}
      </header>
      {/* Main Content Area */}
      <div className="flex flex-1 p-5 gap-x-8">
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
          <YourTasks />
          <ul className="text-lg"></ul>
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
