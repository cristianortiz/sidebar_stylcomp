import styled from "@emotion/styled";

//-----general styles for all types of cards----
export const CardsBox = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CardContainer = styled.div`
  position: relative;
  padding: 20px;
  background: #fff;
  display: ${(props) =>
    props.block ? "block;" : "flex"}; //for academic card container
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 2px 5px 4px -2px rgba(0, 0, 0, 0.2);
  //height: fit-content;
`;

export const CardBody = styled.div`
  display: block;
  margin-top: ${(props) =>
    props.margin ? "20px" : "0"}; //for Academic card body
`;
//------general styles for simple cards in Dashboard-----
export const CardNumber = styled.div`
  position: relative;
  font-size: 2em;
  font-weight: 400;
  color: #1d3146;
`;
export const CardTitle = styled.div`
  display: block;
  color: #6c757d;
  font-size: 0.9em;
`;
export const CardIcon = styled.div`
  display: inline-block;
  font-size: 2em;
  color: #5387c5;
`;
//---styles for cards with vertical items list Programas, Academicos----
export const CardTitleFlex = styled.div`
  display: flex;
  color: #6c757d;
  font-size: 0.9em;
  width: 80%;
`;

export const CardTitleIcon = styled.div`
  right: 0;
  display: inline-flex;
  font-size: 3em;
  color: #5387c5;
  position: absolute;
  top: 0;
  margin-top: 0.3em;
  margin-right: 0.3em;
`;

export const CardListItem = styled.div`
  display: flex;
  width: 100%;
  //border-bottom: 1px solid #e7e7f3;
  //padding-bottom: 15px;
  font-size: 0.9em;
`;
export const CardItemImage = styled.div`
  display: inline;
  font-size: 2em;
  color: #5387c5;
  margin-right: 20px;
  padding: 15px 0 0 0;
`;
export const CardItemText = styled.div`
  color: #6c757d;
  font-size: 1em;
  padding-top: 15px;
`;
export const CardItemSubtext = styled.p`
  color: #6c757d;
`;
