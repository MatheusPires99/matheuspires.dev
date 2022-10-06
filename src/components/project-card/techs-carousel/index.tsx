import { ReactNode, useRef } from "react";

import { CaretLeft, CaretRight } from "phosphor-react";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { IconButton } from "@/components/icon-button";

import { TechsCarouselContainer, CarouselNavigation } from "./styles";

type TechsCarouselProps = {
  children: ReactNode;
};

export const TechsCarousel = ({ children }: TechsCarouselProps) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <TechsCarouselContainer>
      <CarouselNavigation ref={navigationPrevRef} direction="left">
        <IconButton aria-label="Previous" size="sm">
          <CaretLeft />
        </IconButton>
      </CarouselNavigation>

      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;

          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={4}
        slidesPerView="auto"
        mousewheel
        freeMode
        modules={[Navigation, FreeMode]}
      >
        {children}
      </Swiper>

      <CarouselNavigation ref={navigationNextRef} direction="right">
        <IconButton aria-label="Next" size="sm">
          <CaretRight />
        </IconButton>
      </CarouselNavigation>
    </TechsCarouselContainer>
  );
};

export const TechSlider = SwiperSlide;
