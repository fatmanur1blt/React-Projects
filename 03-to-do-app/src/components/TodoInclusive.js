import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

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
        {todoShow.map((arr,index)=>(
            <Todo task = {arr} key={index} />
        ))}
        
    </div>
  )
}

export default TodoInclusive;