import classes from "../pages/Contacts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import rc from "../images/images.png";
import irun from "../images/iRun.jpg";
import allTrails from "../images/Alltrails.png";
import fiveKmSat from "../images/5kmSatelit.png";
import calc from "../images/calcpace.png";

<script
  src="https://your-site-or-cdn.com/fontawesome/v5.15.4/js/all.js"
  data-auto-a11y="true"
></script>;

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage() {
  return (
    <>
      <div className={classes.mainContainerContacts}>
        <div className={classes.headerAndUnderline}>
          <h2 className={classes.title}>Контакти</h2>
          <div className={classes.underline}></div>
          <h1>Свържи се с нас</h1>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.mainContainerSendAndContact}>
            <div className={classes.containerSendaMessage}>
              <div className={classes.sendMess}>Изпрати съобщение</div>
              <TextField
                required
                className={classes.outlinedRequired}
                label="Име"
                //defaultValue="Име"
              />
              <TextField
                required
                className={classes.outlinedRequired}
                label="Фамилия"
                //defaultValue="Име"
              />
              <TextField
                className={classes.outlinedRequired}
                label="Тема"
                //defaultValue="Име"
              />
              <TextField
                className={classes.outlinedMultilineStatic}
                label="Съобщение"
                multiline
                rows={8}
                //defaultValue="Default Value"
              />
              <Button variant="contained" endIcon={<SendIcon />}>
                Изпрати
              </Button>
            </div>
            <div>
              <div className={classes.containerContactLinks}>
                <div className={classes.callContacts}>Контакти</div>
                <div className={classes.sectionLinks}>
                  <span>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faPhoneVolume}
                      shake
                    />
                    <span>Обадисе</span>
                  </span>
                  <span>+359878688970</span>
                  <div className={classes.underlineSocials}></div>
                </div>
                <div className={classes.sectionLinks}>
                  <span>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faEnvelope}
                    />
                    Емеил
                  </span>
                  <span>irinova@yahoo.com</span>
                  <div className={classes.underlineSocials}></div>
                </div>
                <div className={classes.sectionLinksSocials}>
                  <div className={classes.sectionLinkSocial}>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faCommentDots}
                    />
                    Сошълс
                    <div className={classes.icn}>
                      <a href="https://www.facebook.com/groups/118564220164455">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="rgb(0, 92, 255)"
                            d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
                          />
                        </svg>
                      </a>
                      <a href=""></a>
                      <a href="https://www.instagram.com/shumenearlyrunners/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="rgb(134, 3, 224)"
                            d="M194.4 211.7a53.3 53.3 0 1 0 59.2 88.6 53.3 53.3 0 1 0 -59.2-88.6zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12-18.1-7.1-57.6-6.8-83.1-6.5-4.1 0-7.9 .1-11.2 .1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2 0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2 2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5 4.1 0 7.9-.1 11.2-.1s7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5 6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83 0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83-2.7-6.9-6.8-13.1-12-18.4l0 .2zm-67.1 44.5c18.1 12.1 30.6 30.9 34.9 52.2s-.2 43.5-12.3 61.6c-6 9-13.7 16.6-22.6 22.6s-19 10.1-29.6 12.2c-21.3 4.2-43.5-.2-61.6-12.3s-30.6-30.9-34.9-52.2 .2-43.5 12.2-61.6 30.9-30.6 52.2-34.9 43.5 .2 61.6 12.2l.1 0zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1 2.6-7.1 5.2-9.8 6.1-4.5 9.8-5.2 7.6-.4 11.1 1.1 6.5 3.9 8.6 7 3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2-3.9 3.2-6.2 4.2-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2l-.1 0zM448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM357 389c-18.7 18.7-41.4 24.6-67 25.9-26.4 1.5-105.6 1.5-132 0-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132 1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0 25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9-1.3 25.6-7.1 48.3-25.8 67l0 .1z"
                          />
                        </svg>
                      </a>
                      <a href="https://www.strava.com/clubs/1149489">
                        <svg
                          fill="rgb(177, 151, 252)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="rgb(222, 125, 0)"
                            d="M158.4 0L7 292 96.2 292 158.4 175.9 220.1 292 308.6 292 158.4 0zM308.6 292l-43.9 88.2-44.6-88.2-67.6 0 112.2 220 111.5-220-67.6 0z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className={classes.underlineSocials}></div>
                </div>
              </div>
              <div className={classes.usefulLinks}>
                <div className={classes.usefulinksHeader}>Полезни връзки</div>
                <div className={classes.underlineHeader}></div>
                <div className={classes.icn}>
                  <a href="https://www.strava.com/">
                    <div className={classes.uLinks}>
                      <svg
                        fill="rgb(177, 151, 252)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="rgb(222, 125, 0)"
                          d="M158.4 0L7 292 96.2 292 158.4 175.9 220.1 292 308.6 292 158.4 0zM308.6 292l-43.9 88.2-44.6-88.2-67.6 0 112.2 220 111.5-220-67.6 0z"
                        />
                      </svg>{" "}
                      <div>Strava</div>
                    </div>
                  </a>
                  <a href="https://www.alltrails.com/">
                    <div className={classes.uLinks}>
                      <img className={classes.imgCon} src={allTrails} alt="" />
                      <div>Alltrails</div>
                    </div>
                  </a>
                  <a href="https://racecalendar.bg/?fromDate=2026-02-15">
                    <div className={classes.uLinks}>
                      <img className={classes.imgCon} src={rc} alt="" />
                      <div>Race Calendar</div>
                    </div>
                  </a>
                  <a href="https://racecalendar.bg/pace">
                    <div className={classes.uLinks}>
                      <img className={classes.imgCon} src={calc} alt="" />
                      <div>Pace Calculator</div>
                    </div>
                  </a>
                  <a href="https://www.irun.bg/">
                    <div className={classes.uLinks}>
                      <img className={classes.imgCon} src={irun} alt="" />
                      <div>iRun</div>
                    </div>
                  </a>
                  <a href="https://5kmrun.bg/">
                    <div className={classes.uLinks}>
                      <img className={classes.imgCon} src={fiveKmSat} alt="" />
                      <div>5kmRun</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Шумен, В.Преслав, Плиска, Мадара
