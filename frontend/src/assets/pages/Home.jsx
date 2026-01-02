import fiveKmImage from "../images/giveKmshNew.bmp";
import classes from "../pages/Home.module.css";

export default function HomePage() {
  return (
    <>
      <div className={classes.firstVontainer}>
        <div className={classes.image}>
          <img className={classes.images} src={fiveKmImage} alt="" />
        </div>
      </div>
    </>
  );
}
