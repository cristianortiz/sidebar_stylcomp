import styled from "@emotion/styled";
export const TablesBox = styled.div`
  width: 99%;
  padding: 10px;
  background: #fff;
  box-shadow: 2px 5px 4px -2px rgba(0, 0, 0, 0.2);
  margin: 10px;
  display: flex;
  //height: fit-content;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.75rem;
  overflow: hidden;
`;
export const Thead = styled.thead`
  background: #e1edfb7d;
`;
export const Tbody = styled.tbody`
  vertical-align: middle;
`;
export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 0.6rem 0.3rem;
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
