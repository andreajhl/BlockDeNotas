import React from 'react';
import {useSelector } from 'react-redux';

import '../../Styles/Detail.scss'

const detailState = (state) => state.details

export default function DetailsNote() {
  
  const details = useSelector(detailState);

  const {title, body, id, userId} = details;
  
  return (
    <div className='details'>
      <h2>{title}</h2>
      <div className='details_div'>
        <label>Note n° {id}</label>
        <label>User n° {userId}</label>
      </div>
      <p>{body}</p>        
    </div>
  )  
};