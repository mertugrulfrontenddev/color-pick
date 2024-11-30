import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  let [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() !== "") {
      handleAddTask(input);

      setInput("");
    }
  }

  return (
    <div className="p-2 bg-secondary h-50 d-flex justify-content-center">
      <div
        style={{ flexBasis: 400 }}
        className="rounded   bg-white d-flex flex-column align-items-center justify-content-center "
      >
        <h2 className="text-secondary">Add Task Module</h2>
        <form
          className="container  mt-1 mb-1 d-flex align-items-center justify-content-between"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label className="me-2 text-secondary" htmlFor="taskInput">
            Add Task Name:
          </label>
          <input
            type="text"
            name="taskInput"
            id="taskInput"
            style={{ maxWidth: 200 }}
            value={input}
            onChange={(event) => handleChange(event)}
          />

          <input
            type="submit"
            className="btn btn-primary p-1"
            value="Add Task"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
