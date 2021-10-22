import React from 'react';

import Note from '../Note/Note.jsx'
import '../../Styles/Notes.scss'

export default function Notes({notes}) {
  
  return (
    <div className='notes'>
      {
        notes && notes.map(e=><Note key={e.id} note={e}/>)
      }
    </div>
  )
};