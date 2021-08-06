import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
export function Nav() {
  return (
    <div  className='Nav'>
      <Link to='/'><span className='spanNav'>TODOS</span></Link>
      <Link to='/add'><span className='spanNav'>Add Todo</span></Link>
    </div>
  )
};

export default Nav;