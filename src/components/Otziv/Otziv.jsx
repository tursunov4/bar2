import React from 'react'
import phone from "../../assets/Images/png/iphone-11-pro-gold.png"
import user from "../../assets/Images/svg/User.svg"
import "./style.css"

const Otziv = () => {
  return (
    <>
      <div className="otziv">
        <div className="container">
          <div className="otziv__wrapper">
            <h1>Отзывы пользователей пивоварни BAVARIA</h1>
            <div className="otziv__slide">
              <img src={phone} alt="Image" />
              <div className="otziv__slide--user">
                <div className="information">
                  <img src={user} alt="User" />
                  <div className="owner">
                    <h3>Олег Сальков, г. Москва</h3>
                    <p>Владелец точильной мастерской</p>
                  </div>
                </div>

                <p className='hidden'>
                  — Долго не понимал в чём прикол гриндера и чем он лучше
                  лепесткового круга на болгарку особо. Теперь попробовал сам и
                  выяснил . шлифовка поверхности получается быстрее и ровнее.
                  Для подгонки деталей сварки вообще оптимал, кто занимается
                  сваркой нержавейки, если нужно сделать ровную плоскость из
                  железяки… шлифовка древесины от лкм.
                </p>

                <p className='hidden'>
                  — В общем норм даже если долго колбасить. Взял в мастерску
                  пока доволен. Будем смотреть дальше
                </p>
              </div>
            </div>

            <button>Оставить отзыв</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otziv