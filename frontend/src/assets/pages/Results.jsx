import classes from "../pages/Results.module.css";
import madaraRun from "../images/blogAndNewsImages/madaraRunNewLogo.jpg";
import shumenskoPlato from "../images/blogAndNewsImages/shumenskoPlato2.jpg";
import stenataRun from "../images/blogAndNewsImages/stenataRun.jpg";

export default function ResultsPage() {
  return (
    <>
      <div className={classes.mainContainerResult}>
        <div className={classes.headerAndUnderline}>
          <h1 className={classes.title}>Резултати</h1>
          <div className={classes.underline}></div>
        </div>
        <div className={classes.eventsContainer}>
          <div className={classes.image}>
            <a href="https://tracksport.live/r/madara-trail-2026">
              <img className={classes.images} src={madaraRun} alt="" />
            </a>
          </div>
          <div className={classes.image}>
            <a href="https://tracksport.live/r/sumensko-plato-2025">
              <img className={classes.images} src={stenataRun} alt="" />
            </a>
          </div>
          <div className={classes.image}>
            <a href="https://tracksport.live/r/sumensko-plato-2025">
              <img className={classes.images} src={shumenskoPlato} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
