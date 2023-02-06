import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './layout.scss'

export default function Home() {
  return (
    <div className='mainLayout'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/figure'}>角色</NavLink>
      <NavLink to={'/weapon'}>武器</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
