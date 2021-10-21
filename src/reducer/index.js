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
  detail:{},
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
      var index= state.notes.find((e,i)=>e.id===payload.id)

      return {
        ...state,
        notes: [...state.notes].splice(index,1,payload)
      }
    case DETAILS_NOTE:
      
      return{
        ...state,
        Detail: payload
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
