import React from "react";
import AcademicosList from "../../components/Cards/AcademicosList";
import { CardsBox } from "../../components/Cards/cards.styles";
import { academicosData } from "../../components/Cards/cardsData";

const Academicos = () => {
  return (
    <>
      <CardsBox keep_size={true}>
        <AcademicosList academicosData={academicosData}></AcademicosList>
      </CardsBox>
      ;
    </>
  );
};

export default Academicos;
