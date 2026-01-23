import iRun from "../../assets/images/logos/iRun.jpg";
import CCIB from "../../assets/images/logos/CyclingClubIlchovHills.jpg";
import MShumen from "../../assets/images/logos/muniplicyShumen.jpg";
import ParkSP from "../../assets/images/logos/parkShumenskoPlateau.jpg";
import classes from "../pages/Partners.module.css";

export default function PartnersPage() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Нашите Партньори</h1>
        <div className={classes.underline}></div>
      </div>

      <div className={classes.containerLogos}>
        <div className={classes.images}>
          <img className={classes.image} src={iRun} alt="" />
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            amet.
          </p>
        </div>
        <div className={classes.images}>
          <img className={classes.image} src={CCIB} alt="" />
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            amet.
          </p>
        </div>
        <div className={classes.images}>
          <img className={classes.image} src={MShumen} alt="" />
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            amet.
          </p>
        </div>
        <div className={classes.images}>
          <img className={classes.image} src={ParkSP} alt="" />
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            amet.
          </p>
        </div>
      </div>
    </div>
  );
}
