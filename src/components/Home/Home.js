import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Todo from '../Todo/Todo.js'

import '../../Styles/Home.scss'

export function Home() {
  const activos= useSelector(state=>state.Activo)
  const terminados= useSelector(state=>state.Terminado)
  
  const [activo, setTodo] = useState(activos)
  const [terminado, setTerminado] = useState(terminados)

  useEffect(() => {
    setTodo(activos)
  }, [activos])
  useEffect(() => {
    setTerminado(terminados)
  }, [terminados])
  return (
    <div className='home'>
      {/* <div className='home_tarea'>
        <div className='home_tarea_p'>
           <p >Tareas Pendientes</p>
        </div>
        <div className='home_tarea_con'>
          {all.length>0 && <Todos array={all}/>}
        </div>
      </div> */}
      <div className='home_tarea'>
        <div className='home_tarea_p'>
          <p >Tareas</p>
        </div>
        <div className='home_tarea_con'>
          {activo.length>0 && activo.map(e=><Todo key={e.id} tod={e}/>)}
        </div>
      </div> 
      <div className='home_tarea'>
        <div className='home_tarea_p'>
           <p >Tareas Terminadas</p>
        </div>
         <div className='home_tarea_con'> 
           {terminado.length>0 && terminado.map(e=><Todo key={e.id} tod={e}/>)}
         </div>
      </div>
    </div>
  )
};

export default Home;