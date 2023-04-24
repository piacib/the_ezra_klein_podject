import styled, { css } from "styled-components";
import { devices, sizesRem } from "../../styles/devices";

export const TableElement = styled.table`
  margin-top: ${(props) => props.theme.spacing.l};
  border-collapse: collapse;
  max-width: 70rem;
  color: ${(props) => props.theme.colors.accent};
  border: 2px solid ${(props) => props.theme.colors.ezraYellow};
  padding: 2rem;
`;
export const TableCaption = styled.caption`
  font-size: 1.5rem;
  @media ${devices.mobileL} {
    font-size: 2.5rem;
  }
  @media ${devices.tablet} {
    font-size: 3rem;
  }
`;

export const TableHead = styled.tr`
  background-color: ${(props) => props.theme.colors.ezraYellow};
`;

const active = css`
  max-height: 100px;
  padding: 10px 10px;
  transition: height 0.6s, padding 0.6s;
`;
const notActive = css`
  max-height: 0;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
`;
export const HiddenRow = styled.tr<Props>`
  max-height: 0;
  overflow-y: hidden;
  transition: height 0.6s;
  td {
    border-bottom: ${(props) => (props.showInfo ? "2px solid black" : "none")};
  }
  * {
    ${(props) => (props.showInfo ? active : notActive)}
  }
`;
export const TableRow = styled.tr<Props>`
  pointer-events: cursor;
`;
export const TBody = styled.tbody`
  ${TableRow}:nth-of-type(4n-1) {
    background-color: aliceblue;
  }
  ${HiddenRow}:nth-of-type(4n) {
    background-color: aliceblue;
  }
`;
interface Props {
  showInfo: boolean;
}

interface RotateProps {
  rotateToggle: boolean;
}
export const DisplayRow = styled.div<RotateProps>`
  transition: rotate 0.25s;
  cursor: pointer;
  text-align: center;
  rotate: ${(props) => (props.rotateToggle ? "90deg" : "0deg")};
`;
export const TableCol = styled.th`
  text-align: start;
  width: fit-content;
  vertical-align: bottom;
`;
export const BookCoverCol = styled(TableCol)`
  width: 6rem;
`;
export const BookTitleCol = styled(TableCol)``;
export const AuthorCol = styled(TableCol)``;
export const RatingCol = styled(TableCol)``;

export const TableCell = styled.td`
  text-align: start;
  width: fit-content;
`;
export const AuthorCell = styled(TableCell)`
  @media ${devices.tablet} {
    max-width: 12rem;
  }
`;
export const BookTitleCell = styled(TableCell)`
  max-width: 15rem;
`;
export const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const EpisodeDateSpan = styled.span`
  display: block;
  width: 12ch;
  margin: 0;
`;
export const EpisodeTitleSpan = styled.span``;

export const BookCover = styled.img`
  height: 5rem;
  aspect-ratio: 0.6;
  margin: 0 auto;
  border: 1px solid black;
`;
export const BookCoverContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;
export const RatingCell = styled(TableCell)``;
export const BookCoverCell = styled(TableCell)``;
export const GuestRecomendations = styled(TableCol)``;
export const GuestRecCell = styled(TableCell)``;

const tabletAndBelowTableDisplayMediaQ = css`
  @media all and (max-width: ${sizesRem.tablet}) {
    ${TableElement} {
      display: block;
      padding: 0;
    }
    ${TableRow} {
    }
    ${TableCell} {
      display: block;
    }
    ${TableCol} {
      display: none;
    }
    ${TableCaption} {
      font-style: normal;
      background-color: ${(props) => props.theme.colors.ezraYellow};
      color: ${(props) => props.theme.colors.accent};
      font-weight: bold;
    }
    ${TableRow} {
      display: block;
      display: grid;
      grid-template-columns: auto 4em;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 1em 0.5em;
      align-items: center;
      padding: 0.7em 2vw 0;
      > ::before {
        text-align: end;
        width: 11ch;
        font-weight: bold;
      }
      td:nth-child(1) {
        display: none;
      }
      ${BookCoverCell} {
        grid-column: 2;
        grid-row: 1/-1;
      }
      ${BookTitleCell} {
        max-width: fit-content;

        ::before {
          content: "Title: ";
        }
      }
      ${AuthorCell} {
        max-width: fit-content;
        ::before {
          content: "Author: ";
        }
      }
      ${RatingCell}::before {
        content: "Rating: ";
      }
      ${GuestRecCell}::before {
        content: "Guest Recs: ";
      }
      ${TableCell} {
        ::before {
          display: inline;
          font-weight: bold;
        }
        display: flex;
        flex-direction: row;
        width: 100%;
        > span {
          max-width: none;
          margin: 0;
          padding-left: 0.5rem;
        }
      }
    }
  }
`;
export const TableContainer = styled.div`
  margin: 0 ${(props) => props.theme.spacing.s};
  ${tabletAndBelowTableDisplayMediaQ}
`;
