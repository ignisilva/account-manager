import Swiper from "swiper";

class SwiperRunner {
  constructor() {
    setTimeout(this.swiperStart, 0);
  }

  swiperStart() {
    new Swiper(".history__saving", {
      slidesPerView: "auto",
      spaceBetween: 16,
    });
  }
}

new SwiperRunner();
