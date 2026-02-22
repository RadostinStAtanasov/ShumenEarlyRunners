import Marquee from "react-fast-marquee";
import classes from "./MarqueeHomePageTop.module.css";

export default function HomePageTopSlider() {
  return (
    <>
      <Marquee className={classes.backGround}>
        <div className={classes.marqueeContainer}>
          <div className={classes.textWraper}>
            <a href="">
              <div className={classes.textSlider}>
                Регистрирай се за Мадара Трейл 05.04.2026г.
              </div>
            </a>
          </div>
          <div className={classes.textWraper}>
            <a href="">
              <div className={classes.textSlider}>
                Регистрирай се за Мадара Трейл 05.04.2026г.
              </div>
            </a>
          </div>
          <div className={classes.textWraper}>
            <a href="">
              <div className={classes.textSlider}>
                Регистрирай се за Мадара Трейл 05.04.2026г.
              </div>
            </a>
          </div>
          <div className={classes.textWraper}>
            <a href="">
              <div className={classes.textSlider}>
                Регистрирай се за Мадара Трейл 05.04.2026г.
              </div>
            </a>
          </div>
        </div>
      </Marquee>
    </>
  );
}
