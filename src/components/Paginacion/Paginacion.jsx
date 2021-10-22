import React, {useState, useEffect} from "react"
import { useSelector } from 'react-redux';
import Notes from '../Notes/Notes.jsx'

import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import '../../Styles/Paginacion.scss'
const notesState=(state)=>state.notes;

const cards = 9

const Paginacion = () => {

    const notes= useSelector(notesState);

    const [items, setItems]=useState(null);

    const [currentPag, setCurrentPag]= useState(0);


    useEffect(()=>{
        setItems([...notes].splice(0,cards))
    },[notes])

    const next=()=>{
        const totalElementos= notes.length
        const next= currentPag +1
        const index= next * cards
        if(index>totalElementos) return;
        setItems([...notes].splice(index,cards))
        setCurrentPag(next)
    };
 
    const prev=()=>{
        const prev= currentPag-1
        if(prev < 0) return;
        const index= prev * cards
        setItems([...notes].splice(index,cards))
        setCurrentPag(prev)
    };

    return (
        <div className='paginacion'>
            <div className='paginacion_notes'>
                <Notes notes={items} />
            </div>
          <div className='paginacion_buttons'>
                <button className='paginacion_btn' onClick={()=>prev()}><AiOutlineArrowLeft className='paginacion_btn_i'/></button>
                <button className='paginacion_btn' onClick={()=>next()}><AiOutlineArrowRight className='paginacion_btn_i'/></button>
          </div>
        </div>
    )
};

export default Paginacion