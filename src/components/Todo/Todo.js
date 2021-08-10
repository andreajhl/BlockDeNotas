import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {removeTodo, toTerminado} from '../../actions/index.js'

import {TiDelete} from 'react-icons/ti'
import {AiFillCheckCircle} from 'react-icons/ai'

export default function Todo({tod}) {
  const dispatch = useDispatch()

    return (
    <div >
      <div>
        <div>
          <button onClick={()=>dispatch(removeTodo(tod.id))}><TiDelete /></button>
          <button onClick={()=>dispatch(toTerminado(tod.id))}><AiFillCheckCircle /></button>
        </div>
      </div>
     {tod && <Link to={`/edit/${tod.id}`}><p>{tod.title}</p></Link>}
    </div>
  )
  
};