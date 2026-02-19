import classes from "../pages/Contacts.module.css";
import monument from "../images/pametnik.jpg";
import shumenskaKrepost from "../images/shumenska-krepost.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

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
          {/* <p>
            Имаш въпроси или търсиш обратна връзка? Бъди свободен да се свържеш
            с нас, като инзпозваш нашата контактна форма.
          </p> */}
        </div>
        <div className={classes.mainContainer}>
          {/* <div className={classes.containerImagesContacts}>
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
          </div> */}
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
            <div className={classes.containerContactLinks}>
              <div className={classes.callContacts}>Контакти</div>
              <div className={classes.sectionLinks}>
                <span>
                  <FontAwesomeIcon className={classes.icons} icon={faPhone} />
                  Обадисе
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
              <div className={classes.sectionLinks}>
                <span>
                  <FontAwesomeIcon
                    className={classes.icons}
                    icon={faCommentDots}
                  />
                  Сошълс
                </span>
                <span className={classes.iconsSocials}></span>
                <div className={classes.underlineSocials}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Шумен, В.Преслав, Плиска, Мадара
