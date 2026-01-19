import classes from "../Shop/Detail.module.css";
import tShirt1 from "../../images/tshirtImages/tshirt1.jpg";
import tShirt2 from "../../images/tshirtImages/tshirt2.jpg";
import tShirt3 from "../../images/tshirtImages/tshirt3.jpg";

export default function DetailPage() {
  return (
    <>
      <h1>
        За да поръчаш се обади :0878688970 или изпрати имейл: irinova@yahoo.com
      </h1>
      <div className={classes.mainContainer}>
        <div className={classes.imageDetails}>
          <img className={classes.image} src={tShirt1} alt="" />
        </div>
        <div className={classes.containerDescription}>
          <h2 className={classes.productTitle}>
            Тениска за бягане | Early Runners
          </h2>
          <h3 className={classes.inStock}>в наличност</h3>
          <div className={classes.justUnderline}> </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            totam accusantium pariatur. Optio aliquam quidem pariatur ut ex
            porro libero ullam commodi fugit, numquam similique atque aperiam
            ratione quaerat fugiat magnam mollitia tempora! Nisi porro dolor
            possimus ad placeat, consequuntur animi architecto eveniet deleniti
            ipsa a, tenetur ab veritatis similique iusto debitis reprehenderit
            molestias fugit eos, expedita perferendis non. Quaerat aliquid atque
            debitis temporibus exercitationem porro facere reprehenderit sunt
            modi odio. Illo a quidem veritatis temporibus saepe est, atque
            voluptatum placeat recusandae molestiae voluptates qui consequuntur
            culpa magnam quaerat blanditiis expedita, dolorem laudantium.
            Doloremque itaque exercitationem explicabo magnam repudiandae fuga.
          </p>
          <div className={classes.price}>26.36 € / 52лв.</div>
          <div className={classes.containerSexSize}>
            <div className={classes.sizeAndSex}>
              <label>МЪЖКА / ДАМСКА</label>
              <select>
                <option value="xs">мъжка</option>
                <option value="s">дамска</option>
              </select>
            </div>
            <div className={classes.sizeAndSex}>
              <label>РАЗМЕР</label>
              <select>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="x">X</option>
                <option value="xl">XL</option>
              </select>
            </div>
          </div>
          <div>
            <button>+1-</button>
            <div>icona s koshnica i kupi nadpis</div>
          </div>
        </div>
      </div>
    </>
  );
}
