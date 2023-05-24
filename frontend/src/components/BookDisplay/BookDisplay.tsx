import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchBook from "./useFetchBook";
import styled, { css } from "styled-components";
import Catagories from "../Categories/Catagories";
import { devices } from "../../styles/devices";
const FlexRow = css`
  display: flex;
  flex-direction: row;
`;
const FlexRowCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FlexCol = css`
  display: flex;
  flex-direction: column;
`;
const FlexColCenter = css`
  ${FlexCol}
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  max-width: 40ch;
  /* font-size: 2rem; */
`;
export const Authors = styled.p``;
export const AverageRating = styled.div``;
export const RatingsCount = styled.div``;
export const Description = styled.div`
  font-size: 1.2rem;
`;
export const BookContainer = styled.div`
  padding: ${(props) => props.theme.spacing.xs};
  display: grid;
`;
export const BookDataChild = styled.p`
  padding: ${(props) => props.theme.spacing.xs};
  font-size: 1.25rem;
  width: fit-content;
  margin: 0;
  @media ${devices.mobileM} {
    font-size: 1.5rem;
  }
`;
export const BookDataContainer = styled.div`
  --border: 3px solid ${(props) => props.theme.colors.accent};
  text-align: center;
  margin: ${(props) => props.theme.spacing.xs};

  ${FlexColCenter}
  ${BookDataChild}:nth-child(2) {
    border-top: var(--border);
    border-bottom: var(--border);
    border-left: none;
    border-right: none;
  }
  @media ${devices.mobileM} {
    ${FlexRowCenter} /* width: 80%; */
    ${BookDataChild}:nth-child(2) {
      border-left: var(--border);
      border-right: var(--border);
      border-top: none;
      border-bottom: none;
    }
  }
`;
export const PageCount = styled(BookDataChild)``;
const RatingContainer = styled(BookDataChild)``;
export const CoverInfo = styled.div`
  ${FlexCol}
  align-items: center;
  justify-content: space-between;
  @media ${devices.mobileL} {
    ${FlexRow}
  }
`;
export const PublishDate = styled(BookDataChild)``;

export const Cover = styled.img`
  width: 200px;
  align-self: center;
  @media ${devices.mobileL} {
    align-self: auto;
    width: 250px;
  }
  @media ${devices.tablet} {
    width: 400px;
  }
`;
export const Subtitle = styled.h2`
  max-width: 40ch;
`;
export const CoverData = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;
const dateGenerator = (str: string) => {
  const date = new Date(str);
  return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
};
const BookDisplay = () => {
  const data = useFetchBook();
  console.log("bookdis", data);
  return (
    <BookContainer>
      {data && (
        <>
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
              alt="Elva dressed as a fairy"
            />
          </CoverInfo>
          <BookDataContainer>
            <PageCount>
              {data.pageCount}
              <br /> pages
            </PageCount>
            <RatingContainer>
              3.5 <Star size="1rem" />
              <br />
              18 reviews
            </RatingContainer>
            <PublishDate>
              Published <br />
              {dateGenerator(data.publishedDate)}
            </PublishDate>
          </BookDataContainer>
          <Description dangerouslySetInnerHTML={{ __html: data.description }} />
          <Catagories list={data.categories} />
        </>
      )}
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

export const StarComponent = ({ rating = 5 }) => {
  const size = `${containerWidth / 5}px`;
  return (
    <StarContainer rating={rating}>
      <StarCover>
        {[1, 2, 3, 4, 5].map((x) => (
          <svg
            height={size}
            width={size}
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
        ))}
      </StarCover>
    </StarContainer>
  );
};
const Star = ({ size }: { size: string }) => (
  <svg
    height={size}
    width={size}
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
