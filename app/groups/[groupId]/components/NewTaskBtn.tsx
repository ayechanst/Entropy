const NewTaskBtn = () => {
  const handleClick = () => {
    console.log("btn clicked!!!!!!!!!!");
  };
  return (
    <button className="btn" onClick={() => handleClick()}>
      New Task
    </button>
  );
};

export default NewTaskBtn;
