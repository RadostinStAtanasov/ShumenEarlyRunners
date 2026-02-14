import Marquee from "react-fast-marquee";

import classes from "./MarqueeSlideFooterRightToLeft.module.css";
import run1 from "../../images/tracks/run1.jpg";
import run2 from "../../images/tracks/run2.jpg";
import run3 from "../../images/tracks/run3.jpg";
import run4 from "../../images/tracks/run4.jpg";
import run5 from "../../images/tracks/run5.jpg";
import run6 from "../../images/tracks/run6.jpg";
import run7 from "../../images/tracks/run7.jpg";
import run8 from "../../images/tracks/run8.jpg";
import run9 from "../../images/tracks/run9.jpg";

export default function TrackSlider() {
  return (
    <>
      <Marquee pauseOnHover>
        <div className={classes.marqueeContainer}>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run1}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run2}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run3}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run4}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run5}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run6}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run7}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run8}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img
                src={run9}
                alt=""
                style={{ width: "150px", height: "300px" }}
              />
            </a>
          </div>
        </div>
      </Marquee>
    </>
  );
}
