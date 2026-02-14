import classes from "../pages/ForUs.module.css";
import massRun from "../images/blogAndNewsImages/masovoRunning.jpg";
import stenataWall from "../images/blogAndNewsImages/stenataRun.jpg";
import mustacRun from "../images/blogAndNewsImages/mustacRun.jpg";
import punkt from "../images/blogAndNewsImages/punkt.jpg";

export default function ForUs() {
  return (
    <>
      <div className={classes.mainContainerForUs}>
        <div className={classes.headerAndUnderline}>
          <h1 className={classes.title}>За Нас</h1>
          <div className={classes.underline}></div>
        </div>
        <div className={classes.parafraphContainer}>
          <p>
            Сдружение „СК Ранобудни бегачи Шумен“ е създадено като продължение
            на инициативата за редовно, масово и безплатно бягане. Желанието ни
            е да популяризираме и утвърждаваме активния начин на живот и
            спортните занимания на открито. Наши каузи са осигуряване на
            леснодостъпни условия за масов спорт за всички, без ограничения във
            възраст, пол, умения, социална и професионална принадлежност. Правим
            всичко възможно да повишим знанията на спортуващите, да си помагаме
            в тренировъчния процес.
            <br />
            <img className={classes.imgForUs} src={massRun} alt="" />
            <br />
            Организираме спортни събития за да популяризираме природните,
            културните, историческите и икономически възможности на града и
            региона. Отправяме предизвикателства към атлетите отблизо и далеч.
            <br />
            <img className={classes.imgForUs} src={stenataWall} alt="" />
            <br />
            Ранобудните бегачи на Шумен откликват на дарителски кампании и акции
            за опазване на природата. По подходящ начин се включваме в световни
            и национални кампании за превенция на най-масовите заболявания,
            причинени от обездвижване, стрес и неглижиране като затлъстяване,
            диабет, рак на гърдата, рак на простата и др.
            <br />
            <img className={classes.imgForUs} src={mustacRun} alt="" />
            <br />
            Нашите акции са изцяло на доброволни начала. Не се плашим от
            доброволния труд и помагаме на други организации в техните
            инициативи и каузи. С личен пример насърчаваме и утвърждаваме
            доброволчеството.
            <br />
            <img className={classes.imgForUs} src={punkt} alt="" />
            <br />
            /снимка от пункт от фейса/ Наша основна кауза е да насърчим
            спортуването от ранна детска възраст и да покажем на младите хора,
            как да спортуват така, че да бъдат здрави и успешни.
          </p>
        </div>
      </div>
    </>
  );
}
