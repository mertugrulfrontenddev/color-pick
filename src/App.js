import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  let tasks = [
    { id: 1, taskName: "Shopping", isComplete: false },
    { id: 2, taskName: "Reading", isComplete: false },
    { id: 3, taskName: "Jogging", isComplete: false },
  ];

  let [items, setitems] = useState(tasks);

  function handleCheckbox(event) {
    setitems((prevItems) =>
      prevItems.map((item) =>
        item.id === Number(event.target.id)
          ? { ...item, isComplete: event.target.checked }
          : item
      )
    );
  }

  function handleDeleteTask(taskId, event) {
    setitems((prevItems) => {
      let taskToDelete = prevItems.find((task) => task.id === taskId);

      if (taskToDelete && !taskToDelete.isComplete) {
        alert(`${taskToDelete.taskName} görevi tamamlanmadığı için silinemez `);
        return prevItems;
      }

      return prevItems.filter((task) => task.id !== taskId);
    });
  }
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
      }}
    >
      <NavBar items={items} handleCheckbox={handleCheckbox} />

      <AddTask />
      <ToDoList
        items={items}
        handleCheckbox={handleCheckbox}
        handleDeleteTask={handleDeleteTask}
      />
      <Footer />
    </div>
  );
}

export default App;
