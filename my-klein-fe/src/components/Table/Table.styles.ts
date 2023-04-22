import styled, { css } from "styled-components";
import { devices } from "../../styles/devices";

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
  background-color: ${(props) => props.theme.colors.ezraYellow}; ;
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
  /* display: none; */
  /* background-color: green; */
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

  /* vertical-align: bottom; */
`;
export const AuthorCell = styled(TableCell)`
  text-align: left;
  /* max-width: 3rem; */
`;
export const BookTitle = styled(TableCell)`
  /* max-width: 3rem; */
`;
export const BookCover = styled.img`
  /* width: 2rem; */
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
const media = css`
  @media all and (max-width: 57em) {
    table,
    tr,
    td {
      display: block;
    }
    tr {
      padding: 0.7em 2vw 0;
    }

    th {
      display: none;
    }
    caption {
      font-style: normal;
      background-color: rgba(0, 0, 0, 0.35);
      color: #fff;
      font-weight: bold;
    }
    * ::before {
      text-align: end;
      width: 10ch;
      font-weight: bold;
    }
    ${TableRow} {
      //       td:nth-child(1) {
      //         display: none;
      //       }
      //       td:nth-child(2) {
      //         grid-column: 1;
      //         grid-row: 1/-1;
      //       }
      //       td:nth-child(3)::before {
      //         content: "Title: ";
      //       }
      //       td:nth-child(4)::before {
      //         content: "Author: ";
      //       }
      //       td:nth-child(5)::before {
      //         content: "Rating: ";
      //       }
      //       td::before {
      //         display: inline;
      //         font-weight: bold;
      //       }
      //       td:nth-of-type(2)::before {
      //         font-style: normal;
      //       }
      //       td {
      //         display: flex;
      //         flex-direction: row;
      //         width: 100%;
      //       }
      //       display: grid;
      //       grid-template-columns: 4em auto;
      //       grid-template-rows: 1fr 1fr 1fr;

      //       grid-gap: 1em 0.5em;
      //       align-items: center;
      //       td > p {
      //         max-width: none;
      //         margin: 0;
      //       }
    }
  }
`;
export const TableContainer = styled.div`
  margin: 0 ${(props) => props.theme.spacing.s};
  ${media}
`;
export const GuestRecomendations = styled(TableCol)``;
export const GuestRecCell = styled(TableCell)``;

// ${HiddenRow} {
//     padding-bottom: 1em;
//     * ::before {
//       text-align: end;
//       width: 14ch;
//       font-weight: bold;
//       display: block;
//     }
//     td {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       justify-content: flex-start;
//       /* grid-template-columns: auto; */
//       grid-template-rows: 1fr 1fr;
//       grid-gap: 1em 0.5em;
//       align-items: center;
//       padding-top: 0;
//     }
//     * {
// //         max-height: fit-content;
// //         transition: height 0.6s, padding 0.6s;
//     }
//     max-height: fit-content;
//     transition: height 0.6s, padding 0.6s;
//     td {
// //         grid-column: 2;
// //         padding-left: 0;
// //         padding-top: 0;
//     }
//     td div {
//       padding: 0;
//       width: 100%;
//       display: flex;
//     }
//     td div:nth-child(1)::before {
//       content: "Episode Title: ";
//       width: calc(4em + 0.5em + 10ch);
//   }
//   td div:nth-child(2)::before {
//       content: "Air Date: ";
//       width: calc(4em + 0.5em + 10ch);
//     }
//   }
