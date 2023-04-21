import React from "react";
import style from './nav.module.css'

import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink className={({isActive})=> isActive ? style.active : style.item} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink className={({isActive})=> isActive ? style.active : style.item} to='/dialogs' >Messages</NavLink>
            </div>
            <div>
                <NavLink className={({isActive})=> isActive ? style.active : style.item} to='/news' >News</NavLink>
            </div>
            <div>
                <NavLink className={({isActive})=> isActive ? style.active : style.item} to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink className={({isActive})=> isActive ? style.active : style.item} to='/settings' >Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;

