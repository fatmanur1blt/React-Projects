import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({task,todoComplete, deleteTodo, editTodo}) {
  return (
    <div className='todo'>
   
      <div className='todo-p'>
      <p onClick={() => todoComplete(task.id)}
         className={`${task.completed ? 'completed':""}`}>{task.task}</p>
      </div>
      <div>
        <FontAwesomeIcon className='font' icon={faPenToSquare} 
          onClick={()=> editTodo(task.id)}/>
        <FontAwesomeIcon className='font' icon={faTrash} 
          onClick={()=> deleteTodo(task.id)}/>
      </div>
    </div>
  );
}

export default Todo;