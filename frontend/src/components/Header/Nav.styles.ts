import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { devices } from "../../styles/devices";

const onHoverSlide = css`
  background-image: linear-gradient(
    to right,
    skyblue,
    skyblue 50%,
    ${(props) => props.theme.colors.accent} 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  :after {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: aliceblue;
  }
  :before {
    content: "";
    background: ${(props) => props.theme.colors.accent};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  :hover {
    background-position: 0;
  }

  :hover::before {
    width: 100%;
  }
`;
export const StyledLink = styled(Link)`
  font-size: 0.9rem;
  margin: 0 ${(props) => props.theme.spacing.xs};
  ${onHoverSlide}
  @media ${devices.mobileL} {
    font-size: 1.1rem;
  }
  @media ${devices.tablet} {
    font-size: 1.3rem;
  }
  @media ${devices.laptop} {
    font-size: 1.5rem;
  }
`;
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.ezraYellow};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${(props) => props.theme.spacing.xs} 0;
`;
