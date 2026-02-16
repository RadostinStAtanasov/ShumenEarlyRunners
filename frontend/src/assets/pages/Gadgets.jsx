import classes from "../pages/Gadgets.module.css";

export default function GadgetsPage() {
  return (
    <>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Джаджи</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.mainContainerGadgets}>
        <div className={classes.gadgets}>
          <div className={classes.backGroundImgRaceCalendar}>
            Kалкулатор за бягане Въведете два параметъра и намерете третия
          </div>
          <a href="https://racecalendar.bg/pace">
            <button>Цък</button>
          </a>
        </div>
        <div className={classes.gadgets}>
          <div className={classes.backGroundImgAllTrails}>
            Направи си/Начертай си трак за бягане
          </div>
          <a href="https://www.alltrails.com/">
            <button>Цък</button>
          </a>
        </div>
        <div className={classes.gadgets}>
          <div className={classes.backGroundImgStrava}>
            ИИИ най-важното бягай/спортувай и го сподели къде? в strava в провен
            случай не е направено ако не е споделено.
          </div>
          <a href="https://www.strava.com/">
            <button>Цък</button>
          </a>
        </div>
      </div>
    </>
  );
}
