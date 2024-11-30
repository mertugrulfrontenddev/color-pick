import { useState } from "react";
import Task from "./Task";

const ToDoList = ({ items, handleCheckbox, handleDeleteTask }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-3 bg-secondary h-100 ">
      <ul className="list-group bg-white  p-4">
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
