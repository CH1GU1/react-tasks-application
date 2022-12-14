import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-zinc-800 p-10 mb-4">
          <h1 className="text-white font-bold text-center mb-4 text-3xl">Crea tu Tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-3"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full"
        ></textarea>
        <button className="bg-green-500 rounded-md p-2 text-lg font-semibold text-white hover:bg-green-600">Guardar</button>
      </form>
      </div>
  );
}

export default TaskForm;
