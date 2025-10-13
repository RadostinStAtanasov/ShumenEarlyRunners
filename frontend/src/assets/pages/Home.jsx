import RunEatSleep from "../components/RunEatSlep";
import classes from "./Home.module.css";

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
