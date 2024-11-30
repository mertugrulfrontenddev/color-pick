import { useState } from "react";

const Task = ({ task, handleCheckbox, handleDeleteTask }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", width: 500 }}>
        <input
          className="form-check-input me-1 mt-3 "
          type="checkbox"
          id={task.id}
          onChange={(event) => handleCheckbox(event)}
          checked={task.isComplete}
          style={{ borderColor: "blue" }}
        />
        <li
          className="list-group-item me-3"
          id={task.id}
          data-tik={task.tiklama}
          style={{
            flexBasis: 400,
            textDecoration: task.isComplete ? "line-through" : "none",
          }}
        >
          {task.taskName}
        </li>
        <button
          className="btn btn-danger m-2"
          onClick={(event) => handleDeleteTask(task.id, event)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
