import { Link } from "react-router-dom";
import styled from "styled-components";
export const BookCardContainer = styled(Link)`
  margin: 1rem;
  height: 18rem;
`;
const EllipsisOverflow = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 15ch;
  :hover {
    white-space: normal;
  }
`;
export const BookTitle = styled(EllipsisOverflow)`
  margin: 0 auto;
  padding-bottom: 0;
`;
export const BookAuthor = styled(EllipsisOverflow)`
  margin-top: 0;
`;
