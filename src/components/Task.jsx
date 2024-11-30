import { useState } from "react";

const Task = ({ task, handleCheckbox, handleDeleteTask }) => {
  return (
    <div className="container-fluid d-flex">
      <li
        className="list-group-item me-3"
        id={task.id}
        data-tik={task.tiklama}
        style={{
          flexBasis: 300,
          textDecoration: task.isComplete ? "line-through" : "none",
        }}
      >
        <div className="d-flex align-items-center">
          <label className="text-secondary">
            <input
              className="form-check-input me-1 "
              type="checkbox"
              id={task.id}
              onChange={(event) => handleCheckbox(event)}
              checked={task.isComplete}
              style={{ borderColor: "blue" }}
            />
            {task.taskName}
          </label>
        </div>
      </li>
      <button
        className="btn btn-danger m-2"
        onClick={(event) => handleDeleteTask(task.id, event)}
      >
        X
      </button>
    </div>
  );
};

export default Task;
