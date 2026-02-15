import classes from "./HeadBlogAndNewsCard.module.css";
import stValentines from "../../images/blogAndNewsImages/st.Valentines.jpg";

export default function HeadBlogAndNewsCard() {
  return (
    <div className={classes.mainManiBlogAndNews}>
      <div className={classes.outerLine}>
        <div className={classes.mainContainerHeadCard}>
          <div className={classes.headMainCont}>
            The details are not the details. They make the design.
          </div>
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
            <span>
              Real comfort, visual and physical, is vital to every room
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad
              id, quae delectus sapiente nobis voluptate, tempore officia
              pariatur voluptatum repellendus voluptatibus aliquid ut temporibus
              inventore numquam deserunt? Ullam pariatur nisi rem nulla, quidem
              voluptate praesentium maxime repellat odit reprehenderit
              consequatur quisquam eos optio dolorum fugiat at quae nemo porro
              eveniet, illum vero fuga molestias ipsa. Necessitatibus dolore
              asperiores cupiditate corrupti repudiandae impedit, eius
              voluptates enim sapiente debitis nobis, nostrum repellat dicta
              ipsam sequi laboriosam? Blanditiis placeat excepturi nobis
              officiis in temporibus ullam mollitia, ea assumenda iure
              praesentium facilis necessitatibus sint ad, ab voluptas quibusdam
              commodi qui? Non, maxime commodi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
