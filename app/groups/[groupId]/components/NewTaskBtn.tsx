import Link from "next/link";

const NewTaskBtn = () => {
  // const handleClick = () => router.push()
  return (
    <div>
      <Link href={"/newTask"} className="btn">
        New Task
      </Link>
    </div>
  );
};

export default NewTaskBtn;
