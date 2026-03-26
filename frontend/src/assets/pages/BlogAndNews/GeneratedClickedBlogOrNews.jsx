import { useState, useEffect } from "react";
import classes from "./GenerateTitleForNewBlogOrNews.module.css";
import { useParams } from "react-router-dom";

import fivekmRD from "../../../../public/blogAndNews/5kmRD2.jpg";
import madaraRun from "../../../../public/blogAndNews/madaraRunTrail.jpg";
import stValentines from "../../../../public/blogAndNews/st.Valentines.jpg";
import stenataRun from "../../../../public/blogAndNews/stenataRun.jpg";
import zaZelevSokStartOfTheYear from "../../../../public/blogAndNews/zaZelevSokStartOfTheYear.jpg";
import shumenEarlyWithNewPartners from "../../../../public/blogAndNews/shumenEarlyWithNewPartners.jpg";

export default function GeneratedClickedBlogOrNews() {
  const [blogAndNews, setBlogOrNews] = useState([]);
  const [blogOrNewsImages, setBlogOrNewsImages] = useState([
    fivekmRD,
    stValentines,
    shumenEarlyWithNewPartners,
    stenataRun,
    zaZelevSokStartOfTheYear,
    madaraRun,
  ]);

  const params = useParams();
  const id = params.blogAndNewsId;

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/blogs/" + id)
      .then((response) => response.json())
      .then((response) => {
        setBlogOrNews(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleAndPostedBy}>{blogAndNews.title}</div>
      <div>
        <div className={classes.postedByText}>
          posted by {blogAndNews.postedBy} | {blogAndNews.postedDate}
        </div>
        <span>
          <img
            className={classes.imgBlogAndNews}
            src={blogOrNewsImages[id - 1]}
            alt=""
          ></img>
        </span>
        <p>{blogAndNews.infoBlogAndNews}</p>
      </div>
    </div>
  );
}
