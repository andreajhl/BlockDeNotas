import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {todoDetail, toTerminado} from '../../actions/index'

import swal from 'sweetalert';



export default function TodoDetail({match}) {

  const id= match.params.id

  const history=useHistory()

  const dispatch = useDispatch()
  dispatch(todoDetail(id))

  const state = useSelector(state => state.Detail)
  
  function culminar(){
    dispatch(toTerminado(id))
    swal("Tarea Culminada", "", "success")
    history.push('/')
   
  }

 if(state){
    return (
      <div>
        <p>{state.title}</p>
        <p>{state.status}</p>
        <p>{state.description}</p>
       {
         state.status==='Activo' && <div>
           <p>¿culminaste tu tarea?</p>
           <button onClick={()=> culminar()}></button>
         </div>
       }
        
      </div>
    )
  }else{
    setTimeout(() => {
      history.push('/')
    }, 1000);
   
    return(
       <div>No existe la tarea buscada</div>
    )
    
  }
  
};