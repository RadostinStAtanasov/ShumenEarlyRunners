import { useState, useEffect } from "react";
import classes from "./GenerateTitleForNewBlogOrNews.module.css";
import { useParams } from "react-router-dom";

import fiveKmRD from "../../images/blogAndNewsImages/5kmRD.jpg";
import valentines from "../../images/blogAndNewsImages/st.Valentines.jpg";
import shumEarlyRun from "../../images/blogAndNewsImages/newPartners.jpg";
import stenataRun from "../../images/blogAndNewsImages/stenataRun.jpg";
import zelevSok from "../../images/blogAndNewsImages/zelevSok.jpg";

export default function GeneratedClickedBlogOrNews() {
  const [blogAndNews, setBlogOrNews] = useState([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/blogs" + id)
      .then((response) => response.json())
      .then((response) => {
        setBlogOrNews(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(blogAndNews[blodAndNewsId].Pic);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleAndPostedBy}>
        {blogAndNews[blodAndNewsId].title}
      </div>
      <div>
        <div className={classes.postedByText}>
          posted by {blogAndNews[blodAndNewsId].postedBy} |
          {blogAndNews[blodAndNewsId].postedDate}
        </div>
        <span>
          <img
            className={classes.imgBlogAndNews}
            src={blogAndNews[blogAndNewsId].Pic}
            alt=""
          ></img>
        </span>
        <p>{blogAndNews[blodAndNewsId].infoBlogAndNews}</p>
      </div>
    </div>
  );
}
