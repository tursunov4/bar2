import React from "react";
import Bv from "../../assets/Images/png/Bv.png";
import "./style.css";

const index = () => {
  return (
    <>
      <section className="bv_card">
        <div className="container">
          <div className="bv_wrapper">
            <h1 className="bv_about">С BAVARIA варить пиво сможет каждый</h1>
            <p className="bv_title">
              3 аргумента в пользу Мюнхенской пивоварни
            </p>
            <div className="cards_wrapper">
              <div className="card__">
                <img src={Bv} alt="Card Image" />
                <div className="left__">
                  <p className="left__number">1</p>
                  <h3 className="left__h4">
                    Универсальное крепление под болгарку
                  </h3>

                  <p className="left__title">
                    Для Dino подойдут самые ходовые болгарки на 115 и 125 мм: 
                  </p>

                  <ul className="left__dots">
                    <li>Маломощные (до 900 Вт) </li>
                    <li>Мощные (до 1,8 кВт)</li>
                  </ul>

                  <p className="left__title">
                    Выбирайте то, что нужно именно вам! Сделать гриндер мощнее
                    можно в любой момент — достаточно просто заменить болгарку.
                    Работайте с деревом, эпоксидкой, пластиком или переходите на
                    более твёрдые материалы. А продуманное крепление позволит
                    собрать и разобрать Dino за считанные секунды.
                  </p>
                </div>
              </div>

              <div className="card__rev">
                <div className="left__">
                  <p className="left__number">2</p>
                  <h3 className="left__h4">
                    Универсальное крепление под болгарку
                  </h3>

                  <p className="left__title">
                    Для Dino подойдут самые ходовые болгарки на 115 и 125 мм: 
                  </p>

                  <ul className="left__dots">
                    <li>Маломощные (до 900 Вт) </li>
                    <li>Мощные (до 1,8 кВт)</li>
                  </ul>

                  <p className="left__title">
                    Выбирайте то, что нужно именно вам! Сделать гриндер мощнее
                    можно в любой момент — достаточно просто заменить болгарку.
                    Работайте с деревом, эпоксидкой, пластиком или переходите на
                    более твёрдые материалы. А продуманное крепление позволит
                    собрать и разобрать Dino за считанные секунды.
                  </p>
                </div>

                <img src={Bv} alt="Card Image" />
              </div>

              <div className="card__">
                <img src={Bv} alt="Card Image" />

                <div className="left__">
                  <p className="left__number">3</p>
                  <h3 className="left__h4">
                    Универсальное крепление под болгарку
                  </h3>

                  <p className="left__title">
                    Для Dino подойдут самые ходовые болгарки на 115 и 125 мм: 
                  </p>

                  <ul className="left__dots">
                    <li>Маломощные (до 900 Вт) </li>
                    <li>Мощные (до 1,8 кВт)</li>
                  </ul>

                  <p className="left__title">
                    Выбирайте то, что нужно именно вам! Сделать гриндер мощнее
                    можно в любой момент — достаточно просто заменить болгарку.
                    Работайте с деревом, эпоксидкой, пластиком или переходите на
                    более твёрдые материалы. А продуманное крепление позволит
                    собрать и разобрать Dino за считанные секунды.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
