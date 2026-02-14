import madaraRun from "../images/blogAndNewsImages/madaraRunNewLogo.jpg";
import shumenskoPlato from "../images/blogAndNewsImages/shumenskoPlato2.jpg";
import stenataRun from "../images/blogAndNewsImages/stenataRun.jpg";
import classes from "../pages/Events.module.css";
import "../pages/Events.module.css";

export default function EventsPage() {
  return (
    <div className={classes.mainContainerEvents}>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Събития</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.habibi}>
        <div className={classes.image}>
          <a href="https://tracksport.live/e/sumensko-plato-2025">
            <img className={classes.images} src={shumenskoPlato} alt="" />
          </a>
        </div>
        <div className={classes.image}>
          <a href="http://localhost:5173/мадараТрейл">
            <img className={classes.images} src={madaraRun} alt="" />
          </a>
        </div>
        <div className={classes.image}>
          <a href="https://visitshumen.bg/стената-run-шуменско-езеро-2025">
            <img className={classes.images} src={stenataRun} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
