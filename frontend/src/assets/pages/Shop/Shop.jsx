import Product from "./Product";
import classes from "../Shop/Shop.module.css";

export default function ShopPage() {
  return (
    <>
      <div className={classes.mainContainerShop}>
        <div className={classes.headerAndUnderline}>
          <h1 className={classes.title}>Магазин</h1>
          <div className={classes.underline}></div>
        </div>
        <h1 className={classes.orderMessage}>
          Заявки
          <br />
          irinova@yahoo.com / телефон: 0878688970
        </h1>
        <div className={classes.bodyContainerShop}>
          <Product />
        </div>
      </div>
    </>
  );
}
