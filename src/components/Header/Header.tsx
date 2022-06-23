import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  isAuth: boolean
  login: string
}

export const Header: React.FC<HeaderPropsType> = (props) => {
  return <header className={s.header}>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
    <div className={s.loginBlock}>
      {props.isAuth
        ? <>{props.login}</>
        : <NavLink to='/login'>Login</NavLink>}
    </div>
  </header>;
};



