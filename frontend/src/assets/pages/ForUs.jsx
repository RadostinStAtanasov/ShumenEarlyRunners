import homeImage from "../images/home-page.bmp";
import classes from "./Home.module.css";

export default function ForUsPage() {
  return (
    <div>
      За насс страницат?!otbor smeshnici
      <div className={classes.runEatSleep}>
        <img
          src={homeImage}
          alt="home page image"
          width={1000}
          height={800}
          style={{ alignItems: "center" }}
        />
      </div>
    </div>
  );
}
