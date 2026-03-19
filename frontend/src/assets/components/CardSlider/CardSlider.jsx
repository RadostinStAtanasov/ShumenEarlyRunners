import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CardSlider.css";
import { useEffect, useState } from "react";

import fiveKmRD from "../../images/blogAndNewsImages/5kmRD.jpg";
import valentines from "../../images/blogAndNewsImages/st.Valentines.jpg";
import shumEarlyRun from "../../images/blogAndNewsImages/newPartners.jpg";
import stenataRun from "../../images/blogAndNewsImages/stenataRun.jpg";
import zelevSok from "../../images/blogAndNewsImages/zelevSok.jpg";

export default function CardSlider() {
  const [blogOrNewsPics, setBlogOrNewsPics] = useState([
    fiveKmRD,
    valentines,
    shumEarlyRun,
    stenataRun,
    zelevSok,
  ]);

  const [blogOrNews, setBlogOrNews] = useState([
    {
      ID: 1,
      Title: "5 км. Става на 5 години",
      Pic: "../../images/blogAndNewsImages/5kmRD.jpg",
      PostedDate: "2/14/2026",
      PostedBy: "Irina",
      BOrN: "blog",
      InfoBlogAndNews: "Рожден ден на 5км Шумен на Шуменското плато",
    },
    {
      ID: 2,
      Title: "Празник на любовта.Виното.Бягането",
      Pic: "../../images/blogAndNewsImages/st.Valentines.jpg",
      PostedDate: "3/14/2026",
      PostedBy: "Irina",
      BOrN: "blog",
      InfoBlogAndNews:
        "Свети Валентин е християнски празник в памет на свещеномъченика Валентин Римски отбелязван от православните църкви на 6 юли а от западните църкви на 14 февруари. През XIV век в Западна Европа 14 февруари започва да се свързва с романтиката и днес празникът е популярен преди всичко като Ден на любовта.На тази дата двойките изразяват любовта си един към друг като си изпращат поздравителни картички и подаръци със стилизирана форма на сърце. Традиционно се празнува в англоговорещите страни (Valentine's Day) и някои страни от Южна Америка (като „Празник на любовта и приятелството“). След 90-те години на 20 век добива известност и на други места (предимно от Третия свят)- основно от рекламни кампании на производители на цветя и сладкарски продукти.В Бразилия на 12 юни се празнува т.нар. Ден на влюбените (на португалски: Dia dos Namorados) като по същество той е идентичен на празника на Св. Валентин – има размяна на подаръци (шоколад картички) а на жените се подаряват букети цветя. Празникът се провежда ден преди този на Свети Антоний от Падуа (в португалоезичните страни познат още като Свети Антоний Лисабонски/от Лисабон) смятан за покровител на брака.Патрон на празникаИмето на празника идва от раннохристиянски мъченик наречен Валентин живял през 3 век. Най-напред празникът Свети Валентин е обявен за честване на 14 февруари от папа Геласий I около 494 г. През 19 век мощите на свети Валентин са дарени от папа Григорий XVI на дъблинската църква Whitefriar Street Carmelite в Ирландия която после станала често посещавана на 14 февруари.Св. Валентин не фигурира в официалния календар на Католическата църква. Православната Църква го чества на 6 юли.[1]Според Католическата енциклопедия (1908 г.) има поне трима светци наречени Валентин. Всички те са били мъченици и са записани под датата 14 февруари:[2]римски свещеник – понесъл мъченичество през втората половина на 3 век и погребан на пътя Виа Фламиния;епископът на Интермамна (днешен Терни) – също понесъл мъченичество през втората половина на 3 век и погребан на пътя Виа Фламиния но не на същото място като свещеника;мъченик в Африка за когото не се знае почти нищо друго.Връзката между Свети Валентин и романтичната любов не е спомената в нито един ранен исторически документ и се счита чисто и просто за легенда. Самият Свети Валентин е свързван първоначално с покровителство над епилептиците. През 1969 г. като част от по-голям опит да намали броя на празниците с чисто легендарен произход Католическата църква премахва празника на Свети Валентин от официалния си календар.",
    },
    {
      ID: 3,
      Title: "МАДАРА TRAIL 2026 С НОВИ ПРИЯТЕЛИ",
      Pic: "../../images/blogAndNewsImages/madaraRun2.jpg",
      PostedDate: "3/1/2026",
      PostedBy: "Irina",
      BOrN: "blog",
      InfoBlogAndNews:
        "Shumen Early Runners привлече нови съмишленици които искат да се включат и подкепят МАДАРА TRAIL 2026. Обменихме идеи благодарение на изложението “ПО-ШУМЕН ГРАД ЕХРО” в което участвахме. Всички са убедени че глобалния символ на България – Мадарския конник има нужда от повече популярност като чрез различни събития се утвърждава неговата значимост. Това е и каузата на сдружението на шуменските ранобудни бегачи. Надяваме се заедно да направим спортното събитие МАДАРА TRAIL 2026 и да зарадваме участниците с интересни награди и подаръци. Датата е 5 април нали не сте забравили?За регистрация тук:https://tracksport.live/e/madara-trail-2026",
    },
    {
      ID: 4,
      Title: "StenataRun",
      Pic: "../../images/blogAndNewsImages/stenataRun.jpg",
      PostedDate: "5/25/2026",
      PostedBy: "Rado",
      BOrN: "news",
      InfoBlogAndNews:
        "ЗА ПЪРВИ ПЪТ В ШУМЕН!СТЕНАТА RUN – ШУМЕНСКО ЕЗЕРО 2025 На 18.05.2025 г. (неделя) ранобудните бегачи на Шумен ви предизвикват с обиколки на стената на яз Шумен или както си го знаем – Шуменското езеро.За първи път ще предизвикаме издържливостта си по РАВЕН терен и ще проверим устойчивостта си в рамките на фиксирано време.Участниците се състезават кой ще направи най-много обиколки в рамките на 6 или 3 часа ще има и щафети по двама като всеки бяга по 1 час. Класирането се прави на база брой избягани обиколки. При равен брой обиколки в отборното класиране се гледа времето за което са избягани.Дисциплините:Обиколки индивидуално 3 часаОбиколки индивидуално 6 часаОбиколки отбори по двама – всеки бяга по 1 часПрограмата:6.00 ч. – раздаване на стартови номера в зоната на старта;7:00 ч. Старт индивидуални участници 6- и 3-часова дисциплина (6-часовата приключва в 13.00 ч. 3-часовата дисциплина приключва в 10:00 ч.)10:00 ч. Старт щафети от двама души(Приключват в 12:00 ч. )13.30 ч. Награждаване финал на събитиетоМястото:Стената на яз. Шумен Барбароса бийч. Дължина в посока – 900 м.ОЧАКВАЙТЕ ФОРМА ЗА РЕГИСТРАЦИЯ И ТРЕНИРАЙТЕ!",
    },
    {
      ID: 5,
      Title: "ПЪРВИ 5 КМ. ЗА 2006 ГОДИНА – ЗА ЗЕЛЕВ СОК",
      Pic: "../../images/blogAndNewsImages/zelevSok.jpg",
      PostedDate: "1/02/2026",
      PostedBy: "IrinaAndRado",
      BOrN: "bigNews",
      InfoBlogAndNews:
        "Стартираме 2026 г. надъхани за нови приключения и много настроение. Още в първия ден на годината тичахме „За зелев сок“. Забавното първо януарско събитие провеждаме за трета поредна година. Зелевият сок винаги е топ опция в първия ден след дългите празници. А съчетан с раздвижване дава добър старт на годината.След оспорвана дегустация всички определиха че най-атрактивния зелев сок е на Милко Милков той го гомбинира с айран и така спечели приза.  Кой каза че зимното бягане не е забавно? Всяка събота старт 8.30 часа от паркинга до паметник “Създатели на българската държава“ на шуменското плато.",
    },
  ]);

  //const [blogAndNews, setBlogsAndNews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/blogAndNews")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setBlogsAndNews(response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="main">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true}
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            430: { spaceBetween: 50 },
            580: { spaceBetween: 70 },
            650: { spaceBetween: 30 },
          }}
        >
          {blogOrNews.map((info, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${blogOrNewsPics[index]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="swiper-slide slide-1"
            >
              <a href={`/Блог енд нюз/${info.ID}`}>
                <div className="title">
                  <h1>{info.Title}</h1>
                </div>
                <div className="content">
                  <div className="text">
                    <h2>{info.Title}</h2>
                    {/* <p>{info.InfoBlogAndNews}</p> */}
                  </div>
                  <div className="genre">
                    <span style={{ "--i": 1 }}>5км</span>
                    <span style={{ "--i": 2 }}>Early Runners</span>
                    {/* <span style={{ "--i": 3 }}>Вино</span>
                    <span style={{ "--i": 4 }}>Шоколад</span>
                    <span style={{ "--i": 5 }}>Любов</span> */}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="swiper-slide slide-2">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>5км Зелев сок</h1>
              </div>
              <div className="content">
                <div className="text">
                  <h2>5км Зелев сок</h2>
                  <p>
                    ПЪРВИ 5 КМ. ЗА 2006 ГОДИНА – ЗА ЗЕЛЕВ СОК Стартираме 2026 г.
                    надъхани за нови приключения и много настроение. Още в
                    първия ден на годината тичахме „За зелев сок“. Забавното
                    първо януарско събитие провеждаме за трета поредна година.
                    Зелевият сок винаги е топ опция в първия ден след дългите
                    празници. А съчетан с раздвижване дава добър старт на
                    годината. След оспорвана дегустация всички определиха, че
                    най-атрактивния зелев сок е на Милко Милков, той го
                    гомбинира с айран и така спечели приза. Кой каза, че зимното
                    бягане не е забавно? Всяка събота, старт 8.30 часа от
                    паркинга до паметник “Създатели на българската държава“ на
                    шуменското плато.
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>5км</span>
                  <span style={{ "--i": 2 }}>Early runners</span>
                  <span style={{ "--i": 3 }}>Зелев сок</span>
                </div>
              </div>
            </a>
          </SwiperSlide> */}
          {/* <SwiperSlide className="swiper-slide slide-3">
            <a href="/мадараТрейл">
              <div className="title">
                <h1>Мадара Трейл 1 сезон</h1>
              </div>
              <div className="content">
              
                <div className="text">
                  <h2>Мадара Трейл</h2>
                  <p>
                    ОТВОРИХМЕ РЕГИСТРАЦИЯ ЗА МАДАРА TRAIL 2026 За първи път
                    Shumen Early Runners организира трейл бягане по уникалното
                    Мадарско плато, криещо историята на старите българи в
                    причудливите си пещери и величествени скали. Те разкриват
                    красотата си само когато ги приближиш, а във въображението
                    ни отекват стъпките на Конникът, препускал волно по тези
                    земи. ГОТОВИ ЛИ СТЕ ДА НАДБЯГАТЕ КОННИКА? ЗАПАЗЕТЕ СИ ДАТАТА
                    05.04.2026 Г.
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>Трейл</span>
                  <span style={{ "--i": 2 }}>Мадара</span>
                  <span style={{ "--i": 3 }}>Early runners</span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-4">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>МАДАРА TRAIL 2026 С НОВИ ПРИЯТЕЛИ</h1>
              </div>
              <div className="content">
              
                <div className="text">
                  <h2>МАДАРА TRAIL 2026 С НОВИ ПРИЯТЕЛИ</h2>
                  <p>
                    Shumen Early Runners привлече нови съмишленици, които искат
                    да се включат и подкепят МАДАРА TRAIL 2026. Обменихме идеи
                    благодарение на изложението “ПО-ШУМЕН ГРАД ЕХРО”, в което
                    участвахме. Всички са убедени, че глобалния символ на
                    България – Мадарския конник, има нужда от повече популярност
                    като чрез различни събития се утвърждава неговата значимост.
                    Това е и каузата на сдружението на шуменските ранобудни
                    бегачи. Надяваме се заедно да направим спортното събитие
                    МАДАРА TRAIL 2026 и да зарадваме участниците с интересни
                    награди и подаръци. Датата е 5 април, нали не сте забравили?
                    За регистрация тук:
                    https://tracksport.live/e/madara-trail-2026
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>Мадара</span>
                  <span style={{ "--i": 2 }}>Трейл</span>
                  <span style={{ "--i": 3 }}>Експо</span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-5">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>Flash</h1>
              </div>
              <div className="content">
                
                <div className="text">
                  <h2>Flash</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque culpa, quaerat ipsam eius libero voluptatum,
                    recusandae fugit officiis facilis nisi voluptatem
                    consectetur est quam nulla maxime ea itaque alias ducimus
                    amet sequi animi, minima repudiandae autem consequuntur?
                    Corrupti animi incidunt adipisci nostrum sint soluta, hic
                    dolor iure molestias odit aspernatur!
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>Drama</span>
                  <span style={{ "--i": 2 }}>Commedy</span>
                </div>
              </div>
            </a>
          </SwiperSlide> */}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}
