import React, { useEffect, useState } from "react";
import useFetchBook from "./useFetchBook";
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
  CoverData,
  RatingContainer,
  Polygon,
  LoadContainer,
} from "./BookDisplay.styles";
import { dateGenerator } from "./BookDisplay.functions";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { alldata } from "../../alldata";

const BookDisplay = () => {
  const data = useFetchBook();
  const [failed, setFailed] = useState(false);
  console.log("bookdis", data);
  useEffect(() => {
    if (data && failed) {
      setFailed(false);
    }
    return () => setFailed(false);
  }, [data, failed]);
  if (!data) {
    setTimeout(() => {
      setFailed(true);
    }, 5000);
    return (
      <LoadContainer>{!failed ? <LoadingScreen /> : <Failed />}</LoadContainer>
    );
  }
  console.log("data", alldata[data.title]);

  return (
    <BookContainer>
      <CoverInfo>
        <CoverData>
          <Title>
            {data.title} <br />
          </Title>
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
          {data.ratingsCount ? (
            <>
              {data.averageRating} <Star size={1} />
              <br />
              {data.ratingsCount} reviews
            </>
          ) : (
            <>
              No reviews <br /> yet
            </>
          )}
        </RatingContainer>
        <PublishDate>
          Published <br />
          {dateGenerator(data.publishedDate)}
        </PublishDate>
      </BookDataContainer>
      <Description dangerouslySetInnerHTML={{ __html: data.description }} />
      <h3>
        Recomended by:
        {alldata[data.title].guestRecomendation.join(", ")}
      </h3>
      {data.categories && <Categories list={data.categories} />}
    </BookContainer>
  );
};

export default BookDisplay;

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
const Failed = () => (
  <h2>It looks like we encountered an error. Try checking your internet.</h2>
);
