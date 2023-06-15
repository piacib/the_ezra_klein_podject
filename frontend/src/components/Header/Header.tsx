import { Container, Title } from "./Header.styles";
import Books from "../BookStack/BookStack";
import paths, { pathGenerator } from "../../router/paths";
import { Nav, StyledLink } from "./Nav.styles";
import { useReducer, useRef, useState } from "react";

const Header = () => {
  const [randomBook, updateBook] = useReducer(
    () => pathGenerator.randombook(),
    pathGenerator.randombook()
  );
  return (
    <>
      <Nav>
        <StyledLink to={paths.home}>Home</StyledLink>
        <StyledLink onClick={updateBook} to={randomBook}>
          Random Book
        </StyledLink>
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
