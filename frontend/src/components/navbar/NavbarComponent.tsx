import React, { useState } from "react";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import "./NavBarStyle_1980px.css";
import "./NavBarStyle_1440px.css";
import "./NavBarStyle_1020px.css";
import Icon from "./assets/Icon.svg";

const NavbarComponent: React.FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className="navbar">
      <div className="selikhov-alexander">Selikhov Alexander.</div>
      <img src={Icon} className="icon" onClick={showDrawer} />
      <div className="container">
        <div className="buttons-container">
          <div className="button">
            <div className="text">Главная</div>
          </div>
          <div className="text">Обо мне</div>
          <div className="text">Портфолио</div>
        </div>
        <div className="button1">
          <div className="text">Скачать резюме</div>
        </div>
      </div>
      <Drawer
        title={<div style={{ textAlign: "center", justifyContent: "center",display: "flex" }}>Меню</div>}
        placement="right"
        closable={true}
        onClose={closeDrawer}
        visible={isDrawerVisible}
        width="100%"
        style={{ padding: 0 }}
        headerStyle={{ backgroundColor: "var(--peach-85)" }}
        bodyStyle={{ backgroundColor: "var(--peach-92)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "25px" }}
        closeIcon={
          <div
            style={{
              position: "relative",
              top: "50%",
              right: "12px",
              cursor: "pointer",
            }}
          >
            <CloseOutlined />
          </div>
        }
      >
        <NavLink to="/" className="nav-link" activeClassName="active-link" exact>
          Главная
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active-link">
          Обо мне
        </NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="active-link">
          Портфолио
        </NavLink>
      </Drawer>
    </div>
  );
};

export default NavbarComponent;
