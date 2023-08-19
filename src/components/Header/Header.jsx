import React from 'react'
import Navbar from './Navbar/Navbar'
import './header.css'
const Header = () => {
  return (
    <header>
        <section className='header-section'>
         <div className="container">
            <Navbar/>
         </div>
        </section>
    </header>
  )
}

export default Header