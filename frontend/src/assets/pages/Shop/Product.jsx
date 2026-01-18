import classes from "../Shop/Product.module.css";
import tshirt from "../../images/t-shirt-running.jpg";

export default function Product() {
  return (
    <div className={classes.mainContainerProduct}>
      <div className={classes.images}>
        <img className={classes.image} src={tshirt} alt="" />
      </div>
      <div className={classes.productName}>Тениска Early Runners</div>
      <div className={classes.price}>26.36 € / 52лв.</div>
      <button className={classes.button}>Купи</button>
    </div>
  );
}
