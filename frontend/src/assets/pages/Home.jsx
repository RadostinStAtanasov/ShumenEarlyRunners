import RunEatSleep from "../components/RunEatSlep";
import classes from "./Home.module.css";
import Gallery from "../components/Gallery";

export default function HomePage() {
  return (
    <>
      <div>
        <div className={classes.runEatSleep}>
          <RunEatSleep />
        </div>
      </div>
    </>
  );
}
