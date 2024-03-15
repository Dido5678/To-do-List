import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete, editedTaskId, markTodoAsDone }) => {
  const [doneIconColor, setDoneIconColor] = useState('white'); 

  const handleDoneClick = () => {
    markTodoAsDone(task.id);
    setDoneIconColor('green'); 
  };

  useEffect(() => {
    if (task.id === editedTaskId) {
      setDoneIconColor('green');
    }
  }, [editedTaskId, task.id]);

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
          style={{ color: doneIconColor }}
        />
      </div>
    </div>
  );
};

























