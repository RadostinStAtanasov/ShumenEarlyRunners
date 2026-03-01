import { useState, useEffect } from "react";
import classes from "./GenerateTitleForNewBlogOrNews.module.css";

import image1 from "../../../images/Gallery/71.jpg";

export default function GenerateTitleForNewBlogOrNews() {
  const [blogOrNews, setBlogOrNews] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/BlogAndNews")
      .then((response) => response.json())
      .then((response) => {
        setBlogOrNews(response[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleAndPostedBy}>
        {blogOrNews.Title}
        <div>
          posted by {blogOrNews.PostedBy} | {blogOrNews.PostedDate}
          <p>{blogOrNews.InfoBlogAndNews}</p>
        </div>
      </div>
      <span>
        <img className={classes.imgBlogAndNews} src={image1} alt="" />
      </span>
    </div>
  );
}
