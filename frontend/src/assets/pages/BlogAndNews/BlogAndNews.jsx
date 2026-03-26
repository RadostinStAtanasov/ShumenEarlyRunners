import CardBlogAndNewsPage from "../BlogAndNews/CardBlogAndNews";
import classes from "../BlogAndNews/BlogAndNews.module.css";
import HeadBlogAndNewsCard from "./HeadBlogAndNewsCard";
import { useEffect, useState } from "react";

import fivekmRD from "../../../../public/blogAndNews/5kmRD2.jpg";
import madaraRun from "../../../../public/blogAndNews/madaraRunTrail.jpg";
import stValentines from "../../../../public/blogAndNews/st.Valentines.jpg";
import stenataRun from "../../../../public/blogAndNews/stenataRun.jpg";
import zaZelevSokStartOfTheYear from "../../../../public/blogAndNews/zaZelevSokStartOfTheYear.jpg";
import shumenEarlyWithNewPartners from "../../../../public/blogAndNews/shumenEarlyWithNewPartners.jpg";

export default function BlogAndNewsPage() {
  const [blogOrNews, setBlogOrNews] = useState([]);
  const [blogOrNewsImages, setBlogOrNewsImages] = useState([
    fivekmRD,
    stValentines,
    shumenEarlyWithNewPartners,
    stenataRun,
    zaZelevSokStartOfTheYear,
    madaraRun,
  ]);

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/blogs")
      .then((response) => response.json())
      .then((response) => {
        setBlogOrNews(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(blogOrNews);
  console.log(blogOrNews);

  return (
    <>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Блог енд Нюз</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.headBlogANews}>
        {blogOrNews.slice(0, 1).map((objHeadblog, index) => (
          <div key={index}>
            <HeadBlogAndNewsCard
              infoHeadBlog={objHeadblog}
              image={blogOrNewsImages[0]}
            />
          </div>
        ))}
      </div>
      <div className={classes.cardOrder}>
        {blogOrNews.slice(1).map((obj, index) => (
          <div key={index}>
            <CardBlogAndNewsPage info={obj} images={blogOrNewsImages} />
          </div>
        ))}
      </div>
    </>
  );
}
