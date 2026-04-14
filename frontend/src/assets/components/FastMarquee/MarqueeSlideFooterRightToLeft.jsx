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
          <a
            href="http://earlyrunners.bg/trailTracks/5kmШумен.gpx"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>5км. Шумен</div>
            {/* <div className={classes.imgWrapper}>
              <img src={run1} alt="" className={classes.imgFastMarquee} />
            </div> */}
          </a>
          <a
            href="http://earlyrunners.bg/trailTracks/10км. трейл-асфалт.gpx"
            download="file2.gpx"
          >
            <div className={classes.imgWrapper}>
              <div>Трейл-Асфалт</div>
              <img src={run2} alt="" className={classes.imgFastMarquee} />
            </div>
          </a>
          <div className={classes.imgWrapper}>
            <div>До паметника през вилна зона</div>
            <a
              href="http://earlyrunners.bg/trailTracks/града-вилна зона-паметник-града.gpx"
              download
            >
              <img src={run3} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <div>обиколко на шум.язовир</div>
            <a
              href="http://earlyrunners.bg/trailTracks/обиколка на шум.язовир.gpx"
              download
            >
              <img src={run4} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <div>по пътя до паметника и обратно</div>
            <a href="http://earlyrunners.bg/trailTracks/по пътя до паметника и обратно.gpx">
              <img src={run5} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <div>по черно на шум.плато</div>
            <a href="http://earlyrunners.bg/trailTracks/по черно на шум.плато.gpx">
              <img src={run6} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <div>стената на шум.язовир</div>
            <a href="http://earlyrunners.bg/trailTracks/стената рън.gpx">
              <img src={run7} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <div>голямата обиколко по асфалт на шум.плато</div>
            <a href="http://earlyrunners.bg/trailTracks/шумен-паметника-курсистите-стария град-пивоварната-шумен.gpx">
              <img src={run8} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <div>до теменуга и изгората и обратно</div>
            <a href="http://earlyrunners.bg/trailTracks/шумен-теменуга-из гората-шумен.gpx">
              <img src={run9} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          {/* <div className={classes.imgWrapper}>
            <a href="">
              <img src={run1} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run2} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run3} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run4} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run5} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run6} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run7} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run8} alt="" className={classes.imgFastMarquee} />
            </a>
          </div>
          <div className={classes.imgWrapper}>
            <a href="">
              <img src={run9} alt="" className={classes.imgFastMarquee} />
            </a>
          </div> */}
        </div>
      </Marquee>
    </>
  );
}
