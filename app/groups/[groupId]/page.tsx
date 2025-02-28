"use client";
import { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import YourTasks from "@/app/components/YourTasks";
import Table from "@/app/components/Table";
import Footer from "@/app/components/Footer";
import { useGroupStore } from "@/app/hooks/useGroupStore";
import { fetchUsers } from "@/app/hooks/fetchUsers";

// this needs group info
const GroupPage = (props: {
  params: Promise<{ groupId: string }>;
}) => {
  const params = use(props.params);
  const groupId = params.groupId; // we already have the groupId
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const users = useGroupStore((state) => state.users);
  const fetchGroupUsers = useGroupStore(
    (state) => state.fetchGroupUsers
  );
  // const { users } = useGroupStore();
  // const [users, setUsers] = useState<{ email: string }[]>(
  //   []
  // );

  useEffect(() => {
    const loadUsers = async () => {
      // const getUsers = useGroupStore(
      fetchGroupUsers(groupId);

      //   (state) => state.fetchGroupUsers
      // );
      //   const users = await fetchUsers(groupId);
      //   setUsers(users);
    };
    loadUsers();
  }, [groupId, userEmail]);

  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <header className="p-5 bg-accent shadow-md text-center text-5xl font-bold">
        Group Members
        {/* {groupName ? groupName : "Loading..."} */}
      </header>
      {/* Main Content Area */}
      <div className="flex flex-1 p-5 gap-x-8">
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
          <YourTasks />
          <ul className="text-lg">
            {users.map((user) => (
              // <div>{user.email}</div>
              <div>{user}</div>
            ))}
          </ul>
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
