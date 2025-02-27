"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

const NewGroupPage = () => {
  const { data: session } = useSession();
  const [groupName, setGroupName] = useState("");
  const [emails, setEmails] = useState([""]);
  const router = useRouter();

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  const handleEmailChange = (
    index: number,
    value: string
  ) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    if (!session?.user?.email)
      return alert("you must be signed it");

    // inserting new groups
    const { data: groupData, error: groupError } =
      await supabase
        .from("groups")
        .insert([{ name: groupName }])
        .select()
        .single();
    if (groupError) {
      console.error("group error: ", groupError);
      return;
    }

    // inserting emails into "group members"
    const allEmails = [session.user.email, ...emails];
    const { data, error } = await supabase
      .from("group_members")
      .insert(
        allEmails
          .map((email) => email.trim())
          .filter((email) => email !== "")
          .map((email) => ({
            group_id: groupData.id,
            email,
          }))
      );
    if (error) {
      console.error("error adding group members: ", error);
    } else {
      console.log("Group created successfully: ", data);
    }
    router.push(`/groups/${groupData.id}`);
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold m-5">
            Invite People
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Group Name"
              className="input input-bordered input-accent w-full max-w-xs"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />

            {emails.map((email, index) => (
              <input
                key={index}
                type="email"
                placeholder="Invitee Email"
                className="input input-bordered input-accent w-full max-w-xs"
                value={email}
                onChange={(e) =>
                  handleEmailChange(index, e.target.value)
                }
              />
            ))}

            <button
              type="button"
              className="btn btn-outline btn-accent"
              onClick={addEmailField}
            >
              Add another email
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Create Group
            </button>
          </form>

          <div className="mt-4">
            Logged in as: {session?.user?.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGroupPage;
