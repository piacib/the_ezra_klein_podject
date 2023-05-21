import styled from "styled-components";
import BookCarousel from "../BookCarousel/BookCarousel";

const idList = [
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
  "ZWRQEAAAQBAJ",
];
const BooksDisplay = () => {
  return (
    <>
      <BookCarousel title={"Popular"} books={idList} />
      <BookCarousel title={"Most Recent"} books={idList} />
    </>
  );
};

export default BooksDisplay;
