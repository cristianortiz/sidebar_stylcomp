import React from "react";
import Cards from "../../components/Cards/Cards";
import { CardsBox } from "../../components/Cards/cards.styles";
import { cardsData } from "../../components/Cards/cardsData";
import BecadosChart from "../../components/Charts/BecadosChart";
import { ChartBox } from "../../components/Charts/charts.styles";
import { Becados, Matricula } from "../../components/Charts/ChartsData";
import MatriculaChart from "../../components/Charts/MatriculaChart";

const Dashboard = () => {
  return (
    <>
      <CardsBox>
        {cardsData.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </CardsBox>
      <ChartBox>
        <MatriculaChart Matricula={Matricula} />

        <BecadosChart Becados={Becados} />
      </ChartBox>
    </>
  );
};

export default Dashboard;
