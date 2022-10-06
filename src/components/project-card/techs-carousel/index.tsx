import { ReactNode, useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import { CaretLeft, CaretRight } from "phosphor-react";

import { IconButton } from "@/components/icon-button";

import { TechsCarouselContainer, CarouselNavigation } from "./styles";

type TechsCarouselProps = {
  children: ReactNode;
};

export const TechsCarousel = ({ children }: TechsCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 8,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <TechsCarouselContainer>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>

      {loaded && instanceRef.current && (
        <>
          <CarouselNavigation direction="left" isDisabled={currentSlide === 0}>
            <IconButton
              size="sm"
              onClick={(e) =>
                // @ts-ignore
                e.stopPropagation() || instanceRef.current?.prev()
              }
              aria-label="Previous"
            >
              <CaretLeft />
            </IconButton>
          </CarouselNavigation>

          <CarouselNavigation
            direction="right"
            isDisabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <IconButton
              size="sm"
              onClick={(e) =>
                // @ts-ignore
                e.stopPropagation() || instanceRef.current?.next()
              }
              aria-label="Next"
            >
              <CaretRight />
            </IconButton>
          </CarouselNavigation>
        </>
      )}
    </TechsCarouselContainer>
  );
};

type TechsCarouselSliderProps = {
  children: ReactNode;
};

export const TechsCarouselSlider = ({ children }: TechsCarouselSliderProps) => {
  return (
    <div
      className="keen-slider__slide"
      style={{ minWidth: "fit-content", maxWidth: "fit-content" }}
    >
      {children}
    </div>
  );
};
