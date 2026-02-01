import pametnik2 from "../images/logos/home-page2.jpg";
import classes from "../pages/Home.module.css";
import madaraRun from "../images/blogAndNewsImages/madaraRunNewLogo.jpg";
import magicBazar from "../images/blogAndNewsImages/pazarOfMagic.jpg";

import allStars from "../images/home-page.jpg";
import shumenskataKrepost from "../images/glavna-snimka-shumenska-krepost.jpg";
import pametnik from "../images/monument.jpg";
import massRunn from "../images/blogAndNewsImages/masovoRunning.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faHandHoldingHeart,
  faPersonRunning,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <>
      <div className={classes.mainContainer}>
        {/* <div className={classes.containerCard5Km}>

          <div className={classes.firstContainer}>
            <div className={classes.image}>
              <img className={classes.images} src={fiveKmImage2} alt="" />
            </div>

     
            <div>
              <a href="https://www.google.com/maps/place/Parking/@43.2578646,26.9224865,123m/data=!3m1!1e3!4m6!3m5!1s0x40a58aef74d63f0d:0x5a1f94674ff36d5f!8m2!3d43.2579096!4d26.9230636!16s%2Fg%2F11cjhq28bh?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D">
                <Button variant="contained" className={classes.buttonFiveKm}>
                  Виж къде бягаме всяка събота 5км от 08:30 на Шуменското плато
                  Кликкк..!!!
                </Button>
              </a>
            </div>
          </div>
        </div> */}
        <section className={classes.firstContainerTitle}>
          <section className={classes.firstContainerText}>
            <div className={classes.firstContainerTextContainer}>
              <h3>Твоето мечтано пътуване към бягането</h3>
              <h2 className={classes.secondTitle}>
                Открии себе си и нови дестинации за бягане в Шумен и околността
              </h2>
              <p>
                Открийте зашеметяващи дестинации и безпроблемни пътешествия,
                създадени специално за вас
              </p>
              <button className={classes.btnHomePage}>Открии дестинации</button>
              <div className={classes.firstCоntainerFooter}>
                <div className={classes.explorerDestinations}>
                  <span className={classes.text}>40+</span>
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
        <div className={classes.NewsEventsContainer}>
          <div className={classes.textCenter}>
            <h1>Предстоящи събития</h1>
            <div className={classes.imageUpcomingEvents}>
              <a href="http://localhost:5173/мадараТрейл">
                <img
                  className={classes.imagesUpcomingEvents}
                  src={madaraRun}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className={classes.textCenter}>
            <h1>Нюзз</h1>
            <div className={classes.imageUpcomingEvents}>
              <a href="https://www.facebook.com/story.php?story_fbid=122274184238132451&id=61553973546554&rdid=5MmU5DoUSmiOUuMd#">
                <img
                  className={classes.imagesUpcomingEvents}
                  src={magicBazar}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
