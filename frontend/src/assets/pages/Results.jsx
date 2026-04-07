import classes from "../pages/Results.module.css";
import { useState, useEffect } from "react";

export default function ResultsPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/results")
      .then((response) => response.json())
      .then((response) => {
        setResults(response);
      })
      .then((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={classes.mainContainerResult}>
        <div className={classes.headerAndUnderline}>
          <h1 className={classes.title}>Резултати</h1>
          <div className={classes.underline}></div>
        </div>
        <div className={classes.eventsContainer}>
          {results.map((results, index) => (
            <div className={classes.image}>
              <a href={results.urllinkresult}>
                <img className={classes.images} src={results.urlimage} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
