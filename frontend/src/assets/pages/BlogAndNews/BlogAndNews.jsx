import CardBlogAndNewsPage from "../BlogAndNews/CardBlogAndNews";
import classes from "../BlogAndNews/BlogAndNews.module.css";

export default function BlogAndNewsPage() {
  return (
    <>
      <div className={classes.cardOrder}>
        <CardBlogAndNewsPage />
        <CardBlogAndNewsPage />
        <CardBlogAndNewsPage />
      </div>
    </>
  );
}
