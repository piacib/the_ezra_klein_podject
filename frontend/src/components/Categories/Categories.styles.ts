import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryLink = styled(Link)`
  text-decoration: none;
  padding: 1.25rem 2rem;
  border-radius: 5rem;
  max-width: 9rem;
  font-size: 1.25rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.ezraYellow};
  :hover {
    border-color: ${(props) => props.theme.colors.ezraYellow};
  }
`;
export const LinkWrapper = styled.div`
  /* position: relative; */
  background: linear-gradient(to right, red, purple);
  --angle: 0deg;
  background: ${(props) => props.theme.colors.ezraYellow};
  padding: 3px;
  height: 1rem;
  height: fit-content;
  border-radius: 5rem;
  /* padding: 1.25rem 2rem; */
  margin: 2rem;
  display: grid;
  background-origin: border-box;
  background-clip: padding-box, border-box;

  @supports (background: paint(houdini)) {
    @property --angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes rotate {
      to {
        --angle: 360deg;
      }
    }
    :hover {
      background: conic-gradient(
        from var(--angle),
        ${(props) => props.theme.colors.accent} 0deg 90deg,
        ${(props) => props.theme.colors.ezraYellow} 90deg 180deg,
        ${(props) => props.theme.colors.ezraYellow} 180deg 270deg,
        ${(props) => props.theme.colors.ezraYellow} 270deg 360deg
      );
      animation: rotate 4s linear infinite;
    }
  }
`;
export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BubbleLink = styled(Link)`
  /* cap the width */
  max-width: 500px;
  margin: 2rem;
  text-align: center;
  font-family: "Dekko", cursive;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0.5rem 1.25rem;
  box-shadow: -8px 7px 0px 0px ${(props) => props.theme.colors.accent};
  letter-spacing: 0.2rem;
  border: 0.4rem solid ${(props) => props.theme.colors.accent};

  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(25)" opacity="0.8" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23d68810"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    ${(props) => props.theme.colors.ezraYellow};
  background-size: 13px, 100%;
  font-weight: 700;
`;
