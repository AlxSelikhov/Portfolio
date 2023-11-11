import React from "react";

import FooterComponent from "../components/footer/FooterComponent";
import NavbarComponent from "../components/navbar/NavbarComponent";
import "./style/portfolio/PortfolioMain.css";
import "./style/portfolio/PortfolioExample.css";

import Checkmark from "./assets/portfolio/CheckmarkIcon.svg";
import DynamicsIcon from "./assets/portfolio/DynamicsIcon.svg";
import StarIcon from "./assets/portfolio/StarIcon.svg";

import ProjectIcon from "./assets/portfolio/ProjectIcon.svg";
import ProjectImage from "./assets/portfolio/ProjectImage.png";
import ProjectImage1 from "./assets/portfolio/ProjectImage1.png";
import ArrowLeft from "./assets/portfolio/ArrowLeftIcon.svg";
import ArrowRight from "./assets/portfolio/ArrowRightIcon.svg";

function Portfolio() {
  return (
    <>
      <div className="home-page">
        <NavbarComponent />
        {/* portfolio */}
        <div className="portfolio">
          <div className="portfolio-container">
            <div className="portfolio-icon-container">
              <img className="portfolio-icon" alt="" src={StarIcon} />
            </div>
            <div className="portfolio-text-container">
              <div className="portfolio-heading">Мои творческие работы</div>
              <div className="portfolio-paragraph">
                Ненастоящие pet-проектые без ссылок:
              </div>
            </div>
            <div className="portfolio-sub-container">
              <div className="portfolio-container1">
                <img className="portfolio-icon" alt="" src={Checkmark} />
                <div className="portfolio-text">
                  5+ Завершенных проектов (commercial + pet)
                </div>
              </div>
              <div className="portfolio-container1">
                <img className="portfolio-icon" alt="" src={DynamicsIcon} />
                <div className="portfolio-text">01+ Лет опыта работы</div>
              </div>
            </div>
          </div>
        </div>
        {/* porfolio-example */}
        <div className="portfolio-example">
          <div className="portfolio-example-container">
            <div className="portfolio-example-sub-container">
              <div className="portfolio-example-container1">
                <div className="portfolio-example-heading">
                  Проекты, реализованные в 2023 году
                </div>
                {/* <div className="portfolio-example-buttons-container">
                  <div className="portfolio-example-button">
                    <img className="portfolio-example-icon" alt="" src="Icon.svg" />
                  </div>
                  <div className="portfolio-example-button">
                    <img className="portfolio-example-icon" alt="" src="Icon.svg" />
                  </div>
                </div> */}
              </div>
              <div className="portfolio-example-container2">
                <div className="portfolio-example-card">
                  <div className="portfolio-example-heading1">
                    Z - Aura Perfume Website Design
                  </div>
                  <div className="portfolio-example-container3">
                    <img
                      className="portfolio-example-image-icon"
                      alt=""
                      src={ProjectImage}
                    />
                    <div className="portfolio-example-sub-container1">
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                    </div>
                    <div className="portfolio-example-button2">
                      <img
                        className="portfolio-example-icon2"
                        alt=""
                        src={ProjectIcon}
                      />
                    </div>
                  </div>
                </div>
                <div className="portfolio-example-card">
                  <div className="portfolio-example-heading1">
                    Forhelp Charity Website Design
                  </div>
                  <div className="portfolio-example-container3">
                    <img
                      className="portfolio-example-image-icon"
                      alt=""
                      src={ProjectImage1}
                    />
                    <div className="portfolio-example-sub-container1">
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                      <img
                        className="portfolio-example-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                    </div>
                    <div className="portfolio-example-button2">
                      <img
                        className="portfolio-example-icon2"
                        alt=""
                        src={ProjectIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile portfolio */}
        <div className="mobile-portfolio-container">
          <div className="mobile-portfolio-icon-container">
            <img className="mobile-portfolio-icon" alt="" src={StarIcon} />
          </div>
          <div className="mobile-portfolio-text-container">
            <div className="mobile-portfolio-heading">
              Мои творческие работы
            </div>
            <div className="mobile-portfolio-paragraph">
              Ненастоящие pet-проектые без ссылок:
            </div>
          </div>
          <div className="mobile-portfolio-sub-container">
            <div className="mobile-portfolio-container1">
              <img className="mobile-portfolio-icon1" alt="" src={Checkmark} />
              <div className="mobile-portfolio-text">
                5+ Завершенных проектов (commercial + pet)
              </div>
            </div>
            <div className="mobile-portfolio-container1">
              <img
                className="mobile-portfolio-icon1"
                alt=""
                src={DynamicsIcon}
              />
              <div className="mobile-portfolio-text">01+ Лет опыта работы</div>
            </div>
          </div>
        </div>
        {/* mobile portfolio-example */}
        <div className="mobile-portfolio-example-sub-container">
          <div className="mobile-portfolio-example-container">
            <div className="mobile-portfolio-example-heading">
              Проекты, реализованные в 2023 году
            </div>
          </div>
          <div className="mobile-portfolio-example-container1">
            <div className="mobile-portfolio-example-sub-container1">
              <div className="mobile-portfolio-example-card">
                <div className="mobile-portfolio-example-heading1">
                  Forhelp Charity Website Design
                </div>
                <div className="mobile-portfolio-example-container2">
                  <img
                    className="mobile-portfolio-example-image-icon"
                    alt=""
                    src={ProjectImage1}
                  />
                  <div className="mobile-portfolio-example-sub-container2">
                    <img
                      className="mobile-portfolio-example-image-icon1"
                      alt=""
                      src={ProjectImage1}
                    />
                    <img
                      className="mobile-portfolio-example-image-icon1"
                      alt=""
                      src={ProjectImage1}
                    />
                    <img
                      className="mobile-portfolio-example-image-icon1"
                      alt=""
                      src={ProjectImage1}
                    />
                    <img
                      className="mobile-portfolio-example-image-icon1"
                      alt=""
                      src={ProjectImage1}
                    />
                  </div>
                  <div className="mobile-portfolio-example-button">
                    <img
                      className="mobile-portfolio-example-icon"
                      alt=""
                      src={ProjectIcon}
                    />
                  </div>
                </div>
              </div>
              <div className="mobile-portfolio-example-buttons-container">
                <div className="mobile-portfolio-example-button1">
                  <img
                    className="mobile-portfolio-example-icon1"
                    alt=""
                    src={ArrowLeft}
                  />
                </div>
                <div className="mobile-portfolio-example-indicators">
                  <div className="mobile-portfolio-example-indicator" />
                  <div className="mobile-portfolio-example-indicator1" />
                </div>
                <div className="mobile-portfolio-example-button1">
                  <img
                    className="mobile-portfolio-example-icon1"
                    alt=""
                    src={ArrowRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default Portfolio;
