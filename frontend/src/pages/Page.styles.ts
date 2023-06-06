import styled from "styled-components";
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 ${(props) => props.theme.spacing.m};
`;
