import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions'
import './AddTodo.css'

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {
  //console.log(props)
  const [state, setState] = React.useState({
    title:'',
    description:'',
    place:'',
    date:''
  });

  function handleChange(e){
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.addTodo(state)
  }

  return (
    <div>
      <form className='form' onSubmit = { (e) => handleSubmit(e) } >
        <label htmlFor='title'>Title</label>
        <input className='inputs'name='title' value={state.name} onChange={(e) => handleChange(e)} />
        <label htmlFor='description'>Description</label>
        <textarea className='inputs' value={state.description} name='description' onChange={(e) => handleChange(e)}></textarea>
        <label  htmlFor='place'>Place</label>
        <input className='inputs' name='place' value={state.place} onChange={(e) => handleChange(e)} />
        <label htmlFor='date'>Date</label>
        <input className='inputs' name='date' value={state.date} onChange={(e) => handleChange(e)} />
        <button className='button' type='submit' >Submit</button>
      </form>
    </div>
  )
};

export default connect( null, {addTodo} )(AddTodo);