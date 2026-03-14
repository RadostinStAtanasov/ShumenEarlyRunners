import CardBlogAndNewsPage from "../BlogAndNews/CardBlogAndNews";
import classes from "../BlogAndNews/BlogAndNews.module.css";
import HeadBlogAndNewsCard from "./HeadBlogAndNewsCard";
import { useEffect, useState } from "react";

export default function BlogAndNewsPage() {
  const [blogOrNews, setBlogOrNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/BlogAndNews")
      .then((response) => response.json())
      .then((response) => {
        setBlogOrNews(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Блог енд Нюз</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.headBlogANews}>
        {blogOrNews.slice(0, 1).map((objHeadblog, index) => (
          <div key={index}>
            <HeadBlogAndNewsCard infoHeadBlog={objHeadblog} />
          </div>
        ))}
      </div>
      <div className={classes.cardOrder}>
        {blogOrNews.slice(1).map((obj, index) => (
          <div key={index}>
            <CardBlogAndNewsPage info={obj} />
          </div>
        ))}
      </div>
    </>
  );
}
