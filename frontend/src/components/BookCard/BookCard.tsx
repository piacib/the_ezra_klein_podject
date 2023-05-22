import paths from "../../router/paths";
import { getBookById } from "../BookDisplay/BookDisplay.functions";
import { BookAuthor, BookCardContainer, BookTitle } from "./BookCard.style";

const BookCard = ({ id }: { id: string }) => {
  const book = getBookById(id);
  const thumbNail = book.imageLinks.thumbnail;
  const title = book.title;
  const author = book.authors;

  return (
    <BookCardContainer to={paths.bookpageGenerator(id)}>
      <img src={thumbNail} />
      <BookTitle>
        <b>{title}</b>
      </BookTitle>
      <BookAuthor>{author}</BookAuthor>
    </BookCardContainer>
  );
};
export default BookCard;
