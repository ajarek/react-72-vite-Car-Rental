import React, { useState } from 'react'

import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className='nav'>
      <div className='nav-wrapper'>
        <Link
          to={'/'}
          className={'link'}
        >
          <div className='title'>
            <img
              src='./images/car-9.png'
              alt=''
              width={70}
            />
            <h1>Car Rental</h1>
          </div>
        </Link>
      </div>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <Link
          className='link'
          to={'/contact'}
        >
          <h2>Contact</h2>
        </Link>
        <Link
          className='link'
          to={'/about'}
        >
          <h2>About us</h2>
        </Link>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#f0f8ff'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
