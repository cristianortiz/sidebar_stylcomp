import React, { useContext, useEffect } from "react";
import AcademicosList from "../../components/Cards/AcademicosList";
import { CardsBox } from "../../components/Cards/cards.styles";
import { academicosData } from "../../components/Cards/cardsData";
import AcademicosContext from "../../context/Academicos/AcademicosContext";

const Academicos = () => {
  const claustroContext  = useContext(AcademicosContext)
  const {claustrosProgramas,getClaustrosProgramas} = claustroContext
  
  //get academicos when Academicos comp is loaded trough a useEffect
  useEffect(() => {
    // if (message) {
    //   showAlert(message.msg, message.category);
    // }
    getClaustrosProgramas();
    //eslint-disable-next-line
  }, []);
  //console.log(academicos)
  return (
    <>
      <CardsBox keep_size={true}>
        <AcademicosList claustrosProgramas={claustrosProgramas}></AcademicosList>
      </CardsBox>
      ;
    </>
  );
};

export default Academicos;
