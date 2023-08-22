import React from 'react'
import './header.css'
import play from '../../../assets/Images/png/play.png'
import raspochka from '../../../assets/Images/svg/raspochka.svg'
import bar from '../../../assets/Images/png/headerbar.png'
const Headers = () => {
  return (
    <div className='header-section2'>
      <div className="header-section__img-wrapper">
      
        <div className="hus">
          <img src={bar} alt="" />
          <div className="img-box__text">
            <img src={play} alt="" />
            <span>Видеообзор пивоварни</span>
          </div>

        </div>
      </div>
      <div className="header-section__text-wrapper">
        <h4>Автоматическая пивоварня</h4>
        <div className="text-wrapper__pirice">
          <h2>Bavaria</h2>
        </div>
        <h5>Ваш надёжный проводник в мир <br /> крафтового пивоварения</h5>
        <ul className="text-wrapper__about">
          <li>
            <h6>Управление через WiFi</h6>
            <p>Контролируйте процесс со своего смартфона</p>
          </li>
          <li>
            <h6>Управление через WiFi</h6>
            <p>Контролируйте процесс со своего смартфона</p>
          </li>
          <li>
            <h6>Управление через WiFi</h6>
            <p>Контролируйте процесс со своего смартфона</p>
          </li>
          <li>
            <h6>Управление через WiFi</h6>
            <p>Контролируйте процесс со своего смартфона</p>
          </li>
        </ul>
      <div className="img-wrapper__box">
        <div className="img-wrapper__box-text">
          <del>64290 ₽</del>
          <h5>44990 ₽</h5>
        </div>
        <button className='img-wrapper__raspochka'>Заказать</button>
        <button className='img-wrapper__raspochka2'>
          <img src={raspochka} alt="raspochkan" />
          Рассрочка
        </button>
      </div>
      </div>
    </div>
  )
}

export default Headers