import {
  DETAILS_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE,
  ADD_NOTE,
  NOTES,
  ERROR,
  USER
} from '../actions/index'

var token=localStorage.getItem('token');

const initialState = {
  notes:[],
  details:{},
  user:token? token : false,
  errors:undefined
};

const rootReducer = (state = initialState, action) => {
  const {type, payload}=action
 
  switch(type) {
    
    case USER:
      return{
        ...state,
        user:payload
      }
    case NOTES:
      return{
        ...state,
        notes:payload
      }
    case ADD_NOTE:
      return {
        ...state,
        notes:[payload,...state.notes]
      }
    case REMOVE_NOTE:
      return {
        ...state,
        notes: [...state.notes].filter(e=>e.id!==payload)
      }
    case EDIT_NOTE:
      let index= state.notes.findIndex((e,i)=>e.id===payload.id)
      state.notes[index] = payload

      return {
        ...state,
        notes: [...state.notes]
      }
    case DETAILS_NOTE:
      let details = state.notes.find(e=>e.id===payload)
      return{
        ...state,
        details: details ? details : {}
      }
    case ERROR:
      return{
        ...state,
        errors:payload
      }
    default:
      return state;
  }
  
}

export default rootReducer;
