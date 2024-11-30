import { useState } from "react";
import Task from "./Task";

const ToDoList = ({ items, handleCheckbox, handleDeleteTask }) => {
  return (
    <div className="d-flex justify-content-center align-items-center  bg-secondary">
      <ul
        style={{ flexBasis: 400, maxHeight: "300px", overflowY: "auto" }}
        className="list-group bg-white  p-3 mb-3 "
      >
        {items.map((task) => (
          <Task
            task={task}
            handleCheckbox={handleCheckbox}
            handleDeleteTask={handleDeleteTask}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
