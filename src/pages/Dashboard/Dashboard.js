import React from "react";
import Cards from "../../components/Cards/Cards";
import { CardsBox } from "../../components/Cards/cards.styles";
import { cardsData } from "../../components/Cards/cardsData";

const Dashboard = () => {
  return (
    <>
      <CardsBox>
        {cardsData.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </CardsBox>
    </>
  );
};

export default Dashboard;
