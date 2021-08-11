import React,{useState} from 'react'; 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addTodo } from '../../actions'

import swal from 'sweetalert';
import '../../Styles/Form.scss'
import {SiCheckmarx} from 'react-icons/si'


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
    <div className='form'>
      <form className='form_c' onSubmit = { (e) => handleSubmit(e)} >
          <div className='button'>
            <button className='button_b' type='submit'><SiCheckmarx /></button>  
          </div>
          <div className='form_cc'>
            <p className='pF' >Crear Tarea</p>
            <input className='input'name='title' value={state.name} type='text' onChange={(e) => handleChange(e)} />
            <p className='pF' >Descricción</p>
            <textarea className='inputText' value={state.description} name='description' onChange={(e) => handleChange(e)}></textarea>
          
          </div>
     </form>
    </div>
  )
};

