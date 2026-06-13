import { useState } from 'react'
import './Header.css'
import NavBar from '../NavBar/NavBar'

function Header() {

  return (
    <section className="header">
        <h1 className='header__title'>SunPeace</h1>
        {/* <NavBar /> */}
        <button className="header__cart-button">*CART*</button>
    </section>
  )
}

export default Header
