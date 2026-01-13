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
            <a href="https://www.google.com/maps/dir//9700+%D0%A8%D1%83%D0%BC%D0%B5%D0%BD/@43.2576384,26.9221636,284m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x40a58af18efaf5d5:0xa60b88a05b941a9b!2m2!1d26.9229305!2d43.2618806?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D">
              <Button variant="contained" className={classes.buttonFiveKm}>
                Виж къде бягаме всяка събота 5км от 08:30 на Шуменското плато
                Кликкк..!!!
              </Button>
            </a>
          </div>
        </div>
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
