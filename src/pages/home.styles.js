import styled from "@emotion/styled/";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const MainContent = styled.div`
  position: absolute;
  width: ${(props) =>
    props.is_open
      ? `calc(100% - ${props.open_width});`
      : `calc(100% - ${props.close_width});`};
  position: fixed;
  //left: var(--sidebar-width);
  left: ${(props) =>
    props.is_open ? `${props.open_width}` : `${props.close_width}`};
  min-height: 100vh;
  background: #f8f8fa;
  transition: 0.2s ease-in all;
  color: #1e304a;
`;
