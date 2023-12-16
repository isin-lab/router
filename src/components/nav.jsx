import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  return ( 
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => isActive ? "menu__item-active menu__item" : "menu__item"}>Главная</NavLink>
      <NavLink to="/drift" className={({isActive}) => isActive ? "menu__item-active menu__item" : "menu__item"}>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className={({isActive}) => isActive ? "menu__item-active menu__item" : "menu__item"}>Time Attack</NavLink>
      <NavLink to="/forza" className={({isActive}) => isActive ? "menu__item-active menu__item" : "menu__item"}>Forza Karting</NavLink>
    </nav>  
  );
}
 
export default Navigation;