import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './home.less'

export default function Home() {
  return (
    <div>
      主页
      <NavLink to={'/B'}>{'B页'}</NavLink>
      <NavLink to={'/C'}>C页</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
