import React, { useState } from 'react'
import './navbar.css'
import sitelogo from '../../../assets/Images/svg/logoheader.svg'
import { Link } from 'react-router-dom'
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
     <div onClick={()=>setSidebar(true)} className="navbar__ham-box">
     <ul className="navbar__hamburger">
      <li></li>
      <li></li>
      <li></li>
     </ul>
     </div>
      {
        sidebar &&      
        <div className="hamburger-sidebar">
          <div className="hamburger__box-logo">
          <Link to={'/'}>
          <img  src={sitelogo} alt="sitelogo" />
          </Link>
           <div>
           <ul onClick={()=>setSidebar(false)} className="exit-box">
            <li className='exit-line1'></li>
            <li className='exit-line2'></li>
          </ul>
           </div>
          </div>
          <div className='navbar-hamburger'>
          <Link  onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>О Bavaria</Link>
          <Link onClick={()=>setSidebar(false)} className='navbar-section__link2'  to={'/'}>Комплектация</Link>       
          <Link onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>Модели</Link>
          <Link onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>Bavaria с WIFI</Link>  
          </div>
          <div className="hamburger__contact">
            <h4>8 800 250 59 32</h4>
            <p>Звонок по России бесплатный</p>
            <button>Заказать обратный звонок</button>
          </div>
        </div>
      }

    </div>
  )
}

export default Navbar