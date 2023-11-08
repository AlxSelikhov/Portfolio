import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/footer/FooterComponent";
import "../global.css";

import "./style/mainpage/WelcomeSectionStyle.css";
import "./style/mainpage/WelcomeSection/WelcomeSectionStyle_1440px.css";
import "./style/mainpage/WelcomeSection/WelcomeSectionStyle_1024px.css";

import "./style/mainpage/SkillsSectionStyle.css";
import "./style/mainpage/SkillsSection/SkillsSectionStyle_1440px.css";
import "./style/mainpage/SkillsSection/SkillsSectionStyle_1024px.css";

import "./style/mainpage/ProjectsSectionStyle.css";
import "./style/mainpage/ProjectsSection/ProjectsSectionStyle_1440px.css";
import "./style/mainpage/ProjectsSection/ProjectsSectionStyle_1024px.css";

import SkillImage from "./assets/mainpage/SkillsSection/SkillsImage.svg";
import SkillImage1 from "./assets/mainpage/SkillsSection/SkillsImage1.svg";
import SkillImage2 from "./assets/mainpage/SkillsSection/SkillsImage2.svg";
import SkillImage3 from "./assets/mainpage/SkillsSection/SkillsImage3.png";
import SkillImage4 from "./assets/mainpage/SkillsSection/SkillsImage4.svg";

import ProjectImage from "./assets/mainpage/ProjectsSection/ProjectImage.png";
import ProjectImage1 from "./assets/mainpage/ProjectsSection/ProjectImage1.png";
import ProjectIcon from "./assets/mainpage/ProjectsSection/ProjectIcon.svg";

function MainPage() {
  return (
    <>
      <div className="home-page">
        <NavbarComponent />
        {/* первый блок welcome*/}
        <div className="welcome-hero-section">
          <div className="welcome-container">
            <div className="welcome-sub-container">
              <div className="welcome-container1">
                <div className="welcome-sub-container1">
                  <div className="welcome-text">Всем привет 🤗</div>
                </div>
                <div className="welcome-text-container">
                  <div className="welcome-heading">
                    Селихов Александр Приветствует Вас!
                  </div>
                  <div className="welcome-paragraph">
                    Я - преданный и опытный frontend разработчик, стремящийся
                    создавать визуально привлекательные и высокофункциональные
                    веб-приложения. Изучите мои проекты, чтобы увидеть, как
                    эффективно я применяю свои навыки в разработке
                    пользовательского интерфейса.
                  </div>
                </div>
              </div>
              <div className="welcome-buttons-container">
                <div className="welcome-button">
                  <div className="welcome-text">Скачать резюме</div>
                </div>
                <div className="welcome-text2">{`Просмотреть портфолио ->`}</div>
              </div>
            </div>
            <div className="welcome-sub-container2">
              <div className="welcome-text-container1">
                <b className="welcome-number">
                  <span>5</span>
                  <span className="welcome-span">+</span>
                </b>
                <div className="welcome-text3">
                  Завершенных проектов (commercial + pet)
                </div>
              </div>
              <div className="welcome-text-container2">
                <b className="welcome-number">
                  <span>01</span>
                  <span className="welcome-span">+</span>
                </b>
                <div className="welcome-text3">Лет опыта работы</div>
              </div>
            </div>
          </div>
        </div>
        {/* второй блок skills*/}
        <div className="skills-section">
          <div className="skills-container">
            <div className="skills-text-container">
              <div className="skills-heading-main">Мои Навыки</div>
              <div className="skills-paragraph">
                Как frontend разработчик, я обладаю широким спектром навыков и
                экспертных знаний, чтобы превратить ваши идеи в уникальные и
                интуитивно понятные веб-приложения.
              </div>
            </div>
            <div className="skills-container1">
              <div className="skills-sub-container">
                <div className="skills-card">
                  <div className="skills-icon-container">
                    <img className="skills-icon" alt="" src={SkillImage} />
                  </div>
                  <div className="skills-text-container1">
                    <div className="skills-heading">
                      Принципы frontend разработки
                    </div>
                    <div className="skills-paragraph">
                      Владение основными принципами frontend разработки, такими
                      как HTML-верстка, CSS-стилизация,
                      JavaScript-интерактивность
                      {/* и оптимизация пользовательского
                      интерфейса. */}
                    </div>
                  </div>
                </div>
                <div className="skills-card">
                  <div className="skills-icon-container">
                    <img className="skills-icon" alt="" src={SkillImage1} />
                  </div>
                  <div className="skills-text-container1">
                    <div className="skills-heading">Адаптивный дизайн</div>
                    <div className="skills-paragraph">
                      Мои знания позволяют создавать адаптивные интерфейсы,
                      которые легко функционируют на различных устройствах.
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills-sub-container">
                <div className="skills-card">
                  <div className="skills-icon-container">
                    <img className="skills-icon" alt="" src={SkillImage2} />
                  </div>
                  <div className="skills-text-container1">
                    <div className="skills-heading">Языки программирования</div>
                    <div className="skills-paragraph3">
                      <p className="skills-frontend">
                        Frontend : JS, Typescript, HTML, CSS
                      </p>
                      <p className="skills-frontend">
                        Backend: Python, MSSQL, PostrgeSQL
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skills-card">
                  <div className="skills-icon-container">
                    <img className="skills-icon" alt="" src={SkillImage3} />
                  </div>
                  <div className="skills-text-container1">
                    <div className="skills-heading">Библиотеки</div>
                    <div className="skills-paragraph">
                      <p className="skills-frontend">{`Frontend: React.js, Axios, React-Router, `}</p>
                      <p className="skills-frontend">
                        Backend: FastAPI, Dash, Pundas, Numpy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skills-card">
                  <div className="skills-icon-container">
                    <img className="skills-icon" alt="" src={SkillImage4} />
                  </div>
                  <div className="skills-text-container1">
                    <div className="skills-heading">UI-библиотеки</div>
                    <div className="skills-paragraph">
                      <p className="skills-frontend">Ant Design, MUI</p>
                      <p className="skills-frontend">Styled components</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* третий блок projects */}
        <div className="my-projects-section">
          <div className="projects-container">
            <div className="projects-text-container">
              <div className="projects-heading">Мои проекты</div>
              <div className="projects-paragraph">
                Вот некоторые pet-проектые, которые я сделал:
              </div>
            </div>
            <div className="projects-container1">
              <div className="projects-sub-container">
                <div className="projects-card">
                  <div className="projects-heading1">
                    Z - Aura Perfume Website Design
                  </div>
                  <div className="projects-container2">
                    <img
                      className="projects-image-icon"
                      alt=""
                      src={ProjectImage}
                    />
                    <div className="projects-sub-container1">
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage}
                      />
                    </div>
                    <div className="projects-button">
                      <img className="projects-icon" alt="" src={ProjectIcon} />
                    </div>
                  </div>
                </div>
                <div className="projects-card">
                  <div className="projects-heading1">
                    Forhelp Charity Website Design
                  </div>
                  <div className="projects-container2">
                    <img
                      className="projects-image-icon"
                      alt=""
                      src={ProjectImage1}
                    />
                    <div className="projects-sub-container1">
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                      <img
                        className="projects-image-icon1"
                        alt=""
                        src={ProjectImage1}
                      />
                    </div>
                    <div className="projects-button">
                      <img className="projects-icon" alt="" src={ProjectIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects-button2">
                <div className="projects-text">{`Посмотреть все проекты ->`}</div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile version */}
        {/* первый блок welcome*/}
        <div className="hero-section">
          <div className="container">
            <div className="sub-container">
              <div className="container1">
                <div className="sub-container1">
                  <div className="text">Всем привет 🤗</div>
                </div>
                <div className="text-container">
                  <div className="heading">
                    Селихов Александр Приветствует Вас!
                  </div>
                  <div className="paragraph">
                    Я - преданный и опытный frontend разработчик, стремящийся
                    создавать визуально привлекательные и высокофункциональные
                    веб-приложения. Изучите мои проекты, чтобы увидеть, как
                    эффективно я применяю свои навыки в разработке
                    пользовательского интерфейса.
                  </div>
                </div>
              </div>
              <div className="buttons-container">
                <div className="button">
                  <div className="text">Скачать резюме</div>
                </div>
                <div className="text2">{`Просмотреть портфолио ->`}</div>
              </div>
            </div>
            <div className="text-container-parent">
              <div className="text-container1">
                <b className="number">
                  <span>5</span>
                  <span className="span">+</span>
                </b>
                <div className="text3">
                  Завершенных проектов (commercial + pet)
                </div>
              </div>
              <div className="text-container-wrapper">
                <div className="text-container2">
                  <b className="number">
                    <span>01</span>
                    <span className="span">+</span>
                  </b>
                  <div className="text3">Лет опыта работы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* второй блок skills*/}
        <div className="mobile-skills-section">
          <div className="text-container">
            <div className="heading">Creative Skills</div>
            <div className="paragraph">
              As a web designer, I possess a diverse set of skills and expertise
              to bring your web design visions to life
            </div>
          </div>
          <div className="sub-container">
            <div className="card">
              <div className="icon-container">
                <img className="icon" alt="" src="Icon.svg" />
              </div>
              <div className="text-container1">
                <div className="heading">Web Design Principles</div>
                <div className="paragraph">
                  Proficiency in the fundamental principles of design, such as
                  layout, color theory, typography, and visual hierarchy.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="icon-container">
                <img className="icon" alt="" src="Icon.svg" />
              </div>
              <div className="text-container1">
                <div className="heading">User Interface - UI Design</div>
                <div className="paragraph">
                  Ability to create visually appealing and intuitive user
                  interfaces that enhance user experience and engagement.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="icon-container">
                <img className="icon" alt="" src="Icon.svg" />
              </div>
              <div className="text-container1">
                <div className="heading">Responsive Web Design</div>
                <div className="paragraph">
                  Knowledge of designing websites that adapt and function
                  seamlessly across various devices and screen sizes.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="icon-container">
                <img className="icon" alt="" src="Icon.svg" />
              </div>
              <div className="text-container1">
                <div className="heading">Wireframing and Prototyping</div>
                <div className="paragraph">
                  Ability to create wireframes and interactive prototypes to
                  visualize and test website layouts and functionality.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="icon-container">
                <img className="icon" alt="" src="Icon.svg" />
              </div>
              <div className="text-container1">
                <div className="heading">Mobile-Friendly Optimization</div>
                <div className="paragraph">
                  Proficiency in the fundamental principles of design, such as
                  layout, color theory, typography, and visual hierarchy.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* третий блок projects */}
        <div className="mobile-my-projects-section">
          <div className="text-container">
            <div className="heading">My Works</div>
            <div className="paragraph">
              Here's what some of my satisfied clients have to say about my work
            </div>
          </div>
          <div className="container">
            <div className="sub-container">
              <div className="card">
                <div className="heading">Forhelp Charity Website Design</div>
                <div className="container1">
                  <img className="image-icon" alt="" src="Image.png" />
                  <div className="sub-container1">
                    <img className="image-icon1" alt="" src="Image.png" />
                    <img className="image-icon1" alt="" src="Image.png" />
                    <img className="image-icon1" alt="" src="Image.png" />
                    <img className="image-icon1" alt="" src="Image.png" />
                  </div>
                  <div className="button">
                    <img className="icon" alt="" src="Icon.svg" />
                  </div>
                </div>
              </div>
              <div className="buttons-container">
                <div className="button1">
                  <img className="icon1" alt="" src="Icon.svg" />
                </div>
                <div className="indicators">
                  <div className="indicator" />
                  <div className="indicator1" />
                </div>
                <div className="button1">
                  <img className="icon1" alt="" src="Icon.svg" />
                </div>
              </div>
            </div>
            <div className="button3">
              <div className="text">View All Projects</div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default MainPage;
