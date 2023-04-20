import styled from "styled-components";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.xs} 0;
  padding-bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    margin: 0;
    text-align: end;
    padding-right: ${(props) => props.theme.spacing.xs};
    color: ${(props) => props.theme.colors.accent};
  }
  border-bottom: 1rem solid ${(props) => props.theme.colors.accent};
  @media ${devices.mobileL} {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media ${devices.tablet} {
    h1 {
      font-size: 3rem;
    }
  }
  @media ${devices.laptop} {
    h1 {
      font-size: 4rem;
    }
  }
`;

