import classes from "../pages/Contacts.module.css";

export default function ContactPage() {
  return (
    <>
      <div className={classes.headerAndUnderline}>
        <h1 className={classes.title}>Контакти</h1>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.containerFormContacts}>
        <div>На живо</div>
        <div>По телефона</div>
        <div>По емейла</div>
        <div>Как да се свържеш с нас ела всяка събота на живо 08:30</div>
        <img src="" alt="" />
        ТУК или на ТЕЛ: 1234567890/ емайл: асдфас@yahoo.цом
      </div>
    </>
  );
}

// Шумен, В.Преслав, Плиска, Мадара
// свържи се с нас да се преливат картинките като пъзел
// да измисля нещо за заглавната страница
