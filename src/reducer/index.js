import { buscarId, filtrarId } from "./funciones";

const initialState = {
  Activo: [],
  All:[],
  Terminado:[],
  Detail:{}
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  const {type, payload}=action
 
  switch(type) {
    // Aca va tu codigo;
    
    case 'AddTodo':
      return {
        ...state,
        Activo:[payload,...state.Activo],
        All: [payload,...state.All]
      }
    case 'RemoveTodo':
      return {
        ...state,
        Activo:filtrarId(payload,state.Activo),
        All:filtrarId(payload, state.All),
        Terminado: filtrarId(payload, state.Terminado)
      }
    case 'toTerminado':
      var todoD= buscarId(payload,state.Activo)
      todoD.status='Terminado'

      return {
        ...state,
        Activo: filtrarId(payload,state.Activo),
        Terminado: [todoD,...state.Terminado]
      }
    case 'TodoDetail':
      var search = buscarId(payload,state.All)
      return{
        ...state,
        Detail: search 
      }
    default:
      return state;
  }
  
}

export default todos;
