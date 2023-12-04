//En esta sección, se importan las dependencias y componentes necesarios para la aplicación.
// React se utiliza para la construcción de la interfaz de usuario, useState y useEffect 
//son hooks de React que permiten utilizar estado y efectos secundarios en componentes funcionales. 
//También se importan estilos de Bootstrap y varios componentes personalizados 
//(TaskList, TaskForm, y Footer).

import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './componentes/TaskList';
import TaskForm from './componentes/TaskForm';
import Footer from './componentes/Footer';

//Se define el componente principal App.
// Aquí, se utiliza el hook useState para gestionar el estado de las tareas (tasks).
// También se utiliza localStorage para almacenar y recuperar las tareas del almacenamiento local del navegador.
// El hook useEffect se utiliza para actualizar el almacenamiento local cada vez que el estado de las tareas cambia.

function App() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

//Aquí se definen varias funciones para manipular las tareas.
// addTask agrega una nueva tarea al estado tasks, deleteTask elimina una tarea por su ID,
// completeTask marca una tarea como completada o no completada, 
//y handleEdit edita una tarea existente.
  
  
  const addTask = (newTaskText) => {
    const newTaskObj = { id: tasks.length + 1, text: newTaskText };
    setTasks([...tasks, newTaskObj]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEdit = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  };

// Finalmente, en la función de renderizado, se renderiza la interfaz de usuario.
// Se utiliza el componente TaskForm para agregar nuevas tareas,
// TaskList para mostrar la lista de tareas, y Footer para agregar información adicional 
// al pie de la página.

  return (
    <>
      <div className="container mt-5">
        <h1>Gestor de Tareas</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} onEdit={handleEdit} />
      </div>
      <Footer />
    </>
  );
}

export default App;