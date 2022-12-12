import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks as data } from "./Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(title) {
    setTasks([...tasks, {
      title:title,
      id: tasks.length,
      description: "Tuma"
    }]
      )
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
