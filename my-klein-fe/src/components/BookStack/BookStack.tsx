import {
  BookContainer,
  Book1,
  Ribbon,
  BookCut,
  Book2,
  Book3,
  Ribbon3,
  Book4,
  Book5,
  Book6,
  Ribbon6,
  Book7,
} from "./Books.styles";
const ribbon3Color = "#a4d5bd";
const Books = () => (
  <BookContainer>
    <Book1>
      <Ribbon />
      <BookCut side="right" />
    </Book1>
    <Book2 />
    <Book3>
      <Ribbon3 ribbonColor={ribbon3Color} />
      <BookCut side="left" />
    </Book3>
    <Book4/>
    <Book5 />
    <Book6>
      <Ribbon6 ribbonColor={ribbon3Color} />
      <BookCut side="left" />
    </Book6>
    <Book7/>
  </BookContainer>
);
export default Books;
