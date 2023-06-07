import { alldata, idTitlePairs } from "../../alldata";
import { pathGenerator } from "../../router/paths";
import { BookAuthor, BookCardContainer, BookTitle } from "./BookCard.style";

const BookCard = ({ id }: { id: string }) => {
  const bookTitle = idTitlePairs[id];
  const bookEntry = alldata[bookTitle];
  const thumbNail = bookEntry.imageLinks?.thumbnail;
  const author = bookEntry?.author;

  return (
    <BookCardContainer to={pathGenerator.bookpage(id)}>
      <img src={thumbNail} />
      <BookTitle>
        <b>{bookTitle}</b>
      </BookTitle>
      <BookAuthor>{author}</BookAuthor>
    </BookCardContainer>
  );
};
export default BookCard;
