import React from 'react';

import Todo from '../Todo/Todo.js'

export default function Todos({array}) {
  
  return array.map(e=><Todo key={e.id} tod={e}/>)
};