import classes from "../BlogAndNews/CardBlogAndNews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import imgs from "../../images/blogAndNewsImages/5kmRD.jpg";

export default function CardBlogAndNewsPage({ info }) {
  return (
    <>
      <div className={classes.mainCardContainer}>
        <div className={classes.imageContainer}>
          <a href={`/Блог енд Нюз/${info.id}`}>
            <img className={classes.imagesBlogAndNews} src={info.pic} alt="" />
          </a>
        </div>
        <div className={classes.containerPostedBy}>
          posted by {info.postedBy} | {info.postedDate} | {info.blogOrNews}
        </div>
        <div className={classes.headerCard}></div>
        <div className={classes.containerParagraph}>
          <p className={classes.cutTheText}>{info.infoBlogAndNews}</p>
        </div>
        <div className={classes.containerLikesAndLeaveAComment}>
          <a href="">
            <FontAwesomeIcon icon={faHeart} />
            <span> likes</span>
          </a>
          <a href="">
            <FontAwesomeIcon icon={faCommentDots} />
            <span> leave a comment</span>
          </a>
        </div>
        <a href={`/Блог енд Нюз/${info.id}`}>
          <button className={classes.buttonContinuedReading}>
            продължиш да четеш
          </button>
        </a>
      </div>
    </>
  );
}
