import React, {useState} from 'react'

function TodoForm({addTodo}) {

    const [value, setValue] = useState("");

    const submitForm = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

  return (
    <form onSubmit={submitForm}>
        <h1>TO-DO-APP</h1>

        <input type='text' 
        placeholder='add something'
        className='todo-input'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button type='submit' className='todo-button'>ADD</button>
    </form>
  )
}

export default TodoForm;