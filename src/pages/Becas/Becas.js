import React from "react";
import BecasCards from "../../components/Cards/BecasCards";
import { CardsBox } from "../../components/Cards/cards.styles";
import { BecasCardsData } from "../../components/Cards/cardsData";
import { ChartBox } from "../../components/Charts/charts.styles";
import { DistBecas } from "../../components/Charts/ChartsData";
import DistribucionBecas from "../../components/Charts/DistribucionBecas";

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
      </ChartBox>
    </>
  );
};

export default Becas;
