import { useState, useEffect } from "react";
import classes from "./GenerateTitleForNewBlogOrNews.module.css";
import { useParams } from "react-router-dom";
import { getAuthToken } from "../../util/auth";

export default function GeneratedClickedBlogOrNews() {
  const [blogAndNews, setBlogOrNews] = useState([]);

  const params = useParams();
  const id = params.blogAndNewsId;

  const token = getAuthToken();

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/blogs/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setBlogOrNews(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(blogAndNews);
  let images = blogAndNews.images;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleAndPostedBy}>{blogAndNews.title}</div>
      <div>
        <div className={classes.postedByText}>
          posted by {blogAndNews.postedby} | {blogAndNews.posteddate}
        </div>
        <p className={classes.textPar}>{blogAndNews.infoblogandnews}</p>
        <div className={classes.imageCenter}>
          {images?.map((image, index) => (
            <img className={classes.imgBlogAndNews} src={image} alt="dali" />
          ))}
        </div>
      </div>
    </div>
  );
}
