import React from 'react'
import Logo from './logo/Logo'
import Buttons from './buttons/Buttons'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="logo">
            <Logo/>
        </div>
        <div className="buttons">
            <Buttons/>
        </div>

    </div>
  )
}

export default Header