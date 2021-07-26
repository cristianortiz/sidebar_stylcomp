import styled from "@emotion/styled";
export const TablesBox = styled.div`
  width: 100%;
  padding: 20px;
  display: block;
  overflow-x: scroll;
  min-height: 500px;
`;

export const Table = styled.table`
  background-color: #fff;
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  box-shadow: 2px 5px 4px -2px rgba(0, 0, 0, 0.2);
`;
export const Thead = styled.thead`
  background: #42648d;
  color: #fff;
`;
export const Tbody = styled.tbody`
  vertical-align: middle;
`;
export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 1rem 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.6rem;
  font-weight: 900;
`;

export const Td = styled.td`
  padding: 0.9rem 0.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
//globalFilter component styles to table
export const GlobalSearch = styled.div`
  width: 100%;
  display: block;
  padding: 0 0 10px 0;
`;
export const GlobalSearchInput = styled.input`
  padding: 3px 3px 3px 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
export const TablePagination = styled.div`
  padding: 15px 0 0 0;
`;

export const PageButton = styled.button`
  background: #42648d;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5em;
  margin: 0 0.5em 0 0.5em;
  border-radius: 0.6em;
  &:hover {
    border: 1px solid black;
  }
`;

export const PageNumbers = styled.span``;
