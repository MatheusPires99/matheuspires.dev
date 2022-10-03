import { useRef } from "react";

import { CaretLeft, CaretRight, FileTs } from "phosphor-react";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Chip } from "@/components/chip";
import { IconButton } from "@/components/icon-button";
import { Link } from "@/components/link";

import { TechsSliderContainer, SliderNavigation } from "./styles";

export const TechsSlider = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <TechsSliderContainer>
      <SliderNavigation ref={navigationPrevRef} direction="left">
        <IconButton aria-label="Previous" size="sm">
          <CaretLeft />
        </IconButton>
      </SliderNavigation>

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
        }}
        spaceBetween={4}
        slidesPerView="auto"
        mousewheel
        freeMode
        modules={[Navigation, FreeMode]}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <Link href="">
            <Chip highlightColor="green">
              <FileTs />
              TypeScript
            </Chip>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Link href="">
            <Chip highlightColor="green">
              <FileTs />
              React
            </Chip>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Link href="">
            <Chip highlightColor="green">
              <FileTs />
              Next.js
            </Chip>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <Link href="">
            <Chip highlightColor="green">
              <FileTs />
              Styled Components
            </Chip>
          </Link>
        </SwiperSlide>
      </Swiper>

      <SliderNavigation ref={navigationNextRef} direction="right">
        <IconButton aria-label="Next" size="sm">
          <CaretRight />
        </IconButton>
      </SliderNavigation>
    </TechsSliderContainer>
  );
};
