import { useState, useEffect } from "react";
import classes from "./GenerateTitleForNewBlogOrNews.module.css";
import { useParams } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import image1 from "../../images/blogAndNewsImages/st.Valentines.jpg";

export default function GeneratedClickedBlogOrNews() {
  const [blogOrNews, setBlogOrNews] = useState([]);
  const params = useParams();
  const id = params.blogAndNewsId;

  useEffect(() => {
    fetch("http://localhost:3000/BlogAndNews/" + id)
      .then((response) => response.json())
      .then((response) => {
        setBlogOrNews(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(blogOrNews);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleAndPostedBy}>{blogOrNews.Title}</div>
      <div>
        <div className={classes.postedByText}>
          posted by {blogOrNews.PostedBy} | {blogOrNews.PostedDate}
        </div>
        <span>
          <img className={classes.imgBlogAndNews} src={blogOrNews.Pic} alt="" />
        </span>
        <p>{blogOrNews.InfoBlogAndNews}</p>
      </div>
    </div>
  );
}
