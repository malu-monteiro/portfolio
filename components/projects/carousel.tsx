import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
  const shouldLoop = items.length > 3;

  return (
    <Swiper
      modules={[EffectCoverflow, Pagination]}
      effect="coverflow"
      grabCursor={true}
      slidesPerView={slidesPerView}
      initialSlide={0}
      centeredSlides={true}
      loop={shouldLoop}
      {...(shouldLoop && { loopAdditionalSlides: 2 })}
      pagination={{
        clickable: true,
        dynamicBullets: items.length > 5,
      }}
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
          ...(shouldLoop && { loopAdditionalSlides: 1 }),
        },
        768: {
          slidesPerView: 2,
          ...(shouldLoop && { loopAdditionalSlides: 1 }),
        },
        1024: {
          slidesPerView: slidesPerView,
          ...(shouldLoop && { loopAdditionalSlides: 2 }),
        },
      }}
      className={`portfolio__wrapper ${className}`}
    >
      {items.map((item, index) => (
        <SwiperSlide key={`slide-${index}`}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
