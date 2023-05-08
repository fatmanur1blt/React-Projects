import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoInclusive() {
  const [todoShow, setTodoShow] = useState([]);

  const addTodo = arr =>{
    setTodoShow([...todoShow,{id:crypto.randomUUID(),
    task:arr, completed : false, editTodo:false}]);
    console.log(todoShow);
  }

  const todoComplete = id =>{
    setTodoShow(todoShow.map(arr => arr.id === id ? 
        {...arr, completed:!arr.completed} : arr));
  }
  return (
    <div>
        <TodoForm addTodo={addTodo}/>
        {todoShow.map((arr,index)=>(
            <Todo task = {arr} key={index} todoComplete={todoComplete}/>
        ))}
        
    </div>
  )
}

export default TodoInclusive;