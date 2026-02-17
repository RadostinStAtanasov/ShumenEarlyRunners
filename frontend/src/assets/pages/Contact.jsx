import classes from "../pages/Contacts.module.css";
import monument from "../images/pametnik.jpg";
import shumenskaKrepost from "../images/shumenska-krepost.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
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
          <p>
            Имаш въпроси или търсиш обратна връзка? Бъди свободен да се свържеш
            с нас, като инзпозваш нашата контактна форма.
          </p>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.containerImagesContacts}>
            <div className={classes.rotateRight}>
              <img
                className={classes.imagesContacts}
                src={monument}
                alt="Pulpit rock"
              />

              <p className={classes.paragraph}>
                „Създателите на българската държава“, известен също като „1300
                години България“, е архитектурен комплекс, посветен на
                1300-годишнината от създаването на българската държава.
                Монументът е разположен в най-високата част на Дунавската
                равнина.
              </p>
            </div>
            <div className={classes.rotateLeft}>
              <img
                className={classes.imagesContacts}
                src={shumenskaKrepost}
                alt="Monterosso al Mare"
              />

              <p className={classes.paragraph}>
                Крепостта се намира на два километра западно от град Шумен. В
                района се намира важен кръстопът на маршрути, свързващи
                дунавския бряг (при Силистра) с Адрианопол и Константинопол, и
                северното черноморско крайбрежие със западните български земи.
              </p>
            </div>
          </div>
          <div className={classes.mainContainerSendAndContact}>
            <div className={classes.containerSendaMessage}>
              <div>Изпрати съобщение</div>
              <TextField
                required
                id="outlined-required"
                label="Име"
                //defaultValue="Име"
              />
              <TextField
                required
                id="outlined-required"
                label="Фамилия"
                //defaultValue="Име"
              />
              <TextField
                id="outlined"
                label="Тема"
                //defaultValue="Име"
              />
              <TextField
                id="outlined-multiline-static"
                label="Съобщение"
                multiline
                rows={8}
                //defaultValue="Default Value"
              />
              <Button variant="contained" endIcon={<SendIcon />}>
                Изпрати
              </Button>
            </div>
            <div className={classes.containerContactLinks}>
              <div>Контакти</div>
              <div className={classes.sectionLinks}>
                <FontAwesomeIcon className={classes.icons} icon={faPhone} />
                <span>Обадисе</span>
                <span>+359878688970</span>
              </div>
              <div className={classes.sectionLinks}>
                <FontAwesomeIcon className={classes.icons} icon={faPhone} />
                <span>Обадисе</span>
                <span>+359878688970</span>
              </div>
              <div className={classes.sectionLinks}>
                <FontAwesomeIcon className={classes.icons} icon={faPhone} />
                <span>Обадисе</span>
                <span>+359878688970</span>
              </div>
            </div>
          </div>
          {/* <div className={classes.containerForm}>
            <div className={classes.containerFormContacts}>
              <div>
                <FontAwesomeIcon
                  className={classes.icons}
                  icon={faPersonThroughWindow}
                />
                На живо: Как да се свържеш с нас ела всяка събота 08:30
                <a href="https://www.google.com/maps/place/Parking/@43.2578646,26.9224865,123m/data=!3m1!1e3!4m6!3m5!1s0x40a58aef74d63f0d:0x5a1f94674ff36d5f!8m2!3d43.2579096!4d26.9230636!16s%2Fg%2F11cjhq28bh?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D">
                  <FontAwesomeIcon icon={faThumbtack} />
                </a>
              </div>
              <div>
                <FontAwesomeIcon className={classes.icons} icon={faPhone} />
                По телефона: 0878688970
              </div>
              <div>
                <FontAwesomeIcon className={classes.icons} icon={faEnvelope} />
                По емейла: irinova@yahoo.com
              </div>
            </div>
            <div className={classes.connectWithUsContainer}>
              <span>Пиши ни на нашата контактна форма</span>
              <input type="text" />
              <textarea name="" id=""></textarea>
              <button className={classes.btnSubmit}>Изпрати</button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

// Шумен, В.Преслав, Плиска, Мадара
