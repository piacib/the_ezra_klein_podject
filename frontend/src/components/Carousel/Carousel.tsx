import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CarouselContainer,
  CarouselContainerInner,
  Container,
  H1,
  HorizontalCenter,
  LeftCarouselButton,
  RightCarouselButton,
} from "./Carousel.style";
import { usePosition } from "../../hooks/usePosition/usePosition";

const Carousel = ({ children }: { children: JSX.Element[] }) => {
  const ref = useRef(null);
  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);
  return (
    <CarouselContainer role="region" aria-label="Colors carousel">
      <LeftCarouselButton hasItemsOnLeft={hasItemsOnLeft} onClick={scrollLeft}>
        <ArrowLeft />
      </LeftCarouselButton>
      <CarouselContainerInner ref={ref}>{children}</CarouselContainerInner>

      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        onClick={scrollRight}
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouselContainer>
  );
};
export default Carousel;
// ArrowLeft
export const ArrowLeft = ({ size = 30, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H6M12 5l-7 7 7 7" />
  </svg>
);

// ArrowRight
export const ArrowRight = ({ size = 30, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);
