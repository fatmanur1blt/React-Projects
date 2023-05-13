import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoEdit from './TodoEdit';

function TodoInclusive() {
  const [todoShow, setTodoShow] = useState([]);

  const addTodo = arr =>{
    setTodoShow([...todoShow,{id:crypto.randomUUID(),
    task:arr, completed : false, editTodo:false}]);
    console.log(todoShow);
  }

  const todoComplete = id => {
    setTodoShow(todoShow.map(arr => arr.id === id ? 
        {...arr, completed:!arr.completed} : arr));
        console.log('is working');
  }
  const deleteTodo = id => {
    setTodoShow(todoShow.filter(arr => arr.id !== id))
  }
  const editTodo = id => {
    setTodoShow(todoShow.map(arr=> arr.id === id ? 
      {...arr,isEdit: !arr.isEdit}:arr))
  }
  const editTask = (task, id) =>{
    setTodoShow(todoShow.map(arr => arr.id === id ?
      {...arr, task, isEdit: !arr.isEdit}:arr))
  }
  return (
    <div>
        <TodoForm addTodo={addTodo}/>
        {todoShow.map((arr,index)=>(
          arr.isEdit ? (
            <TodoEdit editTodo={editTask} task={arr}/>
          ): ( <Todo task = {arr} key={index} 
            todoComplete={todoComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}/>
            )
        ))}
        
    </div>
  )
}

export default TodoInclusive;