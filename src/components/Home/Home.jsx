import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { initialNotes } from '../../actions/index.js';

import Paginacion from '../Paginacion/Paginacion.jsx';
import DetailsNote from '../DetailsNote/DetailsNote.jsx';

import '../../Styles/Home.scss'
import details from '../../img/details.png'

const noteDetailsState=(state)=>state.details;

export function Home() {

  const dispatch = useDispatch();
  const noteDetails= useSelector(noteDetailsState);

  useEffect(() => {
    dispatch(initialNotes())
  }, [dispatch]);

  return (
    <div className='home'>
     <div className='home_note_details'>
        <img src={details} className='home_note_details_i' />
        {noteDetails && <DetailsNote />}
      </div>
      <div className='home_notes'>
        <div className='home_notes_col'>
          <Paginacion />
        </div>
      </div> 
 
    </div>
  )
};

export default Home;