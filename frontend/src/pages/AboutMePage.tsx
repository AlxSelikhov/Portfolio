import FooterComponent from "../components/footer/FooterComponent";
import NavbarComponent from "../components/navbar/NavbarComponent";
import "../global.css";
import "./style/aboutMe/AboutMe.css";
import "./style/aboutMe/Timeline.css";

import PurpleIcon from "./assets/aboutMe/timeline/PurpleIcon.svg";
import OrangeIcon from "./assets/aboutMe/timeline/OrangeIcon.svg";
import PinkIcon from "./assets/aboutMe/timeline/PinkIcon.svg";
import BlueIcon from "./assets/aboutMe/timeline/BlueIcon.svg";
import TipLeft from "./assets/aboutMe/timeline/TipLeft.svg";
import TipRight from "./assets/aboutMe/timeline/TipRight.svg";
import TipUp from "./assets/aboutMe/timeline/TipUp.svg";

function AboutMePage() {
  return (
    <>
      {/* about me */}
      <div className="home-page">
        <NavbarComponent />
        <div className="about-section">
          <div className="about-container">
            <div className="about-container1">
              <div className="about-sub-container">
                <div className="about-container2">
                  <div className="about-text">
                    Добро пожаловать в мир захватывающей веб-разработки!
                  </div>
                </div>
                <div className="about-text-container">
                  <div className="about-heading">Я Селихов Александр</div>
                  <div className="about-paragraph">
                    <p className="about-p">{`Опытный веб-разработчик, преданный созданию функциональных и инновационных веб-сайтов. С моим глубоким пониманием технологий и страстью к программированию, я специализируюсь на создании динамических и отзывчивых веб-приложений. Я стремлюсь к совершенству в каждой детали и уделяю особое внимание оптимизации производительности и безопасности. `}</p>
                    <p className="about-p">
                      Я уверенно работаю с различными языками программирования и
                      фреймворками, чтобы обеспечить гибкость и масштабируемость
                      проектов. Готов помочь вам воплотить ваше видение в жизнь,
                      создавая уникальные и привлекательные веб-сайты. Мой опыт
                      и профессионализм позволят вам расширить ваше присутствие
                      в Интернете и достичь ваших целей в онлайн-мире.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-sub-container1">
                <div className="about-text-container1">
                  <b className="about-number">
                    <span>5</span>
                    <span className="span">+</span>
                  </b>
                  <div className="about-text1">
                    Завершенных проектов (commercial + pet)
                  </div>
                </div>
                <div className="about-text-container1">
                  <b className="about-number">
                    <span>01</span>
                    <span className="about-span">+</span>
                  </b>
                  <div className="about-text1">Лет опыта работы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* timeline */}
        <div className="timeline">
          <div className="timeline-text-container">
            <div className="timeline-heading">Основные вехи моей карьеры</div>
          </div>
          <div className="timeline-container">
            <div className="timeline-sub-container">
              <div className="timeline-progress-line-container">
                <div className="timeline-progress-line-background" />
                <div className="timeline-progress-line" />
              </div>
              <div className="timeline-container1">
                <div className="timeline-text-container1">
                  <div className="timeline-text">Сейчас</div>
                </div>
                <div className="timeline-sub-container1">
                  <div className="timeline-container2">
                    <div className="timeline-sub-container2">
                      <div className="timeline-paragraph">
                        Продолжая свой путь роста и исследований, я расширяю
                        свой набор навыков, вникая в новые технологии и
                        тенденции
                      </div>
                      <div className="timeline-icon-container">
                        <div className="timeline-icon">
                          <img
                            className="timeline-group-child"
                            alt=""
                            src={PurpleIcon}
                          />
                        </div>
                      </div>
                    </div>
                    <img className="timeline-tip-icon" alt="" src={TipLeft} />
                  </div>
                  <div className="timeline-navigator">
                    <div className="timeline-navigator-child" />
                  </div>
                  <div className="timeline-text-container2">
                    <div className="timeline-date-wrapper">
                      <div className="timeline-date">Путь в web-разработку</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-container3">
                <div className="timeline-sub-container3">
                  <div className="timeline-text-container3">
                    <div className="timeline-date-container">
                      <div className="timeline-date">
                        Кадровое агентство Юнити
                      </div>
                    </div>
                  </div>
                  <div className="timeline-navigator">
                    <div className="timeline-navigator-item" />
                  </div>
                  <div className="timeline-container4">
                    <img className="timeline-tip-icon" alt="" src={TipRight} />
                    <div className="timeline-sub-container4">
                      <div className="timeline-icon-container1">
                        <div className="timeline-icon">
                          <img
                            className="timeline-group-child"
                            alt=""
                            src={OrangeIcon}
                          />
                        </div>
                      </div>
                      <div className="timeline-paragraph1">
                        <p className="timeline-fullstack">
                          <b>Fullstack разработчик</b>
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Создал внутренний сайт мониторинга деятельности
                          сотрудников для 3 отделов, что поспособствовало
                          выявлению утерянных, необработанных заявок в
                          CRM.Ускорилась обработка вакансий с 10+ до 2-6 дней;
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Создал страницу мониторинга дебетовой задолженности,
                          благодаря которой сократились сроки задолженностей на
                          десятки дней;
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Создается проект ведения финансовых моделей, которая
                          автоматизирует и ускорит проверку и согласование
                          финансовых моделей;
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Разработал frontend и backend внутреннего
                          web-приложения на библиотеке dash (python);
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Автоматизировал функционал отдела казначейства с
                          помощью Power Query;
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Проверка и создание десяток моделей в месяц
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Обучил директоров всех отделов работе в web-приложении
                          для контроля сотрудников и планирования работы отдела;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-container5">
                <div className="timeline-text-container1">
                  <div className="timeline-text">2022</div>
                </div>
                <div className="timeline-sub-container1">
                  <div className="timeline-container2">
                    <div className="timeline-sub-container4">
                      <div className="timeline-paragraph">
                        <p className="timeline-fullstack">
                          <b>
                            Аналитик отдела реализации проекта интеграции с ЦПЭ
                            (ГПХ)
                          </b>
                        </p>
                        <p className="timeline-fullstack">
                          <b>&nbsp;</b>
                        </p>
                        <p className="timeline-fullstack">
                          Разработал стандартную форму, позволяющие ускорить и
                          упростить подписание соглашений о деятельности центров
                          поддержки экспорта;
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Обеспечено повышение качества подготовки плановой и
                          отчетной документации центров поддержки экспорта;
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Обучение двух стажеров— Созданные презентации дня
                          защиты центров поддержки экспорта;
                        </p>
                        <p className="timeline-fullstack">&nbsp;</p>
                        <p className="timeline-fullstack">
                          Курирование деятельности 26 регионов поддержки
                          экспорта;
                        </p>
                      </div>
                      <div className="timeline-icon-container2">
                        <img
                          className="timeline-group-child"
                          alt=""
                          src={PinkIcon}
                        />
                      </div>
                    </div>
                    <img className="timeline-tip-icon" alt="" src={TipLeft} />
                  </div>
                  <div className="timeline-navigator">
                    <div className="timeline-navigator-inner" />
                  </div>
                  <div className="timeline-text-container2">
                    <div className="timeline-date-wrapper">
                      <div className="timeline-date">
                        Российский экспортный центр
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-text-container1">
                  <div className="timeline-text">2021</div>
                </div>
              </div>
            </div>
            <div className="timeline-sub-container7">
              <img className="timeline-tip-icon3" alt="" src={TipUp} />
              <div className="timeline-sub-container8">
                <div className="timeline-icon-container3">
                  <div className="timeline-icon">
                    <img
                      className="timeline-group-child"
                      alt=""
                      src={BlueIcon}
                    />
                  </div>
                </div>
                <div className="timeline-text-container7">
                  <div className="timeline-heading">
                    Высшее образование (Бакалавр)
                  </div>
                  <div className="timeline-paragraph3">
                    <p className="timeline-fullstack">
                      Всероссийская академия внешней торговли, Москва
                    </p>
                    <p className="timeline-fullstack">
                      Факультет международных финансов, Финансы и кредит
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="mobile-about-section">
          <div className="mobile-about-container">
            <div className="mobile-about-sub-container">
              <div className="mobile-about-container1">
                <div className="mobile-about-text">
                  Добро пожаловать в мир захватывающей веб-разработки!
                </div>
              </div>
              <div className="mobile-about-text-container">
                <div className="mobile-about-heading">Я Селихов Александр</div>
                <div className="mobile-about-paragraph">
                  <p className="mobile-about-p">{`Опытный веб-разработчик, преданный созданию функциональных и инновационных веб-сайтов. С моим глубоким пониманием технологий и страстью к программированию, я специализируюсь на создании динамических и отзывчивых веб-приложений. Я стремлюсь к совершенству в каждой детали и уделяю особое внимание оптимизации производительности и безопасности. `}</p>
                  <p className="mobile-about-p">
                    Я уверенно работаю с различными языками программирования и
                    фреймворками, чтобы обеспечить гибкость и масштабируемость
                    проектов. Готов помочь вам воплотить ваше видение в жизнь,
                    создавая уникальные и привлекательные веб-сайты. Мой опыт и
                    профессионализм позволят вам расширить ваше присутствие в
                    Интернете и достичь ваших целей в онлайн-мире.
                  </p>
                </div>
              </div>
            </div>
            <div className="mobile-about-sub-container1">
              <div className="mobile-about-text-container1">
                <b className="mobile-about-number">
                  <span>5</span>
                  <span className="mobile-about-span">+</span>
                </b>
                <div className="mobile-about-text1">
                  Завершенных проектов (commercial + pet)
                </div>
              </div>
              <div className="mobile-about-sub-container-child" />
              <div className="mobile-about-text-container1">
                <b className="mobile-about-number">
                  <span>01</span>
                  <span className="mobile-about-span">+</span>
                </b>
                <div className="mobile-about-text1">Лет опыта работы</div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default AboutMePage;
