import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete, editedTaskId, markTodoAsDone }) => {
  const handleDoneClick = () => {
    markTodoAsDone(task.id);
  };

  return (
    <div className="Todo animated">
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon className="edit-icon animated" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon animated" icon={faTrash} onClick={() => deleteTodo(task.id)} /> 
        <FontAwesomeIcon
          className={`done-icon animated ${task.id === editedTaskId ? "edited" : ""}`}
          icon={faCheckSquare}
          onClick={handleDoneClick}
        />
      </div>
    </div>
  );
};

















// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare, faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// export const Todo = ({ task, deleteTodo, editTodo, toggleComplete, editedTaskId }) => {
//   return (
//     <div className="Todo">
//       <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
//       <div>
//         <FontAwesomeIcon
//           className={`done-icon ${task.id === editedTaskId ? "edited" : ""}`}
//           icon={faCheckSquare}
//           onClick={() => markTodoAsDone(task.id)}
//         />
//         <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
//         <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
//       </div>
//     </div>
//   );
// };



















// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare, faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// export const Todo = ({ task, deleteTodo, editTodo, toggleComplete, markTodoAsDone }) => {
//   return (
//     <div className="Todo">
//       <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
//       <div className='todo-icons'>
//         <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
//         <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
//         {/* <FontAwesomeIcon className="done-icon" icon={faCheckSquare} onClick={() => markTodoAsDone(task.id)} /> */}
//         <FontAwesomeIcon
//   className={`done-icon ${task.id === editedTaskId ? "edited" : ""}`}
//   icon={faCheckSquare}
//   onClick={() => markTodoAsDone(task.id)}
// />
//       </div>
//     </div>
//   );
// };









// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

// export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
//   return (
//     <div className="Todo">
//         <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
//         <div>
//         <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
//         <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
//         <FontAwesomeIcon className="done-icon" icon={faCheckSquare} onClick={() => markTodoAsDone(task.id)} />
//         </div>
//     </div>
//   );
// };
