// Este código define un componente funcional de React llamado TaskList,
// que representa la lista de tareas en la interfaz de usuario.

// Se importa React y el componente TaskItem que se utiliza en la lista.
import React from 'react';
import TaskItem from './TaskItem';


// TaskList es un componente funcional que toma cuatro propiedades (tasks, onDelete, onComplete, onEdit).
// Utiliza estas propiedades para iterar sobre la lista de tareas (tasks)
// y renderizar un componente TaskItem para cada tarea.
// key={task.id} se utiliza para proporcionar una clave única a cada TaskItem,
// ayudando a React a identificar y manejar eficientemente los elementos de la lista.
// onDelete, onComplete, y onEdit se pasan como propiedades a cada TaskItem,
// para que puedan ser llamadas cuando sea necesario desde los elementos individuales de la lista.

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
  return (
    <ul className="list-group d-flex flex-wrap">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit} 
        />
      ))}
    </ul>
  );
};
// El componente TaskList renderiza un elemento de lista (<ul>) con la clase list-group 
// y flex-wrap. Dentro de este elemento de lista, utiliza el método map para iterar 
// sobre la lista de tareas (tasks) y renderiza un componente TaskItem para cada tarea.

// Finalmente, el componente TaskList se exporta para que pueda ser utilizado
// en otros archivos de la aplicación.
export default TaskList;



