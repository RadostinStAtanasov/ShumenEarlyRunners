import classes from "./Events.module.css";

import { useEffect, useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/events/")
      .then((response) => response.json())
      .then((response) => {
        setEvents(response);
      })
      .then((error) => console.log(error));
  }, []);

  console.log(events);

  return (
    <div className={classes.mainContainerEvents}>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Събития</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.habibi}>
        {events.map((evn, index) => (
          <div key={index} className={classes.image}>
            <span>{evn.title}</span>
            <a href={`/събития/${evn.id}`}>
              <img className={classes.images} src={evn.urlimage} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className={classes.image}>
  <a href="https://visitshumen.bg/стената-run-шуменско-езеро-2025">
    <img className={classes.images} src={events.urlimage} alt="" />
  </a>
</div>
<div className={classes.image}>
  <a href="https://tracksport.live/e/sumensko-plato-2025">
    <img className={classes.images} src={events.urlimage} alt="" />
  </a>
</div> */
}
