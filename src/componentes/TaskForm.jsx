// Este código define un componente funcional de React llamado TaskForm,
// que representa un formulario para agregar nuevas tareas a una lista.

import React, { useState } from 'react';
//Se importa React y el hook useState desde la biblioteca de React.
// useState se utiliza para gestionar el estado local del componente.


// Se define el componente funcional TaskForm.
// Se utiliza el hook useState para crear dos piezas de estado: 
// .newTask= para almacenar la nueva tarea que el usuario ingresar
// .errorMessage= para mostrar mensajes de error.
const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //manejo de agregar tarea
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      // Si la nueva tarea no está vacía, se llama a la función proporcionada por el padre (onAddTask)
      // Se limpia el estado de la nueva tarea y los mensajes de error
      onAddTask(newTask);
      setNewTask('');
      setErrorMessage('');
      // Se programa para limpiar los mensajes de error después de 5 segundos
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } else {
      // Si la nueva tarea está vacía, se muestra un mensaje de error
      setErrorMessage('Por favor, agregue una tarea.');

      // Se programa para limpiar los mensajes de error después de 5 segundos
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  // En el bloque de retorno, se renderiza el formulario.
  // Incluye un input para la nueva tarea, un mensaje de error 
  // (visible solo si hay un mensaje de error) y un botón para agregar la tarea.
  // El valor del input está vinculado al estado newTask, 
  // y cualquier cambio en el input actualiza el estado.

  return (
    <div className="mb-3">
      {/* Input para la nueva tarea */}
      <input
        type="text"
        className="form-control"
        placeholder="Nueva tarea"
        value={newTask}
        required={true}
        onChange={(e) => setNewTask(e.target.value)}
      />

      {/* Mensaje de error, visible solo si hay un mensaje de error */}
      {errorMessage && <p style={{ fontSize: "18px", color: "white", margin: "5px 5px" }}>{errorMessage}</p>}

      {/* Botón para agregar tarea, llama a handleAddTask en clic */}
      <button className="btn btn-primary mt-2" onClick={handleAddTask}>
        Agregar tarea
      </button>
    </div>
  );
};

// Finalmente, el componente TaskForm se exporta para que pueda ser utilizado
// en otros archivos de la aplicación.
export default TaskForm;
