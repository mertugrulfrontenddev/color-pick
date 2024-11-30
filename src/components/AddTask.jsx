const AddTask = () => {
  return (
    <div className="p-3 bg-secondary h-50 d-flex justify-content-center">
      <div
        style={{ flexBasis: 500 }}
        className="rounded   bg-white d-flex flex-column align-items-center "
      >
        <h2 className="text-secondary">Add Task Module</h2>
        <form className="container  mt-4">
          <label className="me-2 text-secondary" htmlFor="taskInput">
            Add Task Name:
          </label>
          <input type="text" name="taskInput" id="taskInput" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
