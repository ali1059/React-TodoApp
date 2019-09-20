import React,{Component} from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

 class App extends Component {
  state={
    items:[{id:1,title:'Wakeup'},{id:2,title:'Breakfast'}],
    id:uuid(),
    item:'',
    editItem:false
  };

  handleChange=(e)=>{ console.log('Handle Change') }
  handleSubmit=(e)=>{ console.log('Handle Submit') }
  clearList = ()=>{ console.log('Clear List') }
  handleDelete = (id)=>{ console.log(`handle Delete ${id}`) }
  handleEdit = (id)=>{console.log(`Handle Edit ${id}`)}


render(){
  return (
     <div className='container'>
      <div className='row'>
       <div className='col-10 mx-auto col-md-8 bg-warning m-23'>
        <h3 className='text-capitalize text-center'>todo input</h3>
          <TodoInput item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}  />
          <TodoList items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} />

       </div>
      </div>
     </div>
  );
}
}

export default App;
