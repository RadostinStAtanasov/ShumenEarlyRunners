import classes from "./HeadBlogAndNewsCard.module.css";

export default function HeadBlogAndNewsCard({ infoHeadBlog }) {
  return (
    <div className={classes.mainManiBlogAndNews}>
      <div className={classes.outerLine}>
        <div className={classes.mainContainerHeadCard}>
          <div className={classes.headMainCont}>{infoHeadBlog.title}</div>

          <div className={classes.imgContHeadBlogNewsCard}>
            <a href={`/Блог енд Нюз/1`}>
              <img
                className={classes.imgBlogANewsHead}
                src={infoHeadBlog.pic}
                alt=""
              />
            </a>
          </div>
          <div className={classes.footerBlogAndNews}>
            <p>{infoHeadBlog.infoblogandnews}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
