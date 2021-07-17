import styled from "@emotion/styled";
export const ChartBox = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px 0 20px;
  //display: grid;
  //grid-gap: 20px;
  //grid-template-columns: repeat(2, 1fr);
  /* @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;
export const ChartContainer = styled.div`
  position: relative;
  min-height: 300px;
  width: 49%;
  display: inline-flex;
  background: #fff;
  padding: 20px;
  box-shadow: 2px 5px 4px -2px rgba(0, 0, 0, 0.2);
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const ChartContainerLeft = styled.div`
  position: relative;
  width: 49%;
  min-height: 300px;
  display: inline-flex;
  margin-left: 2%;
  background: #fff;
  padding: 20px;
  box-shadow: 2px 5px 4px -2px rgba(0, 0, 0, 0.2);
  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
`;
