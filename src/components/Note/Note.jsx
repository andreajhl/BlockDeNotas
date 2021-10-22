import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {removeNote, editNote} from '../../actions/index.js'

import '../../Styles/Note.scss'
import {TiDelete} from 'react-icons/ti'
import {FaPencilAlt} from 'react-icons/fa'
import {BsEmojiSmile} from 'react-icons/bs'

export default function Note({note}) {

    const {id,title}=note;
    const dispatch = useDispatch();

    var colorNote;
    var optionColor=`${id/3}`.split('.')
    
    if(optionColor[1] === undefined) colorNote = '#00A19D'
    else if(optionColor[1][0]%2===0) colorNote = '#FFB344'
    else colorNote = '#B1E693'
    return (
        <div className='note' style={{backgroundColor:colorNote}}>
            <div className='note_pin'>
                <BsEmojiSmile className='note_pin_i'/>
            </div>
            <div className='note_buttons'>
                <button onClick={()=>dispatch(editNote(id))} className='note_buttons_element'><FaPencilAlt/></button>
                <button onClick={()=>dispatch(removeNote(id))} className='note_buttons_element'><TiDelete className='note_buttons_i' /></button>
            </div>
            <div>
                <Link to={`/edit/${id}`} key={id} style={{textDecoration:'none'}}>
                    <p>{title}</p>
                </Link>
            </div>
        </div>
    )
};