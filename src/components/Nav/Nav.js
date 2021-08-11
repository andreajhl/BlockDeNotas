import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../Styles/Nav.scss'

export function Nav() {
  return (
    <div  className='Nav'>
      <NavLink to='/' style={{textDecoration:'none'}}><span className='spanNav'>TAREAS</span></NavLink>
      <NavLink to='/add' style={{textDecoration:'none'}}><span className='spanNav'>Add TAREA</span></NavLink>
    </div>
  )
};

export default Nav;