import classes from "./HeadBlogAndNewsCard.module.css";
import stValentines from "../../images/blogAndNewsImages/st.Valentines.jpg";

export default function HeadBlogAndNewsCard({ infoHeadBlog }) {
  return (
    <div className={classes.mainManiBlogAndNews}>
      <div className={classes.outerLine}>
        <div className={classes.mainContainerHeadCard}>
          <div className={classes.headMainCont}>{infoHeadBlog.Title}</div>

          <div className={classes.imgContHeadBlogNewsCard}>
            <a href="/Блог енд Нюзс/ню нюсс">
              <img
                className={classes.imgBlogANewsHead}
                src={stValentines}
                alt=""
              />
            </a>
          </div>
          <div className={classes.footerBlogAndNews}>
            <p>{infoHeadBlog.InfoBlogAndNews}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
