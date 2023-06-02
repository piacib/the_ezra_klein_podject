import styled, { css } from "styled-components";
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
export const Authors = styled.h3``;
export const AverageRating = styled.div``;
export const RatingsCount = styled.div``;
export const Description = styled.div`
  font-size: 1.2rem;
`;
export const BookContainer = styled.div`
  padding: ${(props) => props.theme.spacing.xs};
  margin: auto;
  max-width: 100rem;
`;
export const LoadContainer = styled.div`
  height: 100vh;
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
  --border: 3px solid ${(props) => props.theme.colors.ezraYellowOpacity(0.45)};
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
export const RatingContainer = styled(BookDataChild)``;
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
  height: 305.234px;
  background: ${(props) => props.theme.colors.accent};
  align-self: center;
  @media ${devices.mobileL} {
    align-self: auto;
    width: 250px;
    height: 381.547px;
  }
  @media ${devices.tablet} {
    width: 400px;
    height: 610px;
  }
`;
export const Subtitle = styled.h2`
  max-width: 40ch;
`;
export const CoverData = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const containerWidth = 250;
export const StarCover = styled.div`
  overflow: clip;
  display: flex;
  flex-wrap: nowrap;
`;
interface StarProp {
  rating: number;
}

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
