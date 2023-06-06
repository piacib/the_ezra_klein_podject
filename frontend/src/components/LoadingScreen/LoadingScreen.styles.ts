import styled, { keyframes } from "styled-components";
const spinning = keyframes`
    from {
        transform: rotate(359deg);
    }
    to {
        transform: rotate(0deg);
    }
  
  `;
export const LoadingIcon = styled.img`
  animation: ${spinning} 4s infinite linear;
  height: 9rem;
  width: 9rem;
  margin: auto;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;