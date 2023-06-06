import styled from "styled-components";
import BookCarousel from "../BookCarousel/BookCarousel";
import { useEffect } from "react";
import Categories from "../Categories/Categories";
import { mostPopular, recommendedId } from "../../alldata";
const categories = [
  "Fiction / Fantasy / Historical",
  "Fiction / Fantasy / Epic",
  "Fiction / Literary",
  "Fiction / Alternative History",
  "Fiction / Fantasy / Dark Fantasy",
  "Fiction / Fairy Tales, Folk Tales, Legends & Mythology",
];
const idList = [
  "FxkeEAAAQBAJ",
  "SZjFDwAAQBAJ",
  "jGboBAAAQBAJ",
  "PluNEAAAQBAJ",
  "OkECDAAAQBAJ",
  "29uwzgEACAAJ",
  "05Cj67qkoaoC",
  "2G2TlJOhGI8C",
  "JxpdEAAAQBAJ",
  "ZWRQEAAAQBAJ",
];
const BooksCategoriesDisplay = () => {
  const mostPopularIds = mostPopular();
  const recomended = recommendedId();
  return (
    <>
      <BookCarousel title={"Popular"} books={mostPopularIds} />
      <BookCarousel title={"Recommended"} books={recomended} />
      <Categories list={categories} />
    </>
  );
};

export default BooksCategoriesDisplay;
