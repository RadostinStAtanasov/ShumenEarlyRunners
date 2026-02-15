import CardBlogAndNewsPage from "../BlogAndNews/CardBlogAndNews";
import classes from "../BlogAndNews/BlogAndNews.module.css";
import HeadBlogAndNewsCard from "./HeadBlogAndNewsCard";

export default function BlogAndNewsPage() {
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
