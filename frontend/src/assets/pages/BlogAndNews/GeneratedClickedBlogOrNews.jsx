import { useState, useEffect } from "react";
import classes from "./GenerateTitleForNewBlogOrNews.module.css";
import { useParams } from "react-router-dom";

export default function GeneratedClickedBlogOrNews() {
  const [blogAndNews, setBlogOrNews] = useState([]);

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
            src={blogAndNews.pic}
            alt=""
          ></img>
        </span>
        <p>{blogAndNews.infoBlogAndNews}</p>
      </div>
    </div>
  );
}
