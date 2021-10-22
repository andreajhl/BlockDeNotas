import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {detailsNote} from '../../actions/index';

const detailState = (state) => state.details

export default function DetailsNote() {

  const id= useParams();
  const dispatch = useDispatch();
  const details = useSelector(detailState);

  const {title,body} = details;
  
  useEffect(() => {
    dispatch(detailsNote(id))
  }, [dispatch,detailsNote])

  return (
    <div className='details_text'>
      <h2>{title}</h2>
      <p><label>Note n° {id}</label></p>
      <p>{body}</p>        
    </div>
  )  
};