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
            <div className="title">
              <h1>The Bear</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>The bear</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  culpa, quaerat ipsam eius libero voluptatum, recusandae fugit
                  officiis facilis nisi voluptatem consectetur est quam nulla
                  maxime ea itaque alias ducimus amet sequi animi, minima
                </p>
              </div>
              <div className="genre">
                <span style={{ "--i": 1 }}>Drama</span>
                <span style={{ "--i": 2 }}>Commedy</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-2">
            <div className="title">
              <h1>Home Alone</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>Home alone</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  culpa, quaerat ipsam eius libero voluptatum, recusandae fugit
                  officiis facilis nisi voluptatem consectetur est quam nulla
                  maxime ea itaque alias ducimus amet sequi animi, minima
                  repudiandae autem consequuntur? Corrupti animi incidunt
                  adipisci nostrum sint soluta, hic dolor iure molestias odit
                  aspernatur!
                </p>
              </div>
              <div className="genre">
                <span style={{ "--i": 1 }}>Drama</span>
                <span style={{ "--i": 2 }}>Commedy</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-3">
            <div className="title">
              <h1>Rambo second blood</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>Rambo second blood</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  culpa, quaerat ipsam eius libero voluptatum, recusandae fugit
                  officiis facilis nisi voluptatem consectetur est quam nulla
                  maxime ea itaque alias ducimus amet sequi animi, minima
                  repudiandae autem consequuntur? Corrupti animi incidunt
                  adipisci nostrum sint soluta, hic dolor iure molestias odit
                  aspernatur!
                </p>
              </div>
              <div className="genre">
                <span style={{ "--i": 1 }}>Drama</span>
                <span style={{ "--i": 2 }}>Commedy</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-4">
            <div className="title">
              <h1>Die hard</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>Die hard</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  culpa, quaerat ipsam eius libero voluptatum, recusandae fugit
                  officiis facilis nisi voluptatem consectetur est quam nulla
                  maxime ea itaque alias ducimus amet sequi animi, minima
                  repudiandae autem consequuntur? Corrupti animi incidunt
                  adipisci nostrum sint soluta, hic dolor iure molestias odit
                  aspernatur!
                </p>
              </div>
              <div className="genre">
                <span style={{ "--i": 1 }}>Drama</span>
                <span style={{ "--i": 2 }}>Commedy</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-5">
            <div className="title">
              <h1>Flash</h1>
            </div>
            <div className="content">
              <div className="score">8.6</div>
              <div className="text">
                <h2>Flash</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  culpa, quaerat ipsam eius libero voluptatum, recusandae fugit
                  officiis facilis nisi voluptatem consectetur est quam nulla
                  maxime ea itaque alias ducimus amet sequi animi, minima
                  repudiandae autem consequuntur? Corrupti animi incidunt
                  adipisci nostrum sint soluta, hic dolor iure molestias odit
                  aspernatur!
                </p>
              </div>
              <div className="genre">
                <span style={{ "--i": 1 }}>Drama</span>
                <span style={{ "--i": 2 }}>Commedy</span>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}
