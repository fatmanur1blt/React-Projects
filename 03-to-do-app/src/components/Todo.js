import {useState} from 'react';

function Todo() {
  return (
    <>
      <h1>TO-DO-APP</h1>

     <input type='text' placeholder='add something'></input>
     <button>add</button>

     <ul>
       <li>number one</li>
       <li>number two</li>
       <li>number tree</li>
    </ul>
    </>
  );
}

export default Todo;