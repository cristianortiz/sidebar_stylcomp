import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import GlobalFilter from "./GlobalFilter";
import { Table, Thead, Tr, Th, Tbody, Td } from "./tables.styles";
import { table_columns, programas } from "./tablesData";

const ProgramasTable = () => {
  const columns = useMemo(() => table_columns, []);
  const data = useMemo(() => programas, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

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
          {rows.map((row) => {
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
    </>
  );
};

export default ProgramasTable;
