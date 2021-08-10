import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Todo from '../Todo/Todo.js'
import Todos from '../Todos/Todos'

export function Home() {
  const activos= useSelector(state=>state.Activo)
  const TodoAll= useSelector(state=>state.All)
  const terminados= useSelector(state=>state.Terminado)
  
  const [activo, setTodo] = useState(activos)
  const [terminado, setTerminado] = useState(terminados)
  const [all, setAll] = useState(TodoAll)

  useEffect(() => {
    setTodo(activos)
  }, [activos])
  useEffect(() => {
    setTerminado(terminados)
  }, [terminados])

  useEffect(() => {
    setAll(TodoAll)
  }, [TodoAll])
  return (
    <div>
      <div>
          <p>Tareas Pendientes</p>
          {activo.length>0 && activo.map(e=><Todo key={e.id} tod={e}/>)}

      </div>
      <div>
          <p>Tareas </p>
          {all.length>0 && <Todos array={all}/>}
      </div>
      <div>
          <p>Tareas Terminadas</p>
          {terminado.length>0 && terminado.map(e=><Todo key={e.id} tod={e}/>)}
      </div>
    </div>
  )
};

export default Home;