import React, { useState } from 'react'
import './bavriya.css'
import product1 from "../../assets/Images/png/product1.png"
import product2 from '../../assets/Images/png/product2.png'
import product3 from '../../assets/Images/png/product3.png'
import wpro from '../../assets/Images/png/wpro.png'
import wpro2 from '../../assets/Images/png/wpro2.png'
import wpro3 from '../../assets/Images/png/wpro3.png'

const Bavariya = () => {
    const [wife , serWife] = useState(true)
    const wife2 = [
        {img: wife ? product1 : wpro  ,
        litr:'10 литров',
        litr2:'30 литров'
        },
        {img:wife ? product2 : wpro2  ,
         litr:'30 литров',
         litr2:'50 литров'
        },
        {img:wife ? product3 : wpro3  ,
        litr:'50 литров',
        litr2:'70 литров'
        }
    ]
  return (
    <>
    <section className="bavariya-section">
        <div className="container">
           <div className="bavariya-section__text">
            <h2>{wife ? "Выберите свою пивоварню BAVARIA":'BAVARIA для каждого'} </h2>
            <h4>{wife ? "От хобби до производственных масштабов" : "От хобби до производственных масштабов"}</h4>
           </div>
           <div className="bavariya-section__quiz">
                <button onClick={()=>serWife(false)} className={wife ? 'bavariya-section__quiz-button':'bavariya-section__quiz-avtive'}>Без WiFi</button>   
                <button onClick={()=>serWife(true) } className={wife? "bavariya-section__quiz-avtive" :'bavariya-section__quiz-button' }> С WiFi</button>
           </div>
        <ul className="bavariya-section__product">
            {
                wife2.map((item , indes)=>(
                    <li>
                    <div className='bavariya-seciton__product-image'>
                           <img src={item.img} alt="" />
                           <div className='bavariya-section__product-text'>
                               <span>{item.litr2}</span>
                           </div>
                    </div>
                    <div className="bavariya-section__product-about">
                        <div className="bavariya__product-text">
                        <p>Выход сусла за цикл:<span>{item.litr}</span></p>  
                        <p>Потребляемая мощность: <span> 1,5 кВт</span></p>
                        <p>Вес:  <span>13,7 кг</span></p>
                        <p>Работа через WiFi: <span> нет</span></p>
                        </div>
                        <div className="bavariya-price">
                            <span className='bavariya-price__new'>44 990 ₽</span>
                            <span className='bavariya-price__old'>64 290 ₽</span>
                        </div>
                        <button>Заказать</button>
                    </div>
                    </li>
        
                ))
            }
           
        </ul>
        </div>
    </section>
    </>
  )
}

export default Bavariya