import React from "react";
import clasess from './nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
            <nav className={clasess.nav}>
                <div >
                    <Link className={clasess.item} to='/profile'>Profile</Link>
                </div>
                <div>
                    <Link className={clasess.item} to='/dialogs'>Messages</Link>
                </div>
                <div>
                    <a className={clasess.item} href={'#'}>News</a>
                </div>
                <div>
                    <a className={clasess.item} href={'#'}>Music</a>
                </div>
                <div>
                    <a className={clasess.item} href={'#'}>Settings</a>
                </div>
            </nav>
    );
}

export default Nav;