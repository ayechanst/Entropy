const NewTaskModal = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold m-5">
            New Task
          </h1>
          <form
            // onSubmit={() => handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Task Name"
              className="input input-bordered input-accent w-full max-w-xs"
              //   value={taskName}
              //   onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Task Description"
              className="input input-bordered input-accent w-full max-w-xs"
              //   value={taskDescription}
              //   onChange={(e) =>
              //     setTaskDescription(e.target.value)
              //   }
              required
            />
            {/* <ul className="text-lg">
              {users.map((user, index) => (
                <div key={index}>{user}</div>
              ))}
            </ul> */}

            <button
              type="button"
              className="btn btn-outline btn-accent"
              //   onClick={addEmailField}
            >
              Add another email
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
