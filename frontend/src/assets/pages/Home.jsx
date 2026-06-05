import pametnik2 from "../images/home-page2black.jpg";
import classes from "../pages/Home.module.css";

import Button from "@mui/material/Button";
import allStars from "../images/home-page.jpg";
import shumenskataKrepost from "../images/shumenska-krepost.jpg";
import pametnik from "../images/monument.jpg";
import massRunn from "../images/massRunStenata.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MarqueeSlider from "../components/FastMarquee/MarqueeSlideFooterRightToLeft.jsx";

import {
  faBrain,
  faHandHoldingHeart,
  faPersonRunning,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import CardSlider from "../components/CardSlider/CardSlider.jsx";
import HomePageTopSlider from "../components/FastMarquee/MarqueeHomePageTop.jsx";

export default function HomePage() {
  return (
    <>
      <div className={classes.mainContainer}>
        <section className={classes.firstContainerTitle}>
          <section className={classes.firstContainerText}>
            <div className={classes.firstContainerTextContainer}>
              <h3>Твоето мечтано пътуване към бягането</h3>
              <h2 className={classes.secondTitle}>
                Открийте себе си и нови дестинации за бягане в Шумен и
                околността
              </h2>
              <a href="https://racecalendar.bg">
                <button className={classes.btnHomePage}>
                  Открии дестинации
                </button>
              </a>
              <div className={classes.firstCоntainerFooter}>
                <div className={classes.explorerDestinations}>
                  <span>40+</span>
                  <span>Екзотични бягания</span>
                </div>
                <div className={classes.explorerDestinations}>
                  <span>70+</span>
                  <span>Трейл мероприятия</span>
                </div>
                <div className={classes.explorerDestinations}>
                  <span>250+</span>
                  <span>Асфалтови бягания</span>
                </div>
              </div>
            </div>
          </section>
          <div className={classes.imageFirstContainer}>
            <img className={classes.imageHomePage} src={pametnik2} alt="" />
          </div>
        </section>
        <section className={classes.latestStories}>
          <div className={classes.latestStoriesHeader}>
            <h1>Новини и събития</h1>
            <a href="./Блог енд Нюз" className={classes.btnLatestStory}>
              <Button variant="contained">Всички постове</Button>
            </a>
          </div>

          <div className={classes.containerLatestStoryHomePage}>
            <CardSlider />
          </div>
        </section>
        <section className={classes.secondContainerWhyToRun}>
          <div className={classes.secondConBackGrdn}>
            <div className={classes.fourPictures}>
              <img
                className={classes.imageSecondContainer1}
                src={pametnik}
                alt=""
              />
              <img
                className={classes.imageSecondContainer2}
                src={allStars}
                alt=""
              />
              <img
                className={classes.imageSecondContainer2}
                src={massRunn}
                alt=""
              />
              <img
                className={classes.imageSecondContainer1}
                src={shumenskataKrepost}
                alt=""
              />
            </div>
            <div className={classes.secondConOurKeyBen}>
              <div className={classes.textSecondContainer}>
                <h4>Бенефити от бягането</h4>
                <h2>Защо да бягаш изобщо</h2>
                <div className={classes.secondContTextWhyRun}>
                  <div className={classes.secondConIconAndText}>
                    <FontAwesomeIcon
                      className={classes.iconSecondCon1}
                      icon={faHandHoldingHeart}
                    />
                    <div className={classes.iconTextParagraph}>
                      <h6>По-добро сърдечно-съдово здраве</h6>
                      <p>Укрепването на сърцето и кръвоносните съдове.</p>
                    </div>
                  </div>
                  <div className={classes.secondConIconAndText}>
                    <FontAwesomeIcon
                      className={classes.iconSecondCon2}
                      icon={faBrain}
                    />
                    <div className={classes.iconTextParagraph}>
                      <h6>По-добро психично здраве</h6>
                      <p>
                        Доказано е, че физическата активност сред природата
                        подобрява настроението, намалява стреса и повишава
                        чувството за благополучие.
                      </p>
                    </div>
                  </div>
                  <div className={classes.secondConIconAndText}>
                    <FontAwesomeIcon
                      className={classes.iconSecondCon3}
                      icon={faPersonRunning}
                    />
                    <div className={classes.iconTextParagraph}>
                      <h6>
                        Подобряване на физическото състояние и издръжливостта
                      </h6>
                      <p>
                        Редовното бягане помага заувеличаване на капацитета на
                        белите дробове и подобряване на издръжливостта, което
                        улеснява извършването на ежедневните дейности.
                      </p>
                    </div>
                  </div>
                  <div className={classes.secondConIconAndText}>
                    <FontAwesomeIcon
                      className={classes.iconSecondCon4}
                      icon={faWeightScale}
                    />
                    <div className={classes.iconTextParagraph}>
                      <h6>Контрол над теглото</h6>
                      <p>
                        Бягането е енергична дейност, което означава, че
                        изгаряте калории ефективно.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className={classes.runningTracksContainer}>
          <div className={classes.headRunTrackContainer}>
            <h2>Най-бяганите тракове на Шуменското Плато</h2>
            <h3>Изтегли от тука</h3>
          </div>
          <MarqueeSlider />
        </section> */}
      </div>
    </>
  );
}
