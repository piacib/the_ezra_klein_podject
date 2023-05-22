import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryLink = styled(Link)`
  text-decoration: none;
  padding: 1.25rem 2rem;
  border-radius: 3rem;
  font-size: 1.5rem;
  border: 3px solid ${(props) => props.theme.colors.accent};
  margin: 1rem;
  :hover {
    border: 2px solid ${(props) => props.theme.colors.ezraYellow};
    color: ${(props) => props.theme.colors.ezraYellow};
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

export const CatagoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
