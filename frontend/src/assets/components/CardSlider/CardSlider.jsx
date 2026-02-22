import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./CardSlider.css";

export default function CardSlider() {
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
          <SwiperSlide className="swiper-slide slide-1">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>Св.Валентин</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>Св.Валентин</h2>
                  <p>
                    Както всяка година празнуваме празника на виното и любовта
                    на пистата.
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>5км</span>
                  <span style={{ "--i": 2 }}>Early Runners</span>
                  <span style={{ "--i": 3 }}>Вино</span>
                  <span style={{ "--i": 4 }}>Шоколад</span>
                  <span style={{ "--i": 5 }}>Любов</span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-2">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>5км Зелев сок</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
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
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-3">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>Мадара Трейл 1 сезон</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
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
                <div className="score">8.6</div>
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
                <div className="score">8.6</div>
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
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-1">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>Св.Валентин</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>Св.Валентин</h2>
                  <p>
                    Както всяка година празнуваме празника на виното и любовта
                    на пистата.
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>5км</span>
                  <span style={{ "--i": 2 }}>Early Runners</span>
                  <span style={{ "--i": 3 }}>Вино</span>
                  <span style={{ "--i": 4 }}>Шоколад</span>
                  <span style={{ "--i": 5 }}>Любов</span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-2">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>5км Зелев сок</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
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
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-3">
            <a href="/Блог енд нюзс/ню нюсс">
              <div className="title">
                <h1>Мадара Трейл 1 сезон</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
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
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}
