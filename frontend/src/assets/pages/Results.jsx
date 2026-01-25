import classes from "../pages/Results.module.css";
import shumenskoPlato from "../images/blogAndNewsImages/shumenskoPlato2.jpg";
import madaraImage from "../images/blogAndNewsImages/madaraRun.jpg";

export default function ResultsPage() {
  return (
    <>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Резултати</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.eventsContainer}>
        <div className={classes.image}>
          <a href="https://tracksport.live/r/sumensko-plato-2025">
            <img className={classes.images} src={shumenskoPlato} alt="" />
          </a>
        </div>
        <div className={classes.image}>
          <a href="https://tracksport.live/r/sumensko-plato-2025">
            <img className={classes.images} src={madaraImage} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
