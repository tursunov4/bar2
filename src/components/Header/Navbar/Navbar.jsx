import React, { useState } from 'react'
import './navbar.css'
import sitelogo from '../../../assets/Images/svg/logoheader.svg'
import { Link } from 'react-router-dom'
import hamburger from '../../../assets/Images/svg/header.hamburger.svg'
import call from '../../../assets/Images/svg/contact.svg'
const Navbar = () => {
  const [sidebar ,setSidebar] = useState(false)
  
  return (
    <div className='navbar-section'>
     <Link to={'/'}>
     <img  src={sitelogo} alt="sitelogo" />
     </Link>
     <div className="navbar-section__links">
        <Link className='navbar-section__link' to={'/'}>О Bavaria</Link>
        <span className="navbar-section__link-span">
        </span>
        <Link className='navbar-section__link'  to={'/'}>Комплектация</Link>
        <span className="navbar-section__link-span">
        </span>
        <Link className='navbar-section__link' to={'/'}>Модели</Link>
        <span className="navbar-section__link-span">
        </span>
        <Link className='navbar-section__link' to={'/'}>Bavaria с WIFI</Link>   
     </div>
     <div className="navbar-section__contact">
         <h4>8 800 250 59 32</h4>
        <a>Заказать звонок</a>
       
     </div>
       <div className="header-navbar__mobile">
        <a href="#">
          <img src={call} alt="" />
        </a>
       <div onClick={()=>setSidebar(true)} className="navbar__ham-box1">
      <img src={hamburger} alt="" />
     </div>
       </div>
      {
        sidebar &&      
        <div id='navbar'  className="hamburger-sidebar">
         
          <div className='navbar-hamburger'>
          <Link  onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>О Bavaria</Link>
          <Link onClick={()=>setSidebar(false)} className='navbar-section__link2'  to={'/'}>Комплектация</Link>       
          <Link onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>Модели</Link>
          <Link onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>Bavaria с WIFI</Link>  
          </div>
          <div className="hamburger__contact">
         <h4>8 800 250 59 32</h4>
        <a>Заказать звонок</a>
       
     </div>
        </div>
      }

    </div>
  )
}

export default Navbar