import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
const CSS = css``;
const spinning = keyframes`
  from {
      transform: rotate(359deg);
  }
  to {
      transform: rotate(0deg);
  }

`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  padding: 1.25rem 2rem;
  border-radius: 5rem;
  font-size: 1.25rem;
  position: relative;
  /* border: 3px solid ${(props) => props.theme.colors.accent}; */
  /* margin: 1rem; */
  background-color: ${(props) => props.theme.colors.accent};
  :hover {
    border-color: ${(props) => props.theme.colors.ezraYellow};
    color: ${(props) => props.theme.colors.ezraYellow};
  }
`;
export const LinkWrapper = styled.div`
  /* position: relative; */
  background: linear-gradient(to right, red, purple);
  --angle: 0deg;
  background: conic-gradient(
    from var(--angle),
    ${(props) => props.theme.colors.accent} 0deg 90deg,
    ${(props) => props.theme.colors.ezraYellow} 90deg 180deg,
    ${(props) => props.theme.colors.ezraYellow} 180deg 270deg,
    ${(props) => props.theme.colors.ezraYellow} 270deg 360deg
  );
  padding: 3px;
  height: 1rem;
  height: fit-content;
  border-radius: 5rem;
  /* padding: 1.25rem 2rem; */
  margin: 2rem;
  display: grid;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  /* :hover {
    animation: ${spinning} 4s infinite linear;
  } */
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
    animation: rotate 4s linear infinite;
  }
`;
export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
