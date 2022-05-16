import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import Buscador from '../Buscador/Buscador.jsx';
const NavBar = () => {
  return (
    <header className={s.nav_bar}>
    <nav>
        <ul className={s.nav_bar_list}>
            <li className={s.nav_bar_list_item}>
                <NavLink to="/">Countries</NavLink>
            </li>
        </ul>
    </nav>
    <div>
            <Buscador />
    </div>
</header>
  )
}

export default NavBar