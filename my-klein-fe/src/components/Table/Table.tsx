import React, { useState } from "react";
import { book, DataType, testData } from "../../mockdata";
import {
  BookCover,
  DisplayRow,
  HiddenRow,
  TableHead,
  TableRow,
  TableElement,
  TableCaption,
  BookCoverCol,
  BookTitleCol,
  AuthorCol,
  RatingCol,
  AuthorCell,
  BookTitle,
  TBody,
  TableCell,
  RatingCell,
  TableContainer,
  BookCoverContainer,
  GuestRecomendations,
  GuestRecCell,
} from "./Table.styles";
const data = testData;
const convertToDateStr = (date: Date | null) => {
  if (!date) return "";
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const newDate = month + "/" + day + "/" + year;
  return newDate;
};
const Table = () => {
  const books = Object.keys(data.books);
  return (
    <TableContainer role="region" aria-labelledby="Caption1" tabIndex={0}>
      <TableElement>
        <TableCaption id="Caption1">Book Recomendations</TableCaption>
        <thead>
          <TableHead>
            <th scope="col"></th>
            <BookCoverCol scope="col">Book Cover</BookCoverCol>
            <BookTitleCol scope="col">Book Title</BookTitleCol>
            <AuthorCol scope="col">Author</AuthorCol>
            <RatingCol scope="col">Rating</RatingCol>
            <GuestRecomendations scope="col">
              Guest Recomendations
            </GuestRecomendations>
          </TableHead>
        </thead>
        <TBody>
          {books.slice(0, 40).map((title) => (
            <TableRows title={title} data={data.books[title]} />
          ))}
        </TBody>
      </TableElement>
    </TableContainer>
  );
};

export default Table;
interface RowProps {
  title: string;
  data: book;
}
const episodes = data.episodeDateObj;
const TableRows = ({ data, title }: RowProps) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <TableRow
        onClick={() => {
          setShowInfo(!showInfo);
        }}
        showInfo={showInfo}
      >
        <TableCell>
          <DisplayRow rotateToggle={showInfo}>+</DisplayRow>
        </TableCell>
        <TableCell>
          <BookCoverContainer>
            <BookCover src="data:image/jpeg;base64,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" />
          </BookCoverContainer>
        </TableCell>
        <BookTitle scope="row">
          <p>{title}</p>
        </BookTitle>
        <AuthorCell>
          <p>{data.author}</p>
        </AuthorCell>
        <RatingCell>
          <p>{data.rating ? data.rating : 5}</p>
        </RatingCell>
        <GuestRecCell>{data.guestRecomendation.length}</GuestRecCell>
      </TableRow>
      <HiddenRowElement showInfo={showInfo} data={data.episodeTitle} />
    </>
  );
};
interface HiddenRowElementProps {
  showInfo: boolean;
  data: string[];
}
export const HiddenRowElement = ({ showInfo, data }: HiddenRowElementProps) => {
  return (
    <HiddenRow showInfo={showInfo}>
      <td colSpan={5}>
        {data.map((title) => (
          <>
            <div>{title}</div>
            <div>{convertToDateStr(episodes[title]?.date)}</div>
          </>
        ))}
      </td>
    </HiddenRow>
  );
};
