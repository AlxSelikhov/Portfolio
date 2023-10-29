import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import "./NavBarStyle_1980px.css";
import "./NavBarStyle_1440px.css";
import "./NavBarStyle_1020px.css";
import Icon from "./assets/Icon.svg";

const NavbarComponent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (isModalVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
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
        className="selikhov-alexander no-link-color" /* activeClassName="active-link" */
      >
        Selikhov Alexander.
      </NavLink>
      <img src={Icon} className="icon" onClick={showModal} />
      <div className="container">
        <div className="buttons-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "text no-link-color"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "text no-link-color"
            }
          >
            Обо мне
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "text no-link-color"
            }
          >
            Портфолио
          </NavLink>
        </div>
        <div className="button1">
          <div className="text">Скачать резюме</div>
        </div>
      </div>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Меню</div>
              <div className="modal-close" onClick={hideModal}>
                X
              </div>
            </div>
            <div className="modal-body">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active-link no-link-color"
                    : "nav-link no-link-color"
                }
              >
                Главная
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "active-link no-link-color"
                    : "nav-link no-link-color"
                }
              >
                Обо мне
              </NavLink>
              <NavLink
                to="/portfolio"
                className="nav-link no-link-color" /*activeClassName="active-link" */
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
