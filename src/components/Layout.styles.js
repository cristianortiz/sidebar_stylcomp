import styled from "@emotion/styled/";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const MainContent = styled.div`
  position: absolute;
  width: calc(100% - var(--sidebar-width));
  left: var(--sidebar-width);
  min-height: 100vh;
  background: #f5f5f5;
  transition: 0.5s;
`;
