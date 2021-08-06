
const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch(action.type) {
    // Aca va tu codigo;
    case 'AddTodo':
      return [ ...state, action.payload ];
    case 'RemoveTodo':
      let id = action.payload;
      return state.filter((todo) => todo.id !== id );
    case 'ToInProgress':
      return state.map( (todo) => todo.id === action.payload ? {...todo,status:'InProgress'} : false );
    case 'ToDone':
      return state.map( (todo) => todo.id === action.payload ? {...todo,status:'Done'} : false );
    default:
      return state;
  }
}

export default todos;
