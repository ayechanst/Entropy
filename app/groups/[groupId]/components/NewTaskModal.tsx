import { useGroupStore } from "@/app/hooks/useGroupStore";
import { useModalState } from "@/app/hooks/useModalStore";
import { useState } from "react";

const NewTaskModal = () => {
  const { closeModal } = useModalState();
  const users = useGroupStore((state) => state.users);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] =
    useState("");
  const [emails, setEmails] = useState<string[]>([]);

  const handleCheckboxChange = (email: string) => {
    setEmails((prev) =>
      prev.includes(email)
        ? prev.filter((e) => e !== email)
        : [...prev, email]
    );
  };

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    console.log("taskName: ", taskName);
    console.log("taskDesc: ", taskDescription);
    console.log("email List: ", emails);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✕
        </button>
        <h1 className="text-2xl font-bold mb-4">
          New Task
        </h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Task Name"
            className="input input-bordered input-accent w-full"
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Task Description"
            className="input input-bordered input-accent w-full"
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            required
          />
          <ul className="text-lg text-left">
            {users.map((user, index) => (
              <li
                key={index}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  name="selected-users"
                  className="checkbox checkbox-primary"
                  onClick={() => handleCheckboxChange(user)}
                  value={user}
                />
                <span>{user}</span>
              </li>
            ))}
          </ul>
          <button type="submit" className="btn btn-primary">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTaskModal;
