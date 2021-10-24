import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { initialNotes, logoutState} from '../../actions/index.js';

import Paginacion from '../Paginacion/Paginacion.jsx';
import DetailsNote from '../DetailsNote/DetailsNote.jsx';

import '../../Styles/Home.scss';
import {CgLogOut} from 'react-icons/cg';
import {ImPencil2} from 'react-icons/im';
import details from '../../img/details.png';

const noteDetailsState=(state)=>state.details;

export function Home() {

  const dispatch = useDispatch();
  const noteDetails= useSelector(noteDetailsState);

  useEffect(() => {
    dispatch(initialNotes())
  }, [dispatch]);

  return (
    <div className='home'>
      <button onClick={()=>dispatch(logoutState())} className='home_logout'><CgLogOut className='home_add_i'/></button>
     <div className='home_note_details'>
        <Link to='/add' className='home_add'><ImPencil2 className='home_add_i'/> New Note</Link>
        <img src={details} className='home_note_details_i' />
        {noteDetails.title && <div className='home_note_details_text'>
          <DetailsNote />
        </div>}
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