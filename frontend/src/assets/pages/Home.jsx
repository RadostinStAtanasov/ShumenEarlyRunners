import fiveKmImage from "../images/logos/giveKmshNew.bmp";
import fiveKmImage2 from "../images/logos/5kmshNewNew.bmp";
import classes from "../pages/Home.module.css";
import Button from "@mui/material/Button";
import madaraRun from "../images/blogAndNewsImages/madaraRunNewLogo.jpg";
import magicBazar from "../images/blogAndNewsImages/pazarOfMagic.jpg";
import pametnik from "../images/logos/homePageLogo.jpg";

export default function HomePage() {
  return (
    <>
      <div className={classes.mainContainer}>
        {/* <div className={classes.containerCard5Km}>

          <div className={classes.firstContainer}>
            <div className={classes.image}>
              <img className={classes.images} src={fiveKmImage2} alt="" />
            </div>

     
            <div>
              <a href="https://www.google.com/maps/place/Parking/@43.2578646,26.9224865,123m/data=!3m1!1e3!4m6!3m5!1s0x40a58aef74d63f0d:0x5a1f94674ff36d5f!8m2!3d43.2579096!4d26.9230636!16s%2Fg%2F11cjhq28bh?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D">
                <Button variant="contained" className={classes.buttonFiveKm}>
                  Виж къде бягаме всяка събота 5км от 08:30 на Шуменското плато
                  Кликкк..!!!
                </Button>
              </a>
            </div>
          </div>
        </div> */}
        <div className={classes.firstContainerTitle}>
          <section className={classes.firstContainerText}>
            <h3>Your dream journey</h3>
            <h2>Explorer Destinations Like Nver Before</h2>
            <p>
              Discover stunning destinations and seamless travel experiences
              tailored just for you
            </p>
            <button>Explorer destinations</button>
            <div className={classes.firstCOntainerFooter}>
              <div>
                <span>40+</span>
                <span>Exotic Destinations</span>
              </div>
              <div>
                <span>70+</span>
                <span>Exclusive Offers</span>
              </div>
              <div>
                <span>250+</span>
                <span>Worldwide Adventures</span>
              </div>
            </div>
          </section>
          <div className={classes.imageFirstContainer}>
            <img src={pametnik} alt="" />
          </div>
        </div>
        <div className={classes.NewsEventsContainer}>
          <div className={classes.textCenter}>
            <h1>Предстоящи събития</h1>
            <div className={classes.imageUpcomingEvents}>
              <a href="http://localhost:5173/мадараТрейл">
                <img
                  className={classes.imagesUpcomingEvents}
                  src={madaraRun}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className={classes.textCenter}>
            <h1>Нюзз</h1>
            <div className={classes.imageUpcomingEvents}>
              <a href="https://www.facebook.com/story.php?story_fbid=122274184238132451&id=61553973546554&rdid=5MmU5DoUSmiOUuMd#">
                <img
                  className={classes.imagesUpcomingEvents}
                  src={magicBazar}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
