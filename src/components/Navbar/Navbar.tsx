import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { BestFriendsContainer } from './BestFriends/BestFriends';

type NavbarPropsType = {

}

export const Navbar: React.FC<NavbarPropsType> = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
      </div>
      <BestFriendsContainer/>
    </nav>
  );
};