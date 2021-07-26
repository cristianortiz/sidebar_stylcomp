import React from "react";
import { GlobalSearch, GlobalSearchInput } from "./tables.styles";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <GlobalSearch>
      Buscar{" "}
      <GlobalSearchInput
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </GlobalSearch>
  );
};

export default GlobalFilter;
