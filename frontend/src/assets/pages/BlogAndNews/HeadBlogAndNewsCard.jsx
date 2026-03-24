import classes from "./HeadBlogAndNewsCard.module.css";
import { Link } from "react-router-dom";

export default function HeadBlogAndNewsCard({ infoHeadBlog }) {
  return (
    <div className={classes.mainManiBlogAndNews}>
      <div className={classes.outerLine}>
        <div className={classes.mainContainerHeadCard}>
          <div className={classes.headMainCont}>{infoHeadBlog.title}</div>

          <div className={classes.imgContHeadBlogNewsCard}>
            <Link to="/Блог енд Нюз/1" relative="path">
              <img
                className={classes.imgBlogANewsHead}
                src={infoHeadBlog.pic}
                alt=""
              />
            </Link>
          </div>
          <div className={classes.footerBlogAndNews}>
            <p>{infoHeadBlog.infoBlogAndNews}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
