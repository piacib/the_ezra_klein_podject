import styled from "styled-components";
import BookCarousel from "../BookCarousel/BookCarousel";
import { useEffect } from "react";
import Categories from "../Categories/Categories";
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
const BooksCategoriesDisplay = () => {
  return (
    <>
      <BookCarousel title={"Popular"} books={idList} />
      <BookCarousel title={"Most Recent"} books={idList} />
      <Categories list={categories} />
    </>
  );
};

export default BooksCategoriesDisplay;
