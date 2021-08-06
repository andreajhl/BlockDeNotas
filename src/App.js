import React from 'react'
import { Route } from 'react-router';
import './App.css';
import Nav from './components/Nav/Nav';
import TodoDetail from './components/TodoDetail/TodoDetail';
import Home from './components/Home/Home';
import { AddTodo } from './components/AddTodo/AddTodo';


// En este componente deberias cargar tus rutas.
export function App() {
  return (

    /* "/": La Home, acá vamos a ver nuestros todos.
"/add": En esta ruta vamos a poder crear nuestro TODO.
"/edit/{todoId}": en esta ruta, vamos a poder editar un todo para cambiarle su status. (extra credit) */
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddTodo} />
        <Route 
          path="/edit/:id" 
          render = {({match}) => <TodoDetail match={match} />}
        />
      </div>
  );
}

export default App;
