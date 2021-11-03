import React, { useContext, useEffect } from "react";
import AcademicosList from "../../components/Cards/AcademicosList";
import { CardsBox } from "../../components/Cards/cards.styles";
import { academicosData } from "../../components/Cards/cardsData";
import AcademicosContext from "../../context/Academicos/AcademicosContext";

const Academicos = () => {
  const academicos_context =useContext(AcademicosContext)
  const{academicos,getAcademicos} =academicos_context
  //get academicos when Academicos comp is loaded trough a useEffect
  useEffect(() => {
    // if (message) {
    //   showAlert(message.msg, message.category);
    // }
    getAcademicos();
    //eslint-disable-next-line
  }, []);
  console.log(academicos)
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
