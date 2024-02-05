import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Page/Footer'
import Nav from '../Navigation/Nav'
import Home from '../Page/Home'

const Layout = () => {
  return (
    <>
      <Nav />
      <Home />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
