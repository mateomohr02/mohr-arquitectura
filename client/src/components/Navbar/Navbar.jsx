import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Logo.jpg'

import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.container}>
        <div>
            {/* LOGO */}
            <Link to='/'>
                <img className={style.logo}src={Logo} alt="Logo Mohr Arquitectura" />
            </Link>
        </div>
        <div>
            <Link className={`${style.links} ${style.linkText}`} to='/contacto'>CONTACTO</Link>
            <Link className={`${style.links} ${style.linkText}`} to='/portfolio'>PORTFOLIO</Link>
        </div>
    </div>
  )
}

export default Navbar