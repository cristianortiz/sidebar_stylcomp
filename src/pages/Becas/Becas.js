import React from "react";
import BecasCards from "../../components/Cards/BecasCards";
import { CardsBox } from "../../components/Cards/cards.styles";
import { BecasCardsData } from "../../components/Cards/cardsData";
import { ChartBox } from "../../components/Charts/charts.styles";
import {
  DistBecas,
  DistBecasProgramas,
} from "../../components/Charts/ChartsData";
import DistribucionBecas from "../../components/Charts/DistribucionBecas";
import DistribucionBecasProgramas from "../../components/Charts/DistribucionBecasProgramas";

const Becas = () => {
  return (
    <>
      <CardsBox>
        {BecasCardsData.map((item, index) => {
          return <BecasCards item={item} key={index} />;
        })}
      </CardsBox>
      <ChartBox>
        <DistribucionBecas DistBecas={DistBecas} />
        <DistribucionBecasProgramas DistBecasProgramas={DistBecasProgramas} />
      </ChartBox>
    </>
  );
};

export default Becas;
