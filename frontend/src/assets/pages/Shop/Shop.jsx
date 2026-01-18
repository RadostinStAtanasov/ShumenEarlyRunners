import Product from "./Product";
import classes from "../Shop/Shop.module.css";

export default function ShopPage() {
  return (
    <>
      <h1 className={classes.orderMessage}>
        Заявките за сега стават по емейл: пощата@нзсикой.бг
      </h1>
      <div className={classes.mainContainerShop}>
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}
