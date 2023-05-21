import { Container, Title } from "./Header.styles";
import Books from "../BookStack/BookStack";
import Paths from "../../router/paths";
import { Nav, StyledLink } from "./Nav.styles";

const Header = () => {
  return (
    <>
      <Nav>
        <StyledLink to={Paths.home}>Home</StyledLink>
        <StyledLink to={Paths.randombook}>Random Book</StyledLink>
        <StyledLink to={Paths.books}>Books</StyledLink>
      </Nav>
      <Container>
        <Books />
        <Title>The Ezra Klein Podject</Title>
      </Container>
    </>
  );
};

export default Header;
