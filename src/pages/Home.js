import { useContext } from "react";
import {Route, Routes } from "react-router-dom";
import { Container, MainContent } from "./home.styles";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarContext from "../context/Sidebar/SidebarContext";
import Academicos from "./Academicos/Academicos";
import Alumnos from "./Alumnos/Alumnos";
import Becas from "./Becas/Becas";
import Configuracion from "./Configuracion/Configuracion";
import Dashboard from "./Dashboard/Dashboard";
import Programas from "./Programas/Programas";

const Home = () => {
  //destructuring props from sidebar state
  const { is_open, open_width, close_width, hide_sidebar } =
    useContext(SidebarContext);

  return (
  
      <Container>
        <Sidebar />
        <MainContent
          is_open={is_open}
          open_width={open_width}
          close_width={close_width}
          hide_sidebar={hide_sidebar}
        >
          <NavBar />
          <Routes>
            <Route  path="/" element={<Dashboard />} />
            <Route  path="/dashboard" element={<Dashboard />} />
            <Route  path="/programas" element={<Programas />} />
            <Route  path="/alumnos" element={<Alumnos />} />
            <Route  path="/becas" element={<Becas />} />
            <Route  path="/academicos" element={<Academicos />} />
            <Route  path="/configuracion" element={<Configuracion />} />
          </Routes>
        </MainContent>
      </Container>
    
  );
};

export default Home;
