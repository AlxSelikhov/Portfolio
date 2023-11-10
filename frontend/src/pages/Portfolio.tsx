import React from "react";

import FooterComponent from "../components/footer/FooterComponent";
import NavbarComponent from "../components/navbar/NavbarComponent";
import "./style/portfolio/PortfolioMain.css";
import "./style/portfolio/PortfolioExample.css";

import Checkmark from "./assets/portfolio/CheckmarkIcon.svg";
import DynamicsIcon from "./assets/portfolio/DynamicsIcon.svg";
import StarIcon from "./assets/portfolio/StarIcon.svg";

import ProjectIcon from './assets/portfolio/ProjectIcon.svg';
import ProjectImage from './assets/portfolio/ProjectImage.png';
import ProjectImage1 from './assets/portfolio/ProjectImage1.png';
import ArrowLeftIcon from './assets/portfolio/ArrowLeftIcon.svg';
import ArrowRightIcon from './assets/portfolio/ArrowRightIcon.svg';

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
              <div className="portfolio-heading">Мои творческие портфолио</div>
              <div className="portfolio-paragraph">
                Некоторые проекты, которые я создал:
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
        <div className="porfolio-example">
          <div className="porfolio-example-container">
            <div className="porfolio-example-sub-container">
              <div className="porfolio-example-container1">
                <div className="porfolio-example-heading">
                  Проекты, реализованные в 2023 году
                </div>
                {/* <div className="porfolio-example-buttons-container">
                  <div className="porfolio-example-button">
                    <img className="porfolio-example-icon" alt="" src={ArrowLeftIcon} />
                  </div>
                  <div className="porfolio-example-button">
                    <img className="porfolio-example-icon" alt="" src={ArrowRightIcon} />
                  </div>
                </div> */}
              </div>
              <div className="porfolio-example-container2">
                <div className="porfolio-example-card">
                  <div className="porfolio-example-heading1">
                    Z - Aura Perfume Website Design
                  </div>
                  <div className="porfolio-example-container3">
                    <img className="porfolio-example-image-icon" alt="" src={ProjectImage} />
                    <div className="porfolio-example-sub-container1">
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage} />
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage} />
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage}/>
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage} />
                    </div>
                    <div className="porfolio-example-button2">
                      <img className="porfolio-example-icon2" alt="" src={ProjectIcon} />
                    </div>
                  </div>
                </div>
                <div className="porfolio-example-card">
                  <div className="porfolio-example-heading1">Forhelp Charity Website Design</div>
                  <div className="porfolio-example-container3">
                    <img className="porfolio-example-image-icon" alt="" src={ProjectImage1} />
                    <div className="porfolio-example-sub-container1">
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage1} />
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage1} />
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage1} />
                      <img className="porfolio-example-image-icon1" alt="" src={ProjectImage1} />
                    </div>
                    <div className="porfolio-example-button2">
                      <img className="porfolio-example-icon2" alt="" src={ProjectIcon} />
                    </div>
                  </div>
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
