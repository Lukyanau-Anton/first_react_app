import React from "react";
import logo from "../../logo.svg";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img
                className={style.logo}
                src={'https://cfcdn.apowersoft.info/astro/picwish/_astro/scene-logo-after@530w.df3314dd.png'}
                alt={logo}/>
        </header>);
}

export default Header;