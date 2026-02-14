import Marquee from "react-fast-marquee";

import enev from "../../images/logos/enev.jpg";
import iRun from "../../images/logos/iRun.jpg";
import musala from "../../images/logos/musala.jpg";
import muniplicyOfShumen from "../../images/logos/muniplicyShumen.jpg";
import marchela from "../../images/logos/marchela.jpg";
import classes from "./MarqueeSlideFooterRightToLeft.module.css";

export default function TrackSlider() {
  return (
    <>
      <Marquee pauseOnHover>
        <div className={classes.marqueeContainer}>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={enev}
                alt=""
                style={{ width: "250px", height: "250px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <img
              src={musala}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className={classes.imgWrapper}>
            <img
              src={iRun}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className={classes.imgWrapper}>
            <img
              src={enev}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className={classes.imgWrapper}>
            <img
              src={muniplicyOfShumen}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className={classes.imgWrapper}>
            <img
              src={marchela}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        </div>
      </Marquee>
    </>
  );
}
