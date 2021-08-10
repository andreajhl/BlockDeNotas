import React from 'react';
import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <div  className='Nav'>
      <NavLink to='/'><span className='spanNav'>TODOS</span></NavLink>
      <NavLink to='/add'><span className='spanNav'>Add Todo</span></NavLink>
    </div>
  )
};

export default Nav;