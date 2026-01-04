import fiveKmImage from "../images/giveKmshNew.bmp";
import classes from "../pages/Home.module.css";
import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <>
      <div>
        <div className={classes.firstVontainer}>
          <div className={classes.image}>
            <img className={classes.images} src={fiveKmImage} alt="" />
            <Button variant="contained" className={classes.buttonFiveKm}>
              Виж къде бягаме всяка събота ot 08:30 на Шуменското плато
              Кликкк..!!!
            </Button>
          </div>
        </div>
        <div>предстоящи събития</div>
      </div>
    </>
  );
}
