import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./FooterStyle_1980px.css";
import "./FooterStyle_1440px.css";
import "./FooterStyle_1024px.css";

import Telegram from "./assets/ImageTelegram.png";
import ImageMail from "./assets/ImageMail.svg";
import ImageLocal from "./assets/ImageLocal.svg";

const FooterComponent: React.FC = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <NavLink to="/" className="footer-logo no-link-color">
            Selikhov Alexander.
          </NavLink>
          <div className="footer-buttons-container">
            <div className="footer-button">
              <div className="footer-tg-icon">
                <Link to="https://web.telegram.org/k/#@alxbisanpy">
                  <img
                    className="footer-tg-image-2-icon"
                    alt=""
                    src={Telegram}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-buttons-container1">
            <NavLink to="/" className="footer-text-button no-link-color">
              Главная
            </NavLink>
            <NavLink to="/about" className="footer-text-button no-link-color">
              Обо мне
            </NavLink>
            <NavLink
              to="/portfolio"
              className="footer-text-button no-link-color"
            >
              Портфолио
            </NavLink>
          </div>
        </div>
        <div className="footer-container1">
          <div className="footer-button1">
            <img className="footer-icon" alt="" src={ImageMail} />
            <div className="footer-text-button">alxselikhov.job@gmail.com</div>
          </div>
          <div className="footer-container-child" />
          <div className="footer-button1">
            <img className="footer-icon" alt="" src={ImageLocal} />
            <div className="footer-text-button">Москва</div>
          </div>
        </div>
        <div className="footer-text2">
          Copyright © 2023 Selikhov Alexander. All rights reserved.
        </div>
      </div>

      <div className="footer-mobile">
        <div className="footer-mobile-container">
          <NavLink to="/" className="footer-mobile-logo no-link-color">
            Selikhov Alexander.
          </NavLink>
          <div className="footer-mobile-buttons-container">
            <div className="footer-mobile-button">
              <Link to="https://web.telegram.org/k/#@alxbisanpy">
                <img
                  className="footer-mobile-tg-image-2-icon"
                  alt=""
                  src={Telegram}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-mobile-buttons-container1">
          <NavLink to="/" className="footer-mobile-text-button no-link-color">
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className="footer-mobile-text-button no-link-color"
          >
            Обо мне
          </NavLink>
          <NavLink
            to="/portfolio"
            className="footer-mobile-text-button no-link-color"
          >
            Портфолио
          </NavLink>
        </div>
        <div className="footer-mobile-text">
          Copyright © 2023 Selikhov Alexander. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
