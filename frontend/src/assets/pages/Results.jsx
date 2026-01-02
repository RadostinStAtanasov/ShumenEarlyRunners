import classes from "../pages/Events.module.css";
import shumenskoPlato from "../images/shumenskoPlato2.jpg";

export default function ResultsPage() {
  return (
    <div>
      <div className={classes.image}>
        <a href="https://tracksport.live/r/sumensko-plato-2025">
          <img className={classes.images} src={shumenskoPlato} alt="" />
        </a>
      </div>
    </div>
  );
}
