import Product from "./Product";
import classes from "../Shop/Shop.module.css";

export default function ShopPage() {
  return (
    <>
      <h1 className={classes.orderMessage}>
        Заявките за сега стават по <br />
        емейл: irinova@yahoo.com / телефон: 0878688970
      </h1>
      <div className={classes.mainContainerShop}>
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}
