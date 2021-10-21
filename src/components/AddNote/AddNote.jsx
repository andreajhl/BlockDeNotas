import React,{useState} from 'react'; 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addNote } from '../../actions'

import swal from 'sweetalert';
import '../../Styles/Form.scss'
import {SiCheckmarx} from 'react-icons/si'

export default function AddNote() {
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
    dispatch(addNote(state))
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

