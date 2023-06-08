import React, { useState } from "react";
// import { book, DataType, testData } from "../../mockdata";
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
  TBody,
  TableCell,
  RatingCell,
  TableContainer,
  BookCoverContainer,
  GuestRecomendations,
  GuestRecCell,
  BookCoverCell,
  BookTitleCell,
  EpisodeContainer,
  EpisodeDateSpan,
  EpisodeTitleSpan,
  ButtonContainer,
} from "./Table.styles";
import { alldata, book, episodeDateObj } from "../../alldata";
import paths, { pathGenerator } from "../../router/paths";
const data = alldata;
const convertToDateStr = (date: Date | null) => {
  if (!date) return "";
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const newDate = month + "/" + day + "/" + year;
  return newDate;
};
const Table = () => {
  const books = Object.keys(data);
  const [index, setIndex] = useState(0);
  const increment = 10;
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
            <GuestRecomendations scope="col">
              Recommendations
            </GuestRecomendations>
          </TableHead>
        </thead>
        <TBody>
          {books.slice(index, index + increment).map((title) => (
            <TableRows title={title} data={data[title]} />
          ))}
        </TBody>
      </TableElement>
      <ButtonContainer>
        <button
          onClick={() => {
            if (index > 0) {
              setIndex(index - increment);
            }
          }}
        >
          Last
        </button>
        <button
          onClick={() => {
            if (index < books.length - increment) {
              setIndex(index + increment);
            }
          }}
        >
          Next
        </button>
      </ButtonContainer>
    </TableContainer>
  );
};

export default Table;
interface RowProps {
  title: string;
  data: book;
}
const getImage = (
  image:
    | {
        smallThumbnail?: string | undefined;
        thumbnail?: string | undefined;
        small?: string | undefined;
        medium?: string | undefined;
        large?: string | undefined;
        extraLarge?: string | undefined;
      }
    | undefined
) => {
  if (image === undefined) {
    return undefined;
  }
  if (image.smallThumbnail) {
    return image.smallThumbnail;
  }
  if (image.thumbnail) {
    return image.thumbnail;
  }
  if (image.small) {
    return image.small;
  }
  if (image.medium) {
    return image.medium;
  }
  if (image.large) {
    return image.large;
  }
  if (image.extraLarge) {
    return image.extraLarge;
  }
  return undefined;
};
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
        <BookCoverCell>
          <BookCoverContainer
            to={data.id ? pathGenerator.bookpage(data.id) : ""}
          >
            <BookCover src={getImage(data.imageLinks)} />
          </BookCoverContainer>
        </BookCoverCell>
        <BookTitleCell scope="row">
          <span>{title}</span>
        </BookTitleCell>
        <AuthorCell>
          <span>{data.author}</span>
        </AuthorCell>
        <GuestRecCell>
          <span>{data.guestRecomendation.length}</span>
        </GuestRecCell>
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
      <td colSpan={6}>
        {data.map((title) => (
          <EpisodeContainer>
            <EpisodeDateSpan>
              {convertToDateStr(episodeDateObj[title]?.date)}
            </EpisodeDateSpan>
            <EpisodeTitleSpan>{title}</EpisodeTitleSpan>
          </EpisodeContainer>
        ))}
      </td>
    </HiddenRow>
  );
};
