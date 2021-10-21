import React from 'react'
import { useSelector } from "react-redux";
import { Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Login from "./components/Login/login";
import DetailsNote from './components/DetailsNote/DetailsNote';
import Home from './components/Home/Home';
import AddNote from './components/AddNote/AddNote';


// En este componente deberias cargar tus rutas.
export function App() {

  const token= useSelector(state=>state.user);

  return (
    <div className="App">
    <Switch>
      <Route 
        exact path='/login' render={()=>{
          return !token ? <Login/> : <Redirect to='/' />
        }}
      />
      <Route exact path= '/' render={()=>{
            return token? <Home/> : <Redirect to='/login'/>
          }}
      />
      <Route path= '/add/:id' render={()=>{
          return token? <AddNote/> : <Redirect to='/login'/>
        }}
      />
            <Route path= '/edit/:id' render={()=>{
          return token? <AddNote/> : <Redirect to='/login'/>
        }}
      />
            <Route path= '/heroe/:id' render={()=>{
          return token? <DetailsNote/> : <Redirect to='/login'/>
        }}
      />
    </Switch>
  </div>
  );
}

export default App;
