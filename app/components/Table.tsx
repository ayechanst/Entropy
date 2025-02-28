import NewTaskBtn from "./NewTaskBtn";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <div>
        <h3>Test Zustand</h3>
        <div> . </div>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Leader</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Dishes</td>
            <td>Joe Rogan</td>
            <td>In Progress</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>Trash</td>
            <td>Adolf</td>
            <td>Ready to grade</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>Wipe Counter</td>
            <td>Iceberg Slim</td>
            <td>Red</td>
          </tr>
          {/* test row */}
          <tr>
            <td>
              <button className="btn">make new task</button>
            </td>
            <td>
              <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">
                  Adam 22
                </button>
                <button className="join-item btn">»</button>
              </div>
            </td>
            <td>Red</td>
          </tr>
          {/* row 5 */}
          <tr>
            <td></td>
            <td>
              <NewTaskBtn />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
