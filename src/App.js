import React from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

function App() {
  return (
     <div className='container'>
      <div className='row'>
       <div className='col-4 bg-warning'>
          <TodoInput />
          <TodoList />
          <TodoItem />
       </div>
      </div>
     </div>
  );
}

export default App;
