import classes from "../Shop/Detail.module.css";
import tShirt1 from "../../images/tshirtImages/tshirt1.jpg";
import tShirt2 from "../../images/tshirtImages/tshirt2.jpg";
import tShirt3 from "../../images/tshirtImages/tshirt3.jpg";

export default function DetailPage() {
  return (
    <div className={classes.mainContainer}>
      <h1>
        За да поръчаш се обади :0878688970 или изпрати имейл: irinova@yahoo.com
      </h1>
      <div className={classes.imageDetails}>
        <img src={tShirt1} alt="" />
      </div>
      <div className={classes.containerDescription}>
        <h2>Тениска Early Runners</h2>
        <h3>в наличност</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          totam accusantium pariatur. Optio aliquam quidem pariatur ut ex porro
          libero ullam commodi fugit, numquam similique atque aperiam ratione
          quaerat fugiat magnam mollitia tempora! Nisi porro dolor possimus ad
          placeat, consequuntur animi architecto eveniet deleniti ipsa a,
          tenetur ab veritatis similique iusto debitis reprehenderit molestias
          fugit eos, expedita perferendis non. Quaerat aliquid atque debitis
          temporibus exercitationem porro facere reprehenderit sunt modi odio.
          Illo a quidem veritatis temporibus saepe est, atque voluptatum placeat
          recusandae molestiae voluptates qui consequuntur culpa magnam quaerat
          blanditiis expedita, dolorem laudantium. Doloremque itaque
          exercitationem explicabo magnam repudiandae fuga.
        </p>
        <div>26.36 € / 52лв.</div>
        <div className={classes.containerSexSize}>
          <div>
            <div>мъжко/дамско</div>
            <div>izbirane na vyzmojnost ot pada6toto menu</div>
          </div>
          <div>
            <div>razmer</div>
            <div>izbirane na vyzmojnost ot pada6toto menu</div>
          </div>
        </div>
        <div>
          <button>+1-</button>
          <div>icona s koshnica i kupi nadpis</div>
        </div>
      </div>
    </div>
  );
}
