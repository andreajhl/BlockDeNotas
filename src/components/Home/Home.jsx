import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialNotes } from '../../actions/index.js';

import Note from '../Note/Note.jsx'

import '../../Styles/Home.scss'


//acceso a estados globles
const notesState=(state)=>state.notes;

export function Home() {
  const dispatch = useDispatch()
  const notes= useSelector(notesState)

  useEffect(() => {
    dispatch(initialNotes())
  }, [dispatch])

  return (
    <div className='home'>

      <div className='home_tarea'>
        <div className='home_tarea_p'>
          <p >Tareas</p>
        </div>
        <div className='home_tarea_con'>
          {notes.length>0 && notes.map(e=><Note key={e.id} tod={e}/>)}
        </div>
      </div> 
      <div className='home_tarea'>

      </div>
    </div>
  )
};

export default Home;