import React from "react";
import styled from "styled-components";
import BooksDisplay from "../../components/BooksDisplay/BooksDisplay";
const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AllBooksView = () => {
  return (
    <View>
      <BooksDisplay />
    </View>
  );
};

export default AllBooksView;
