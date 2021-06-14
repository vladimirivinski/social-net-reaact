import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to={'/profile'}>
                <img
                    className={s.logo}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png'
                    alt=''
                />
            </NavLink>
            <div className={s.loginBlock}>{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
        </header>
    )
}

export default Header
