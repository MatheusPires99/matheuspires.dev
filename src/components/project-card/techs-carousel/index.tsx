import { ReactNode } from "react";

import SwiperCore, { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { TechsCarouselContainer } from "./styles";

type TechsCarouselProps = {
  children: ReactNode;
};

SwiperCore.use([FreeMode]);

export const TechsCarousel = ({ children }: TechsCarouselProps) => {
  return (
    <TechsCarouselContainer>
      <Swiper spaceBetween={8} slidesPerView="auto" freeMode>
        {children}
      </Swiper>
    </TechsCarouselContainer>
  );
};

export const TechsCarouselSlider = SwiperSlide;
