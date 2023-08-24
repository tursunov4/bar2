
import React, { useState } from "react";
import rasm from "../../assets/Images/svg/pokupka__left.svg";
import center from "../../assets/Images/png/pokupke_img.png";

const Ordered = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      <div className="zakazat">
        <div className="zakazat__left">
          <div className="zakazat__left--wrapper">
            <div className="zakazat__left--card">
              <button onClick={() => setClick(!click)}>
                <p
                  style={click ? { display: "none" } : { display: "block" }}
                ></p>
              </button>

              <img src={rasm} alt="Image" />
              <h4>Набор для темного пива</h4>
              <p className="zakazat__left--card-sale">
                7 990 ₽ <strong>7 990 ₽</strong>
              </p>
            </div>

            <div className="zakazat__left--card">
              <button onClick={() => setClick(!click)}>
                <p
                  style={click ? { display: "none" } : { display: "block" }}
                ></p>
              </button>

              <img src={rasm} alt="Image" />
              <h4>Набор для темного пива</h4>
              <p className="zakazat__left--card-sale">
                7 990 ₽ <strong>7 990 ₽</strong>
              </p>
            </div>

            <div className="zakazat__left--card">
              <button onClick={() => setClick(!click)}>
                <p
                  style={click ? { display: "none" } : { display: "block" }}
                ></p>
              </button>

              <img src={rasm} alt="Image" />
              <h4>Набор для темного пива</h4>
              <p className="zakazat__left--card-sale">
                7 990 ₽ <strong>7 990 ₽</strong>
              </p>
            </div>

            <div className="zakazat__left--card">
              <button onClick={() => setClick(!click)}>
                <p
                  style={click ? { display: "none" } : { display: "block" }}
                ></p>
              </button>

              <img src={rasm} alt="Image" />
              <h4>Набор для темного пива</h4>
              <p className="zakazat__left--card-sale">
                7 990 ₽ <strong>7 990 ₽</strong>
              </p>
            </div>

            <div className="zakazat__left--card">
              <button onClick={() => setClick(!click)}>
                <p
                  style={click ? { display: "none" } : { display: "block" }}
                ></p>
              </button>

              <img src={rasm} alt="Image" />
              <h4>Набор для темного пива</h4>
              <p className="zakazat__left--card-sale">
                7 990 ₽ <strong>7 990 ₽</strong>
              </p>
            </div>

            <div className="zakazat__left--card">
              <button onClick={() => setClick(!click)}>
                <p
                  style={click ? { display: "none" } : { display: "block" }}
                ></p>
              </button>

              <img src={rasm} alt="Image" />
              <h4>Набор для темного пива</h4>
              <p className="zakazat__left--card-sale">
                7 990 ₽ <strong>7 990 ₽</strong>
              </p>
            </div>

            <div className="zakazat__left--card">
              <button onClick={() => setClick(!click)}>
                <p
                  style={click ? { display: "none" } : { display: "block" }}
                ></p>
              </button>

              <img src={rasm} alt="Image" />
              <h4>Набор для темного пива</h4>
              <p className="zakazat__left--card-sale">
                7 990 ₽ <strong>7 990 ₽</strong>
              </p>
            </div>
          </div>
        </div>
        <img src={center} alt="center_img" />

        <div className="zakazat__right">
          <h4>Заказ</h4>

          <select>
            <option value="wifi">30 литров с WiFi</option>
            <option value="wifi">30 литров с WiFi</option>
            <option value="wifi">30 литров с WiFi</option>
          </select>

          <div>
            <h3>Итого:</h3>
            <h2>11 000 ₽</h2>
          </div>

          <form action="">
            <input type="text" placeholder="Имя" />
            <input type="tel" placeholder="+7 (___)-___-__-__" />
<<<<<<< HEAD
=======
            
>>>>>>> b05176f8545f6a0851b23b4fb62436279a6a4f09
            <button>Заказать</button>
          </form>

          <p>
            Менеджеры свяжутся с вами в ближайшее время для уточнения деталей
            заказа
          </p>
        </div>
      </div>
    </>
  );
};

export default Ordered;
