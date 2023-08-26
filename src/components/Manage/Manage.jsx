import React, { useState } from "react";
import image from "../../assets/Images/png/Manage_img.png";
import image_res from "../../assets/Images/png//manage__res.png";
import "./style.css";

const Manage = () => {
  const [btn, setBtn] = useState(true);
  const [btn1, setBtn1] = useState(true);

  const [res_btn, setResBtn] = useState(true);
  const [res_btn1, setResBtn1] = useState(true);

  
  return (
    <>
      <section className="manage">
        <div className="container">
          <div className="manage__wrapper">
            <h1>Управляйте пивоварней со своего смартфона</h1>
            <p>В мобильном приложении, благодаря блоку управления с WiFi</p>
            <img src={image} alt="Image" />

              <table>
                <tr>
                  <th className="table__one">Функции</th>
                  <th>
                    <button
                      onClick={() => setBtn(!btn)}
                      className={btn ? "table__two" : "table__two btn__border"}
                    >
                      Пивоварня <br /> без WiFi
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => setBtn1(!btn1)}
                      className={
                        btn1 ? "table__three" : "table__three btn__border"
                      }
                    >
                      Пивоварня <br /> c WiFi
                    </button>
                  </th>
                </tr>

                <tr>
                  <td className="manage__td1">Дисплей</td>
                  <td className="manage__td2">Текстовый</td>
                  <td className="manage__td3">Графический</td>
                </tr>

                <tr>
                  <td className="manage__td1">Режим варки</td>
                  <td className="manage__td2">Ручной и автоматический</td>
                  <td className="manage__td3">Ручной и автоматический</td>
                </tr>

                <tr>
                  <td className="manage__td1">Сохранение рецептов</td>
                  <td className="manage__td2">10</td>
                  <td className="manage__td3">8</td>
                </tr>

                <tr>
                  <td className="manage__td1">Отложенный старт</td>
                  <td className="manage__td2 true">✓</td>
                  <td className="manage__td3 true">✓</td>
                </tr>

                <tr>
                  <td className="manage__td1">Звуковая сигнализация</td>
                  <td className="manage__td2 true">✓</td>
                  <td className="manage__td3 true">✓</td>
                </tr>

                <tr>
                  <td className="manage__td1">
                    Количество температурныхпауз в автоматическом режиме
                  </td>
                  <td className="manage__td2">6 + температура засыпи</td>
                  <td className="manage__td3">6 + температура засыпи</td>
                </tr>

                <tr>
                  <td className="manage__td1">
                    Удаленное управление-контроль пивоварней через WiFi
                  </td>
                  <td className="manage__td2 false">×</td>
                  <td className="manage__td3 true">✓</td>
                </tr>

                <tr>
                  <td className="manage__td1">
                    Работа с сеpвеpoм <br /> wifi.bavaria-beer.ru
                  </td>
                  <td className="manage__td2 false">×</td>
                  <td className="manage__td3 true">✓</td>
                </tr>

                <tr>
                  <td className="manage__td1">Работа с мобильным приложением </td>
                  <td className="manage__td2 false">×</td>
                  <td className="manage__td3 true">✓</td>
                </tr>

                <tr>
                  <td className="manage__td1 sss__mng">Стоимость</td>
                  <td className="manage__td2 titles__manage">45 999 ₽</td>
                  <td className="manage__td3 titles__manage">55 999 ₽</td>
                </tr>

                <tr>
                  <td className="manage__td1 "></td>
                  <td className="manage__td2 titles__btns">
                    <button
                      onClick={() => setBtn(!btn)}
                      className={btn ? "" : "btn__bg"}
                    >
                      Заказать
                    </button>
                  </td>
                  <td className="manage__td3 titles__btns">
                    <button
                      onClick={() => setBtn1(!btn1)}
                      className={btn1 ? "" : "btn__bg"}
                    >
                      Заказать
                    </button>
                  </td>
                </tr>
              </table>
          </div>

          <div className="manage__responsive">
            <h1>Управляйте пивоварней со своего смартфона</h1>
            <p>В мобильном приложении, благодаря блоку управления с WiFi</p>
            <img src={image_res} alt="IMage" />

            <button
              onClick={() => setResBtn(!res_btn)}
              className={res_btn ? "manage__res--btn1" : "clc"}
            >
              {res_btn ? " Сравнить с моделью с WiFi" : "Пивоварня c WiFi"}
            </button>

            <button
              onClick={() => setResBtn1(!res_btn1)}
              className={res_btn1 ? "manage__res--btn1" : "clc"}
            >
              {res_btn ? "Сравнить с моделью без WiFi" : "Пивоварня без WiFi"}
            </button>

            <div className="table__res">
              <div style={{ display: res_btn ? "none" : "block" }}>
                <table className="wifi__table">
                  <tr>
                    <td>Дисплей</td>
                    <td className="center">Графический</td>
                  </tr>
                  <tr>
                    <td>Режим варки</td>
                    <td className="center">Ручной и автоматический</td>
                  </tr>
                  <tr>
                    <td>Сохранение рецептов</td>
                    <td className="center">8</td>
                  </tr>
                  <tr>
                    <td>Отложенный старт</td>
                    <td className="true__res center">✓ </td>
                  </tr>
                  <tr>
                    <td>Звуковая сигнализация</td>
                    <td className="true__res center">✓</td>
                  </tr>
                  <tr>
                    <td>
                      Количество температурныхпауз в автоматическом режиме
                    </td>
                    <td className="center">6 + температура засыпи</td>
                  </tr>
                  <tr>
                    <td>Удаленное управление-контроль пивоварней через WiFi</td>
                    <td className="true__res center">✓</td>
                  </tr>
                  <tr>
                    <td>Работа с серверомwifi.bavaria-beer.ru </td>
                    <td className="true__res center">✓</td>
                  </tr>
                  <tr>
                    <td>Работа с мобильным приложением </td>
                    <td className="true__res center">✓</td>
                  </tr>
                  <tr>
                    <td>Стоимость</td>
                    <td className="manage__res--h1 center">5 990 руб.</td>
                  </tr>
                </table>
              </div>

              <div style={{ display: res_btn1 ? "none" : "block" }}>
                <table className="wifi__table">
                  <tr>
                    <td>Дисплей</td>
                    <td className="center">Текстовый</td>
                  </tr>
                  <tr>
                    <td>Режим варки</td>
                    <td className="center">Ручной и автоматический</td>
                  </tr>
                  <tr>
                    <td>Сохранение рецептов</td>
                    <td className="center">10</td>
                  </tr>
                  <tr>
                    <td>Отложенный старт</td>
                    <td className="true__res center">✓ </td>
                  </tr>
                  <tr>
                    <td>Звуковая сигнализация</td>
                    <td className="true__res center">✓</td>
                  </tr>
                  <tr>
                    <td>
                      Количество температурныхпауз в автоматическом режиме
                    </td>
                    <td className="center">6 + температура засыпи</td>
                  </tr>
                  <tr>
                    <td>Удаленное управление-контроль пивоварней через WiFi</td>
                    <td className="false__res center">×</td>
                  </tr>
                  <tr>
                    <td>Работа с серверомwifi.bavaria-beer.ru </td>
                    <td className="false__res center">×</td>
                  </tr>
                  <tr>
                    <td>Работа с мобильным приложением </td>
                    <td className="false__res center">×</td>
                  </tr>
                  <tr>
                    <td>Стоимость</td>
                    <td className="manage__res--h1 center">5 990 руб.</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manage;
