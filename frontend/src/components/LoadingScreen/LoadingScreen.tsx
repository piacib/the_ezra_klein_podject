import LoadingSVG from "./loading.svg";
import { LoadingIcon, Container } from "./LoadingScreen.styles";
export const LoadingScreen = () => {
  return (
    <Container>
      <LoadingIcon src={LoadingSVG} alt="Loading" />;
    </Container>
  );
};

export default LoadingScreen;
