import React, { useState } from "react";
import useFetchBook from "./useFetchBook";
import styled from "styled-components";
import Categories from "../Categories/Categories";
import {
  Title,
  Authors,
  Description,
  BookContainer,
  BookDataContainer,
  PageCount,
  CoverInfo,
  PublishDate,
  Cover,
  Subtitle,
  CoverData,
  RatingContainer,
} from "./BookDisplay.styles";
const dateGenerator = (str: string) => {
  const date = new Date(str);
  return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
};
const BookDisplay = () => {
  const data = useFetchBook();
  const [failed, setFailed] = useState(false);
  console.log("bookdis", data);
  if (!data) {
    setTimeout(() => {
      setFailed(true);
    }, 5000);
    return (
      <BookContainer>
        <h2>
          {!failed
            ? "Loading..."
            : "It looks like we encountered an error. Try checking your internet."}
        </h2>
      </BookContainer>
    );
  }
  return (
    <BookContainer>
      <CoverInfo>
        <CoverData>
          <Title>
            {data.title} <br />
          </Title>
          <Subtitle>{data.subtitle}</Subtitle>
          <Authors>by {data.authors}</Authors>
        </CoverData>
        <Cover
          srcSet={`
              ${data.image.small} 300w, 
              ${data.image.medium} 575w,
              ${data.image.large} 615w,
              `}
          src={`${data.image.small}`}
          alt={`${data.title} Book Cover`}
        />
      </CoverInfo>
      <BookDataContainer>
        <PageCount>
          {data.pageCount}
          <br /> pages
        </PageCount>
        <RatingContainer>
          {data.averageRating} <Star size={1} />
          <br />
          {data.ratingsCount} reviews
        </RatingContainer>
        <PublishDate>
          Published <br />
          {dateGenerator(data.publishedDate)}
        </PublishDate>
      </BookDataContainer>
      <Description dangerouslySetInnerHTML={{ __html: data.description }} />
      <Categories list={data.categories} />
    </BookContainer>
  );
};

export default BookDisplay;
interface StarProp {
  rating: number;
}

const containerWidth = 250;
export const StarCover = styled.div`
  overflow: clip;
  display: flex;
  flex-wrap: nowrap;
`;
export const StarContainer = styled.div<StarProp>`
  overflow: hidden;
  width: ${(props) => (props.rating / 5) * 250}px;
  ${StarCover} {
    width: ${containerWidth}px;
  }
`;
export const Polygon = styled.polygon`
  fill: ${(props) => props.theme.colors.ezraYellow};
`;

const Star = ({ size = 1 }) => (
  <svg
    height={`${size}rem`}
    width={`${size}rem`}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 53.867 53.867"
    xmlSpace="preserve"
  >
    <Polygon
      points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
       10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
    />
  </svg>
);
