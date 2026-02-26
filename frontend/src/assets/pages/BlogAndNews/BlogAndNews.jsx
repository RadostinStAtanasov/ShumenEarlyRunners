import CardBlogAndNewsPage from "../BlogAndNews/CardBlogAndNews";
import classes from "../BlogAndNews/BlogAndNews.module.css";
import HeadBlogAndNewsCard from "./HeadBlogAndNewsCard";

import { useEffect, useState } from "react";

export default function BlogAndNewsPage() {
  // const [blogOrNews, setBlogOrNews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/BlogAndNews")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setBlogOrNews(response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Блог анд Нюзс</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.headBlogANews}>
        <HeadBlogAndNewsCard />
      </div>
      <div className={classes.cardOrder}>
        <CardBlogAndNewsPage />
        <CardBlogAndNewsPage />
        <CardBlogAndNewsPage />
      </div>
    </>
  );
}
