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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: "auto",
      spacing: 8,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <TechsCarouselContainer>
      <CarouselNavigation direction="left" isDisabled={currentSlide === 0}>
        <IconButton
          aria-label="Previous"
          size="sm"
          onClick={(e) =>
            e.stopPropagation
              ? e.stopPropagation()
              : instanceRef.current?.prev()
          }
        >
          <CaretLeft />
        </IconButton>
      </CarouselNavigation>

      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>

      <CarouselNavigation
        direction="right"
        isDisabled={
          currentSlide === instanceRef.current?.track.details.slides.length! - 1
        }
      >
        <IconButton
          aria-label="Next"
          size="sm"
          onClick={(e) =>
            e.stopPropagation
              ? e.stopPropagation()
              : instanceRef.current?.next()
          }
        >
          <CaretRight />
        </IconButton>
      </CarouselNavigation>
    </TechsCarouselContainer>
  );
};

type TechSliderProps = {
  children: ReactNode;
};

export const TechSlider = ({ children }: TechSliderProps) => {
  return (
    <div className="keen-slider__slide" style={{ minWidth: "fit-content" }}>
      {children}
    </div>
  );
};
