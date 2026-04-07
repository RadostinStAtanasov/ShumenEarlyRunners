import classes from "../pages/Results.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";

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
  console.log(results);

  return (
    <>
      <div className={classes.mainContainerResult}>
        <div className={classes.headerAndUnderline}>
          <h1 className={classes.title}>Резултати</h1>
          <div className={classes.underline}></div>
        </div>
        <div className={classes.eventsContainer}>
          {results.map((results, index) => (
            <div className={classes.image} key={index}>
              <Link to={results.urllinkresults}>
                <img className={classes.images} src={results.urlimage} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
