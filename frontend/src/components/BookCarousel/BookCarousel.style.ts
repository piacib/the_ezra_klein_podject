import styled from "styled-components";

export const H1 = styled.h1`
  /* text-align: center; */
  margin: 0;
  color: ${(props) => props.theme.colors.accent};
  /* padding-bottom: 10rem; */
`;
export const Flex = styled.div`
  display: flex;
`;
export const HorizontalCenter = styled(Flex)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
export const Container = styled.div`
  /* height: 100vh; */
  /* width: 100%; */
  background: ${(props) => props.theme.colors.background};
`;
