"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home5Partnerships = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1500,
      spaceBetween: 30,
      grabCursor: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="partnership-area mb-120" id="partnership-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-70 d-flex flex-wrap gap-3 align-items-end justify-content-between">
              <div
                className="section-title5 wow animate fadeInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h2>
                  Our Clients{" "}
                  <span>Partnering for Mutual Success &amp; Assurance</span>
                </h2>
              </div>
              <div
                className="total-partner wow animate fadeInRight"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <Link href="/about-us">
                  80+ Global Clients
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper partnership-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>AI</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/reacti-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/reacti-black.png"
                          alt=""
                        />
                      </div>
                      <p>Chrome Extension</p>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>Blockchain</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/flexbot-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/flexbot-black.png"
                          alt=""
                        />
                      </div>
                      <p>Crypto Trading BOT</p>
                    </div>
                  </SwiperSlide> */}
                  <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>Gaming</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/hypermove-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/hypermove-black.png"
                          alt=""
                        />
                      </div>
                      <p>Play 2 Earn Game</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>Headless CMS</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/montage-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/montage-black.png"
                          alt=""
                        />
                      </div>
                      <p>Stock Images Platform</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>Gaming</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/Game-Terminal-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/Game-Terminal-black.png"
                          alt=""
                        />
                      </div>
                      <p>Web3 Games Platform</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>Web Application</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/hobit-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/hobit-black.png"
                          alt=""
                        />
                      </div>
                      <p>Fitness Platform</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>AI Application</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/cyberlevels-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/cyberlevels-black.png"
                          alt=""
                        />
                      </div>
                      <p>Job Board</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>Ecommerce</span>
                      <div className="partner-logos">
                        <img
                          className="white"
                          src="/assets/img/home5/chocobee-white.png"
                          alt=""
                        />
                        <img
                          className="black"
                          src="/assets/img/home5/chocobee-black.png"
                          alt=""
                        />
                      </div>
                      <p>Custmoized Cakes</p>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5Partnerships;
