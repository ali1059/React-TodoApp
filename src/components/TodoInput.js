import React,{Component} from 'react';

export default class TodoInput extends Component{
  render(){
    const { item,handleChange,handleSubmit,editItem } = this.props;
    return(
      <div className = 'card card-body'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='input-group-prepend'>
             <div className='input-group-text bg-primary text-white '>
                Input
             </div>
          </div>
          <input type='text' className='form-control text-capitalize' placeholder='Add todo item' value={item} onChange={handleChange} />
        </div>
        <button type='submit' className='btn btn-block btn-primary mt-3 text-uppercase'>Add item</button>
      </form>
        <h2>Hello from TodoInput</h2>
      </div>
    );
  }
}
