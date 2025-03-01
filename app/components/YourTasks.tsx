import { useGroupStore } from "../hooks/useGroupStore";

const YourTasks = () => {
  const users = useGroupStore((state) => state.users);
  return (
    <div className="card-body items-center text-center">
      <h2 className="card-title">Shoes!</h2>
      <ul className="text-lg">
        {users.map((user) => (
          <div>{user}</div>
        ))}
      </ul>
      <p>
        If a dog chews shoes whose shoes does he choose?
      </p>
    </div>
  );
};

export default YourTasks;
