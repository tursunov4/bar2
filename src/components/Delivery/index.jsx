import React from 'react'
import dpd from "../../assets/Images/svg/del_leftcard 1.svg"
import trian from "../../assets/Images/svg/del_leftcard 2.svg"
import mail from "../../assets/Images/svg/del_leftcard 3.svg";
import pek from "../../assets/Images/svg/del_leftcard 4.svg";
import masterCard from "../../assets/Images/svg/mastecard.svg"
import mir from "../../assets/Images/svg/mir.svg"
import visa from "../../assets/Images/svg/visa.svg";
import delLogo from "../../assets/Images/svg/del_logo.svg";


import "./style.css"

const index = () => {
  return (
    <>
      <section className="delivery">
        <div className="container">
          <div className="delivery_wrapper">
            <div className="del_left">
              <div className="del_leftcard">
                <h1 className="del_leftcard_h1">Доставка</h1>
                <p className="del_leftcard_p">
                  по всей России от 1 до 5 дней курьером или ТК
                </p>
                <div className="del_left_img">
                  <img src={dpd} alt="image" />
                  <img src={trian} alt="image" />
                  <img src={mail} alt="image" />
                  <img src={pek} alt="image" />
                </div>
              </div>

              <div className="del_leftcard">
                <h1 className="del_leftcard_h1">Оплата</h1>
                <p className="del_leftcard_p">
                  картой или наличными после получения товара
                </p>
                <div className="del_left_img">
                  <img src={masterCard} alt="image" />
                  <img src={mir} alt="image" />
                  <img src={visa} alt="image" />
                </div>
              </div>
            </div>

            <div className="del_right">
              <div className="del_right-top">
                <img src={delLogo} alt="Logo" />
                <h1>Рассрочка от Тинькофф</h1>
                <p>на 4 месяца без процентов и переплат</p>
              </div>

              <div className="del_right-bot">
                <p>
                  <strong>Шаг 1</strong>
                  <span>Нажмите кнопку «Купить в рассрочку».</span>
                </p>

                <p>
                  <strong>Шаг 2</strong>
                  <span>В появившемся окне выберите нужную комплектацию.</span>
                </p>
                <p>
                  <strong>Шаг 3</strong>
                  <span>Нажмите «Заказать».</span>
                </p>

                <div className='del_right-bot_btn'>
                  <button>Заказать</button>
                  <p>От 2 499 руб. / мес.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index