import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-2 justify-between'>

    <NavLink
    to='/'>
      Home 
    </NavLink>

    <NavLink to='/pastes'>
      Paste
    </NavLink>

    </div>

  )
}

export default Navbar