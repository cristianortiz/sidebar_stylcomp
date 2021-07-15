import styled from "@emotion/styled";
export const ChartBox = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  padding-top: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ChartContainer = styled.div`
  position: relative;
  width: 50%;
  min-height: 350px;
  display: flex;
  background: #fff;
  padding: 20px;
  box-shadow: 2px 5px 4px -2px rgba(0, 0, 0, 0.2);
`;
