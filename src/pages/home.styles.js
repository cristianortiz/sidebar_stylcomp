import styled from "@emotion/styled/";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const MainContent = styled.div`
  position: absolute;
  width: calc(100% - var(--sidebar-width));
  width: ${(props) =>
    props.is_open
      ? `calc(100% - ${props.open_width});`
      : `calc(100% - ${props.close_width});`};
  position: fixed;
  //left: var(--sidebar-width);
  left: ${(props) =>
    props.is_open ? `${props.open_width}` : `${props.close_width}`};
  min-height: 100vh;
  background: #f5f5f5;
  transition: 0.2s ease-in all;
`;
