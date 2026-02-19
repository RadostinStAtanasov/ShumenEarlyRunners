import classes from "../Shop/Detail.module.css";
import tShirt1 from "../../images/tshirtImages/tshirt1.jpg";
import tShirt2 from "../../images/tshirtImages/tshirt2.jpg";
import tShirt3 from "../../images/tshirtImages/tshirt3.jpg";
import tSDhirtER from "../../images/tshirtImages/tSDhirtER.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function DetailPage() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }

  const productImages = [tSDhirtER, tShirt1, tShirt2, tShirt3];
  const [currentImage, SetCurrentImage] = useState(0);

  return (
    <>
      <div className={classes.mainContainerShopDetails}>
        <h1>За да поръчаш: 0878688970 / irinova@yahoo.com</h1>
        <div className={classes.mainContainer}>
          <div>
            <div className={classes.detailsImagesAndMainImage}>
              <div className={classes.sideImagesInColumn}>
                <img
                  src={productImages[0]}
                  alt="product image"
                  width={100}
                  height={100}
                  onClick={(e) => SetCurrentImage(0)}
                  className={classes.imgDetails}
                />
                <img
                  onClick={(e) => SetCurrentImage(1)}
                  src={productImages[1]}
                  alt="product image"
                  width={100}
                  height={100}
                  className={classes.imgDetails}
                />
                <img
                  onClick={(e) => SetCurrentImage(2)}
                  src={productImages[2]}
                  alt="product image"
                  width={100}
                  height={100}
                  className={classes.imgDetails}
                />
                <img
                  onClick={(e) => SetCurrentImage(3)}
                  src={productImages[3]}
                  alt="product image"
                  width={100}
                  height={100}
                  className={classes.imgDetails}
                />
              </div>
              <div>
                <img
                  src={productImages[currentImage]}
                  alt="main image"
                  width={620}
                  height={480}
                  className={classes.imgDetailsBigImg}
                />
              </div>
            </div>
          </div>

          <div className={classes.containerDescription}>
            <h2 className={classes.productTitle}>
              Тениска за бягане | Early Runners
            </h2>
            <h3 className={classes.inStock}>в наличност</h3>
            <div className={classes.justUnderline}> </div>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              totam accusantium pariatur. Optio aliquam quidem pariatur ut ex
              porro libero ullam commodi fugit, numquam similique atque aperiam
              ratione quaerat fugiat magnam mollitia tempora! Nisi porro dolor
              possimus ad placeat, consequuntur animi architecto eveniet
              deleniti ipsa a, tenetur ab veritatis similique iusto debitis
              reprehenderit molestias fugit eos, expedita perferendis non.
              Quaerat aliquid atque debitis temporibus exercitationem porro
              facere reprehenderit sunt modi odio. Illo a quidem veritatis
              temporibus saepe est, atque voluptatum placeat recusandae
              molestiae voluptates qui consequuntur culpa magnam quaerat
              blanditiis expedita, dolorem laudantium. Doloremque itaque
              exercitationem explicabo magnam repudiandae fuga.
            </p>
            <div className={classes.price}>26.36 € / 52лв.</div>
            <div className={classes.containerSexSize}>
              <div className={classes.sizeAndSex}>
                <label className={classes.label}>МЪЖКА / ДАМСКА</label>
                <select>
                  <option value="xs">мъжка</option>
                  <option value="s">дамска</option>
                </select>
              </div>
              <div className={classes.sizeAndSex}>
                <label className={classes.label}>РАЗМЕР</label>
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
            <div className={classes.numberQuantity}>
              <div className={classes.btnsQuantity}>
                <input
                  type="button"
                  value="-"
                  className="minus"
                  onClick={decrementCounter}
                />
                <input
                  name="quantity"
                  value={counter}
                  className={classes.inputTextNumber}
                />
                <input
                  type="button"
                  value="+"
                  className="plus"
                  onClick={incrementCounter}
                />
              </div>
              <div>
                <a href="" className={classes.buyButton}>
                  КУПИ
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
