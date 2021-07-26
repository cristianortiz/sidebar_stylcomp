import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TablePagination,
  PageButton,
  PageNumbers,
} from "./tables.styles";
import { table_columns, programas } from "./tablesData";

const ProgramasTable = () => {
  const columns = useMemo(() => table_columns, []);
  const data = useMemo(() => programas, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <TablePagination>
        <PageNumbers>
          Pagina {pageIndex + 1} of {pageOptions.length}{" "}
        </PageNumbers>
        <PageButton onClick={() => gotoPage(0)} disable={!canPreviousPage}>
          {"<<"}
        </PageButton>
        <PageButton onClick={() => previousPage()} disable={!canPreviousPage}>
          Anterior
        </PageButton>
        <PageButton onClick={() => nextPage()} disable={!canNextPage}>
          Siguiente
        </PageButton>
        <PageButton
          onClick={() => gotoPage(pageCount - 1)}
          disable={!canNextPage}
        >
          {">>"}
        </PageButton>
      </TablePagination>
    </>
  );
};

export default ProgramasTable;
