import fiveKmImage from "../images/giveKmshNew.bmp";
import classes from "../pages/Home.module.css";
import Button from "@mui/material/Button";
import madaraRun from "../images/madaraRun.jpg";
import magicBazar from "../images/pazarOfMagic.jpg";

export default function HomePage() {
  return (
    <>
      <div>
        <div className={classes.firstContainer}>
          <div className={classes.image}>
            <img className={classes.images} src={fiveKmImage} alt="" />
            <Button variant="contained" className={classes.buttonFiveKm}>
              Виж къде бягаме всяка събота 5км от 08:30 на Шуменското плато
              Кликкк..!!!
            </Button>
          </div>
        </div>
        <div className={classes.NewsEventsContainer}>
          <div className={classes.textCenter}>
            <h1>Предстоящи събития</h1>
            <div className={classes.imageUpcomingEvents}>
              <a href="https://www.racecalendar.bg/run-race/madaratrail-2026">
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
