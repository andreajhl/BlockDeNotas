import React from 'react';

import Note from '../Note/Note.jsx'

export default function Notes({array}) {
  
  return array.map(e=><Note key={e.id} tod={e}/>)
};