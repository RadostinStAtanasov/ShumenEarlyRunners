import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GenerateEventPage() {
  const [event, setEvent] = useState();
  const params = useParams();
  const id = params.eventsId;

  useEffect(() => {
    fetch("https://api.earlyrunners.bg/" + id)
      .then((response) => response.json())
      .then((response) => {
        setEvent(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(event);

  return (
    <>
      <div className={classes.mainContainer}>
        <img className={classes.imgMadaraTrail} src={madaraPlato} alt="" />
        <div className={classes.textContainer}>
          <h1>МАДАРА TRAIL 2026 - 05 април 2026 г.</h1>
          <h2>Програма на събитието</h2>
          <h2>ОТТУКА ЗАПОЧВА БЪЛГАРИЯ! </h2>
          Скалният барелеф на Мадарския конник е известен по целия свят и не
          случайно е глобален символ на България. Мистичните гори и скалите
          разкриват красотата си и причудливите си форми единствено когато ги
          приближиш. Можем да чуем във въображението си стъпките на древните
          конници, препускали волно по тези земи. Да популяризираме глобалния
          символ на България, да подкрепим местната общност и да се предизвикаме
          по трудните скалисти терени – това е каузата на сдружение „Shumen
          Early Runners“. Защото оттука започва България!
          <h2>ГОТОВИ ЛИ СТЕ ДА НАДБЯГАТЕ КОННИКА?</h2>
          <p>
            За първи път Shumen Early Runners организира трейл бягане по
            уникалното Мадарско плато в три дистанции. Състезанието ще се
            проведе на територията на общините Шумен и Каспичан.За малчуганите
            ще има детско бягане в зоната на старта.
          </p>
          <h3>СТАРТ:</h3> 9 часа, пред кметството на с. Мадара,община Шумен
          <h3>ДИСТАНЦИИ: </h3>
          <span>
            13 км. 410 D+ за бързина и удоволствие 21 км. 570D+ златната среда
            30 км. 880 D+ истинско изпитание
          </span>
          <h3>ТРАСЕ:</h3> горски пътеки, скали, технични участъци. Осигурени са
          подкрепителни пунктове.
          <h3>РЕГИСТРАЦИЯ: </h3>
          РАННА до 28 февруари 2026
          <span>13км - 20 евро 21км – 30 евро 30км – 35 евро </span>
          СТАНДАРТНА от 01 март до 25 март 2026
          <span>13км – 25 евро 20км – 35 евро 30км - 40 евро </span>
          <br />
          <a href="https://tracksport.live/e/madara-trail-2026">
            <Button variant="outlined" color="error">
              Регистрация
            </Button>
          </a>
          <br />
          ЗАДЪЛЖИТЕЛНА ЕКИПИРОВКА ЗА ВСИЧКИ - ТРЕЙЛ ОБУВКИ ЗА БЯГАНЕ
          ЗАДЪЛЖИТЕЛНА ЕКИПИРОВКА ЗА УЧАСТНИЦИТЕ НА 30 КМ. - съдове за вода с
          вместимост поне 500 мл., храна
          <span>КОНТАКТИ: earlyrunnerssh@gmail.com</span>
        </div>
      </div>
    </>
  );
}
