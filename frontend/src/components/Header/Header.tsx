import { Container, Title } from "./Header.styles";
import Books from "../BookStack/BookStack";
import paths from "../../router/paths";
import { Nav, StyledLink } from "./Nav.styles";

const Header = () => {
  return (
    <>
      <Nav>
        <StyledLink to={paths.home}>Home</StyledLink>
        <StyledLink to={paths.randombook}>Random Book</StyledLink>
        <StyledLink to={paths.books}>Books</StyledLink>
        <StyledLink to={paths.allcategories}>Categories</StyledLink>
        <StyledLink to={paths.table}>Table</StyledLink>
      </Nav>
      <Container>
        <Books />
        <Title>The Ezra Klein Podject</Title>
      </Container>
    </>
  );
};

export default Header;
