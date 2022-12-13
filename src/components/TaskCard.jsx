import { useContext } from "react";
import {TaskContext} from "../context/TaskContext";



function TaskCard({ task, deleteTask }) {
  const valor = useContext(TaskContext)
  console.log(valor)

  return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
  );
}

export default TaskCard;
