import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoInclusive() {
  const [todoShow, setTodoShow] = useState([]);

  const addTodo = (arr) =>{
    setTodoShow([...todoShow,{id:crypto.randomUUID(),
    task:arr, completed : false, editTodo:false}]);
    console.log(todoShow);
  }
  return (
    <div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoInclusive;