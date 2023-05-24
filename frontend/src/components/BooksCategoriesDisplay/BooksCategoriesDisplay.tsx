import styled from "styled-components";
import BookCarousel from "../BookCarousel/BookCarousel";
import { useEffect } from "react";
import Catagories from "../Categories/Catagories";
const categories = [
  "Fiction / Fantasy / Historical",
  "Fiction / Fantasy / Epic",
  "Fiction / Literary",
  "Fiction / Alternative History",
  "Fiction / Fantasy / Dark Fantasy",
  "Fiction / Fairy Tales, Folk Tales, Legends & Mythology",
];
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
const BooksCatagoriesDisplay = () => {
  return (
    <>
      <BookCarousel title={"Popular"} books={idList} />
      <BookCarousel title={"Most Recent"} books={idList} />
      <Catagories list={categories} />
    </>
  );
};

export default BooksCatagoriesDisplay;
