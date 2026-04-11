import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "./GenerateSelectedEvent.module.css";

export default function GenerateEventPage() {
  const [event, setEvent] = useState([]);
  const params = useParams();
  const id = params.eventsId;

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/events/" + id)
      .then((response) => response.json())
      .then((response) => {
        setEvent(response[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(event);

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
          <h1 className={classes.titleEvent}>{event.title}</h1>
          <br />
          <article className={classes.description}>{event.description}</article>
          <br />
          <span className={classes.headedrsSche}>ПРОГРАМА НА СЪБИТИЕТО</span>
          <p>{event.schedule}</p>
          <br />
          <span className={classes.headedrs}>СТАРТ:</span>
          <div className={classes.textSize}>{event.schedulestartinfo}</div>
          <br />
          <span className={classes.headedrs}>ДИСТАНЦИИ:</span>
          <div className={classes.textSize}>{event.distants}</div>
          <br />
          <span className={classes.headedrs}>РЕГИСТРАЦИЯ:</span>
          <span className={classes.headedrs}>РАННА:</span>
          <div className={classes.textSize}>
            {/* {event.registrationearly?.split(".").map((i, key) => (
              <div key={key}>{i}</div>
            ))} */}
          </div>
          <span className={classes.headedrs}>СТАНДАРТНА:</span>
          <div className={classes.textSize}>
            {/* {event.registrationstandart?.split(".").map((i, key) => (
              <div key={key}>{i}</div>
            ))} */}
          </div>
          <span className={classes.headedrs}>ТРАСЕ:</span>
          <div className={classes.textSize}>{event.route}</div>
          <br />
          <a href={`${event.linkforregistration}`}>
            <Button
              variant="outlined"
              color="error"
              className={classes.pulseBtn}
            >
              Регистрация
            </Button>
          </a>
          <br />
          <span className={classes.headedrs}>ПРЕПОРЪЧИТЕЛНА ЕКИПИРОВКА: </span>
          <div className={classes.textSize}>{event.recommendedequipment}</div>
          <br />
          <span className={classes.headedrs}>ЗАДЪЛЖИТЕЛНА ЕКИПИРОВКА: </span>
          <div className={classes.textSize}>{event.mandatoryequipment}</div>
          <br />
          <span className={classes.headedrs}>КОНТАКТИ:</span>
          <div className={classes.textSize}>{event.contacts}</div>
        </div>
        <img className={classes.imgMadaraTrail} src={event.urlimage} alt="" />
      </div>
    </>
  );
}
