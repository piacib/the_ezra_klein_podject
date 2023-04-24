import React from "react";
import Table from "../../components/Table/Table";
import styled from "styled-components";
const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TableView = () => {
  return (
    <View>
      <Table />
    </View>
  );
};

export default TableView;
