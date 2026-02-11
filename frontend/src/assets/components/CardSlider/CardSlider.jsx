import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

export default function CardSlider() {
  return (
    <main>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true}
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide={true}
          pagination={{ el: ".swipe-pagination", clickable: true }}
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
              <div className="content">
                <div>8.6</div>
                <div className="text">
                  <h2>THe bear</h2>
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
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-2">
            <div className="title">
              <h1>The Hapeto</h1>
              <div className="content">
                <div>8.1</div>
                <div className="text">
                  <h2>THe Hapeto</h2>
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
                  <span style={{ "--i": 1 }}>Action</span>
                  <span style={{ "--i": 2 }}>Commedy</span>
                  <span style={{ "--i": 3 }}>Scient Fiction</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-3">
            <div className="title">
              <h1>Rambo</h1>
              <div className="content">
                <div>43.2</div>
                <div className="text">
                  <h2>Rambo</h2>
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
                  <span style={{ "--i": 1 }}>Horor</span>
                  <span style={{ "--i": 2 }}>Commedy</span>
                  <span style={{ "--i": 3 }}>Action</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-4">
            <div className="title">
              <h1>Die Hard</h1>
              <div className="content">
                <div>9.6</div>
                <div className="text">
                  <h2>Die Hard</h2>
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
                  <span style={{ "--i": 1 }}>Action</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-5">
            <div className="title">
              <h1>Home Alone</h1>
              <div className="content">
                <div>10.1</div>
                <div className="text">
                  <h2>Home Alone</h2>
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
                  <span style={{ "--i": 1 }}>Commedy</span>
                  <span style={{ "--i": 2 }}>Commedy</span>
                  <span style={{ "--i": 3 }}>Commedy</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </main>
  );
}
