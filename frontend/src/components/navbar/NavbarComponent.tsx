import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./NavBarStyle_1980px.css";
import "./NavBarStyle_1440px.css";
import "./NavBarStyle_1024px.css";
import Icon from "./assets/Icon.svg";

const NavbarComponent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (isModalVisible) {
      document.body.classList.add("navbar-modal-open");
    } else {
      document.body.classList.remove("navbar-modal-open");
    }
  }, [isModalVisible]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="navbar">
      <NavLink
        to="/"
        className="navbar-selikhov-alexander no-link-color" /* activeClassName="active-link" */
      >
        Selikhov Alexander.
      </NavLink>
      <img src={Icon} className="navbar-icon" onClick={showModal} />
      <div className="navbar-container">
        <div className="navbar-buttons-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-active-nav-link" : "navbar-text navbar-no-link-color"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-active-nav-link" : "navbar-text navbar-no-link-color"
            }
          >
            Обо мне
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "navbar-active-nav-link" : "navbar-text navbar-no-link-color"
            }
          >
            Портфолио
          </NavLink>
        </div>
        <div className="navbar-button1">
          <div className="navbar-text">Скачать резюме</div>
        </div>
      </div>
      {isModalVisible && (
        <div className="navbar-modal">
          <div className="navbar-modal-content">
            <div className="navbar-modal-header">
              <div className="navbar-modal-title">Меню</div>
              <div className="navbar-modal-close" onClick={hideModal}>
                X
              </div>
            </div>
            <div className="navbar-modal-body">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navbar-active-link navbar-no-link-color"
                    : "navbar-nav-link navbar-no-link-color"
                }
              >
                Главная
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "navbar-active-link navbar-no-link-color"
                    : "navbar-nav-link navbar-no-link-color"
                }
              >
                Обо мне
              </NavLink>
              <NavLink
                to="/portfolio"
                className="navbar-nav-link navbar-no-link-color" /*activeClassName="active-link" */
              >
                Портфолио
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
