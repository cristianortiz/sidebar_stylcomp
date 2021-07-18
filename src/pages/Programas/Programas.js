import React from "react";
import { CardsBox } from "../../components/Cards/cards.styles";
import { ProgramasCardsData } from "../../components/Cards/cardsData";
import ProgramasCards from "../../components/Cards/ProgramasCards";
import ProgramasTable from "../../components/Tables/ProgramasTable";
import { TablesBox } from "../../components/Tables/tables.styles";

const Programas = () => {
  return (
    <>
      <CardsBox>
        {ProgramasCardsData.map((item, index) => {
          return <ProgramasCards item={item} key={index} />;
        })}
      </CardsBox>

      <TablesBox>
        <ProgramasTable />
      </TablesBox>
    </>
  );
};

export default Programas;
