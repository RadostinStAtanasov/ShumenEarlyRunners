import classes from "../pages/Partners.module.css";
import enev from "../images/logos/enev.jpg";
import musala from "../images/logos/musala.jpg";
import emblemOfShumen from "../images/logos/EmblemOfShumen.jpg";
import logoTVShumen from "../images/logos/logoOfTVShumen.jpg";
import tesy from "../images/logos/TesyMainLogoGreenCMYK.jpg";
import shumenPytAvtotransport from "../images/logos/shumenPytnicheskiAvtotransport.gif";
import ilchovHill from "../images/logos/cyclingClubIlchovHills.jpg";
import iRun from "../images/logos/iRun.jpg";
import marchela from "../images/logos/marchela.jpg";

export default function PartnersPage() {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.headerAndUnderline}>
          <h1 className={classes.title}>Нашите Партньори</h1>
          <div className={classes.underline}></div>
        </div>

        <section className={classes.cardPartnersContainer}>
          <div className={classes.cards}>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={enev}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>Enev</h2>
                  <p className={classes.summaryPartners}>
                    Фирма „ЕНЕВ” ООД е основана през 1991 год. С предмет на
                    дейност проектиране, изработка и монтаж на фасадни
                    архитектурни конструкции.Фирмата разполага със собствена
                    производствена база в село Дибич, област Шумен, разположена
                    на 15 000 м2, със сграден фонд 5 000 м2.-Цеха за
                    производство на ал.дограма е оборудван с италиански машини.
                    -Цех за производство на PVC дограма „SCHÜCO” машини
                    “ELUMATEC”.
                  </p>
                  <a href="https://enev-bg.com/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={musala}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>Musala</h2>
                  <p className={classes.summaryPartners}>
                    <h3>
                      Застрахователни Продукти Предлагани от Мусала Иншурънс
                      Брокер
                    </h3>
                    <div>
                      Гражданска отговорност - Гражданска отговорност на
                      застрахованите физически и юридически лицa
                    </div>
                    <div>
                      Автокаско - Обект на застраховката са всички видове
                      сухопътни моторни превозни средства
                    </div>
                    <div>
                      Домашно имуществоо - Застрахова се жилището – апартамент,
                      самостоятелна къща или част от нея
                    </div>
                    {/* <div>
                      Медицински разноски - Застраховката покрива медицински
                      разходи вследствие на злополука или акутно заболяване
                    </div> */}
                  </p>
                  <a href="https://mussalains.com/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={emblemOfShumen}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>Община Шумен</h2>
                  <p className={classes.summaryPartners}>
                    Шумен е разположен в Шуменското поле, което е отворено към
                    югоизток и постепенно намалява своята височина; западните
                    части на града лежат на около 280 – 300 м над морското ниво,
                    а крайните източни – на 180 – 200 м. Градът се намира в
                    подножието на Шуменското плато, което притежава изключително
                    разнообразна природа. Неговото било се извисява на 500 м
                    надморска височина. Превишението му по отношение на града е
                    около 250 – 300 м.
                  </p>
                  <a href="https://www.shumen.bg/bg/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={logoTVShumen}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>ТВ Шумен</h2>
                  <p className={classes.summaryPartners}>
                    Телевизия Шумен е създадена през 1995 г. Тя е обществена
                    медия с 24-часова програма, с национално покритие,
                    разпространявана чрез кабелни електронни съобщителни мрежи.
                    Новините и собствената продукция на телевизията се
                    публикуват на интернет страницата www.tvshumen.bg, а
                    програмата се излъчва на живо в интернет портала
                    www.tvshumen.tv
                  </p>
                  <a href="https://tvshumen.bg/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={tesy}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>Tesy</h2>
                  <p className={classes.summaryPartners}>
                    ТЕСИ е най-големият български и водещ европейки производител
                    на електрически бойлери, бойлери с индиректно нагряване и
                    отоплителни уреди за дома. „Теси“ ООД е българско
                    предприятие за производство на битови електроуреди със
                    седалище в Шумен, част от групата на „Фикосота Холдинг“.
                    Компанията е създадена през 1992 година като „Термосистемс“
                    ООД от братята Жечко и Красен Кюркчиеви.
                  </p>
                  <a href="https://tesy.bg/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={shumenPytAvtotransport}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>Шумен Пътнически автотранспорт ООД</h2>
                  <p className={classes.summaryPartners}>
                    Дружеството е основано на 19.02.1992, приемник на
                    Автокомбинат Шумен, съществуващ от 1959 г. Регистрирано в
                    Търговския регистър на Шуменски окръжен съд с решение №
                    17/1992. Основния предмет на дейност е извършване на
                    обществен превоз на пътници в страната и чужбина; ремонт и
                    сервизно обслужване на автобуси, леки и тежкотоварни
                    автомобили; извършване на периодични технически прегледи на
                    пътни превозни средства...
                  </p>
                  <a href="https://www.shumenpat.com/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={ilchovHill}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>Великлуб Илчов баир</h2>
                  <p className={classes.summaryPartners}>
                    Велоклуб Илчов баир съществува от месец октомври, 2008 г.
                    Идеята е колоездачите от Шумен да се събират и организират
                    велопоходи, състезания или други мероприятия, свързани с
                    колоезденето. Клубът включва дисциплини като XC и любимото
                    място на хората, практикуващи Cross Country (XC) е
                    Шуменското плато. Младите колоездачи, каращи екстремната
                    дисциплина DH (downhill) също карат на Шуменското плато, но
                    те си избират свои трасета, които включват много трудни
                    спускания по технични и стръмни наклони...
                  </p>
                  <a href="https://ilchovbair.com/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={iRun}
                    className={classes.img}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>iRun</h2>
                  <p className={classes.summaryPartners}>
                    iRun.bg е платформа за спортни мероприятия от нов тип.
                    Нашата цел и амбиция е да популяризираме бягането, както и
                    други спортове, и да привлечем нови съмишленици, хора, които
                    искат да спортуват и да живеят по-здравословно. Ние
                    организираме бягания по различни трасета и дистанции, и
                    помагаме на наши партньори и спортни клубове да
                    популяризират дейността си. За нашата дейност сме
                    разработили уникална техническа система за отчитане на
                    резултатите, както и настоящия информационен уеб портал.
                    iRun.bg ста
                  </p>
                  <a href="https://www.irun.bg/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    className={classes.img}
                    src={marchela}
                    alt="Avatar"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <h2>Marchela OOD</h2>
                  <p className={classes.summaryPartners}>
                    Марчела ООД​ Марчела ООД е българска компания с над 30
                    години опит в търговията на едро с месо, месни и млечни
                    продукти. Основана през 1991 година в град Шумен, фирмата се
                    наложи като доверен партньор на магазини, ресторанти и
                    търговски обекти в цялата страна. Като официален дистрибутор
                    на различни фирми, ние предлагаме качествени продукти с
                    доказан произход, винаги свежи и на конкурентни цени. Нашата
                    мисия е да доставяме качество, сигурност и коректност –
                    всеки ден, до всяка точка на България.
                  </p>
                  <a href="https://marchelaltd.com/">
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
