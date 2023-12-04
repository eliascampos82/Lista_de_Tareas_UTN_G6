
// TaskItem es un componente que representa una tarea individual en una lista,
// con capacidades de edición, completado y eliminación.
// Este componente es utilizado para representar cada elemento en la lista de tareas.

import React, { useState } from 'react';
// Se importa React y el hook useState desde la biblioteca de React.

// Se define el componente funcional TaskItem.
// Se utiliza el hook useState para gestionar tres estados locales: 
// completed para el estado de la tarea (completada o no),
// isEditing para indicar si la tarea está en modo de edición,
// y editedText para almacenar el texto editado de la tarea.

const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  const [completed, setCompleted] = useState(task.completed || false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  //Se definen varias funciones de manejo de eventos:
  //handleComplete: Cambia el estado de completado de la tarea y llama a la función onComplete del padre con el ID de la tarea.
  //handleUndoComplete: Deshace la completitud de la tarea y llama a la función onComplete del padre con el ID de la tarea.
  //handleSaveEdit: Guarda la tarea editada llamando a la función onEdit del padre y luego establece isEditing a false.
  //handleCancelEdit: Cancela la edición, restableciendo el estado del texto editado y estableciendo isEditing a false.
  //handleDelete: Maneja la eliminación de la tarea, confirmando si la tarea está completada o solicitando confirmación al usuario.


  const handleComplete = () => {
    setCompleted(!completed);
    onComplete(task.id);
  };

  const handleUndoComplete = () => {
    setCompleted(false);
    onComplete(task.id);
  };

  const handleSaveEdit = () => {
    console.log('Guardando edición');
    console.log('Nueva tarea:', { ...task, text: editedText });
    onEdit({ ...task, text: editedText });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(task.text);
  };

  const handleDelete = () => {
    if (completed || window.confirm('¿Estás seguro de que quieres eliminar esta tarea sin completar?')) {
      onDelete(task.id);
    }
  };

  // El bloque de retorno renderiza un elemento de lista (<li>) que representa una tarea.
  // Dependiendo del estado (isEditing), se muestra el modo de edición o el modo normal.
  // En el modo de edición, se muestra un textarea para editar el texto de la tarea,
  // y en el modo normal se muestra el texto de la tarea 
  // y los botones correspondientes para completar, deshacer, editar o eliminar la tarea.

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${completed ? 'completed-task' : ''
        }`}
      style={{ maxWidth: "100%" }}
    >
      <div>
        {isEditing ? (
          <div className="d-flex">
            <textarea
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              autoFocus
            />
            <button className="btn btn-success ml-2 guardar" onClick={handleSaveEdit}>
              Guardar
            </button>
            <button className="btn btn-danger ml-2" onClick={handleCancelEdit}>
              Cancelar
            </button>

          </div>
        ) : (
          <div>
            <span style={{
              textDecoration: completed ? 'line-through' : 'none',
              fontSize: "18px",
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
              maxWidth: '100%',
              display: 'inline-block',
            }}>
              {task.text}

            </span>
            <div>
              {completed ? (
                <>
                  <button className="btn btn-warning ml-2 " onClick={handleUndoComplete}>
                    Deshacer
                  </button>
                  <button className="btn btn-danger ml-2 " onClick={handleDelete}>
                    Eliminar
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-success ml-2" onClick={handleComplete}>
                    Realizado
                  </button>
                  <button style={{ marginLeft: "8px" }} className="btn btn-warning ml-2" onClick={() => setIsEditing(true)}>
                    Editar
                  </button>
                  <button className="btn btn-danger ml-2" onClick={handleDelete}>
                    Eliminar
                  </button>


                </>
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

// Finalmente, el componente TaskItem se exporta para que pueda ser utilizado en otros archivos
// de la aplicación.
export default TaskItem;
