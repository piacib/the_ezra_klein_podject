import React from "react";
import { useParams } from "react-router-dom";
import { alldata } from "../../alldata";
import BookCard from "../BookCard/BookCard";
import { BooksContainer, CategoryHeader } from "./CategoryDisplay.styles";
import { Title } from "../Header/Header.styles";

const booksByCategory = (category: string | undefined) => {
  const list: string[] = [];
  if (!category) {
    return list;
  }
  const entries = Object.values(alldata);
  entries.forEach((x) => {
    if (x.categories) {
      const results = x.categories.filter((cat) =>
        cat.includes(category)
      ).length;
      if (results && x.id) {
        list.push(x.id);
      }
    }
  });

  return list;
};
const CategoryDisplay = () => {
  const { id } = useParams();
  const books = booksByCategory(id);
  return (
    <>
      <CategoryHeader>{id}</CategoryHeader>
      <BooksContainer>
        {books.map((id) => (
          <BookCard id={id} />
        ))}
      </BooksContainer>
    </>
  );
};

export default CategoryDisplay;
