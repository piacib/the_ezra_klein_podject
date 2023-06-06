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
  console.log(category);
  Object.entries(alldata).forEach(([title, obj]) => {
    if (obj.categories) {
      obj.categories.every((x) => {
        if (x.includes(category)) {
          if (obj.id) {
            list.push(obj.id);
            return false;
          }
          return true;
        }
      });
    }
  });
  return list;
};
const CategoryDisplay = () => {
  const { id } = useParams();
  const books = booksByCategory(id);
  console.log(books);
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

  // return (
  //   <div>
  //     <h1>No books in {id} found</h1>
  //   </div>
  // );
};

export default CategoryDisplay;
