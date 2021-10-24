import React,{useState, useEffect} from 'react'; 
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { parseJwt } from './ parseJwt';

import { addNote, detailsNote, editNote } from '../../actions'

import swal from 'sweetalert';
import '../../Styles/Form.scss'
import {SiCheckmarx} from 'react-icons/si'
import {AiOutlineArrowLeft} from 'react-icons/ai'


const noteDetails = (state) =>state.details

export default function FormNote({edit}) {

  const {id}= useParams();
  const history= useHistory();
  const dispatch = useDispatch();
  
  const note = useSelector(noteDetails);
  const {iat}=parseJwt(window.localStorage.getItem('token'));

  useEffect(() => {
    if(edit) dispatch(detailsNote(Number(id)));
  }, [id]);

  useEffect(() => {
    if(edit){
      setState({
        title:note.title,
        body:note.body
      });
    }
  }, [note]);

  const [state, setState] = useState({
    title:'',
    body:'',
  });

  function handleChange(e){
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(edit){
      dispatch(editNote(note.id,{...state,id:note.id, userId: note.userId}));
      swal("note edited", "", "success");
    }else{
      dispatch(addNote({...state,userId:iat }));
      swal("note created", "", "success");
    }
   
    setState({
      title:'',
      body:'',
    });

    history.push('/');
  }


  return (
    <div className='form'>
      <button onClick={()=>history.push('/')} className='button_home'><AiOutlineArrowLeft className='button_home_i'/> Home</button>
      <form className='form_c' onSubmit = { (e) => handleSubmit(e)} >
          <div className='button'>
            <button className='button_b' type='submit'><SiCheckmarx /></button>  
          </div>
          <div className='form_cc'>
            <p className='pF' >{edit ? ' Edit Note' : 'Add Note'}</p>
            <input className='input'name='title' value={state.title} type='text' onChange={(e) => handleChange(e)} />
            <p className='pF' >Description</p>
            <textarea className='inputText' value={state.body} name='body' onChange={(e) => handleChange(e)}></textarea>
          </div>
     </form>
    </div>
  )
};

