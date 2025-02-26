"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

const NewGroupPage = () => {
  const { data: session } = useSession();
  const [emails, setEmails] = useState([""]);

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold m-5">
            Invite People
          </h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Group Name"
              className="input input-bordered input-accent w-full max-w-xs"
            />

            {emails.map((email, index) => (
              <input
                key={index}
                type="email"
                placeholder="Invitee Email"
                className="input input-bordered input-accent w-full max-w-xs"
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
