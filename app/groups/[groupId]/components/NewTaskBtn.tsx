import Link from "next/link";

const NewTaskBtn = () => {
  return (
    <div>
      <Link href={"/newTask"} className="btn">
        New Task
      </Link>
    </div>
  );
};

export default NewTaskBtn;
