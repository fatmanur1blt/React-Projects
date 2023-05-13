import React, {useState} from 'react'

function TodoEdit({editTodo,task}) {

    const [value, setValue] = useState(task.task);

    const submitForm = e =>{
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }
  return (
    <form onSubmit={submitForm}>

        <input type='text' 
        placeholder='update'
        className='todo-input'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button type='submit' className='todo-button'>UPDATE</button>
    </form>
  )
}

export default TodoEdit;