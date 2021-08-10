import React,{useState} from 'react'; 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addTodo } from '../../actions'

import swal from 'sweetalert';


// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export  function AddTodo() {
  const dispatch = useDispatch()
  const history= useHistory()

  const [state, setState] = useState({
    title:'',
    description:'',
  });

  function handleChange(e){
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addTodo(state))
    setState({
      title:'',
      description:'',
    });
    tarea()
  }

  function tarea(){
    swal("Tarea Creada", "", "success")
    history.push('/')

  }

  return (
    <div>
      <form className='form' onSubmit = { (e) => handleSubmit(e)} >
        <label className='labelF' >Tarea</label>
        <input className='inputs'name='title' value={state.name} type='text' onChange={(e) => handleChange(e)} />
        <label className='labelF' >Descricción</label>
        <textarea className='inputs' value={state.description} name='description' onChange={(e) => handleChange(e)}></textarea>
      <button className='button' type='submit'>Crear Tarea</button>
      </form>
      
    </div>
  )
};

