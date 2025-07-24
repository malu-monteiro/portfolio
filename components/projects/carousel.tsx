import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
  slidesPerView?: number;
}

export function Carousel({
  items,
  className = "",
  slidesPerView = 3,
}: CarouselProps) {
  const shouldLoop = items.length <= 6;
  const displayItems = shouldLoop ? [...items, ...items] : items;

  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      slidesPerView={slidesPerView}
      initialSlide={shouldLoop ? items.length : 0}
      centeredSlides={true}
      loop={true}
      loopAdditionalSlides={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      spaceBetween={30}
      watchSlidesProgress={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          loopAdditionalSlides: 2,
        },
        768: {
          slidesPerView: 2,
          loopAdditionalSlides: 2,
        },
        1024: {
          slidesPerView: slidesPerView,
          loopAdditionalSlides: 2,
        },
      }}
      className={`portfolio__wrapper ${className}`}
    >
      {displayItems.map((item, index) => (
        <SwiperSlide key={`slide-${index}`}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
