import styled from "styled-components";

export const H1 = styled.h1`
  /* text-align: center; */
  margin: 0;
  /* padding-bottom: 10rem; */
`;
export const Relative = styled.div`
  position: relative;
`;
export const Flex = styled.div`
  display: flex;
`;
export const HorizontalCenter = styled(Flex)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 25rem;
`;
export const Container = styled.div`
  /* height: 100vh; */
  /* width: 100%; */
  background: ${(props) => props.theme.colors.background};
`;
interface ItemProps {
  size: number;
}
export const Item = styled.div<ItemProps>`
  color: white;
  font-size: 2rem;
  text-transform: capitalize;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CarouselContainerInner = styled(Flex)`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-left: -1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: center;
    /* margin-left: 1rem; */
  }
`;
export const CarouselContainer = styled.div`
  max-width: 50rem;
  position: relative;
`;

export const CarouselButton = styled("button")`
  position: absolute;
  cursor: pointer;
  top: 50%;
  z-index: 1;
  transition: transform 0.1s ease-in-out;
  background: white;
  border-radius: 15px;
  border: none;
  padding: 0.5rem;
`;
interface LeftButtonProps {
  hasItemsOnLeft: boolean;
}
interface RightButtonProps {
  hasItemsOnRight: boolean;
}
// Display buttons on hover
export const LeftCarouselButton = styled(CarouselButton)<LeftButtonProps>`
  left: 0;
  transform: translate(-100%, -50%);

  ${CarouselContainer}:hover & {
    transform: translate(0%, -50%);
  }
  visibility: ${({ hasItemsOnLeft }) => (hasItemsOnLeft ? `all` : `hidden`)};
`;
// Position the buttons to their respective sides
export const RightCarouselButton = styled(CarouselButton)<RightButtonProps>`
  right: 0;
  transform: translate(100%, -50%);

  ${CarouselContainer}:hover & {
    transform: translate(0%, -50%);
  }
  visibility: ${({ hasItemsOnRight }) => (hasItemsOnRight ? `all` : `hidden`)};
`;
