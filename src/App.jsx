import { useState } from "react";
import tasksData from "./data/tasks";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/Tasklist";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text
    };
    setTasks(prev => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  return (
    <div id="Main">
      <Navbar />
      <TaskInput onAdd={addTask}/>
      <TaskList onComplete={(id) => deleteTask(id) } tasks={tasks}/>
    </div>
  );
}

export default App;
