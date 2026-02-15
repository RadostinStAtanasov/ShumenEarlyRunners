import classes from "../Shop/Product.module.css";
import tshirt from "../../images/tshirtImages/tSDhirtER.jpg";

export default function Product() {
  return (
    <div className={classes.mainContainerProduct}>
      <div className={classes.images}>
        <a href="/магазин/детайли">
          <img className={classes.image} src={tshirt} alt="" />
        </a>
      </div>
      <div className={classes.productName}>Тениска Early Runners</div>
      <div className={classes.price}>26.36 € / 52лв.</div>
      <button className={classes.button}>Купи</button>
    </div>
  );
}
