import madaraRun from "../images/madaraRun.jpg";
import shumenskoPlato from "../images/shumenskoPlato2.jpg";
import stenataRun from "../images/stenataRun.jpg";
import classes from "../pages/Events.module.css";

export default function EventsPage() {
  return (
    <div>
      <div className={classes.habibi}>
        <div className={classes.image}>
          <a href="https://tracksport.live/e/sumensko-plato-2025">
            <img className={classes.images} src={shumenskoPlato} alt="" />
          </a>
        </div>
        <div className={classes.image}>
          <a href="https://www.racecalendar.bg/run-race/madaratrail-2026">
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
