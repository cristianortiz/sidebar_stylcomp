import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import Academicos from "../../pages/Academicos/Academicos";
import Alumnos from "../../pages/Alumnos/Alumnos";
import Becas from "../../pages/Becas/Becas";
import Configuracion from "../../pages/Configuracion/Configuracion";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Programas from "../../pages/Programas/Programas";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import { Container, MainContent } from "./Layout.styles";

const Layout = () => {
  //destructuring props from sidebar state
  const { is_open, open_width, close_width } = useContext(SidebarContext);

  return (
    <Router>
      <Container>
        <Sidebar />
        <MainContent
          is_open={is_open}
          open_width={open_width}
          close_width={close_width}
        >
          <NavBar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/programas" component={Programas} />
            <Route path="/alumnos" component={Alumnos} />
            <Route path="/becas" component={Becas} />
            <Route path="/academicos" component={Academicos} />
            <Route path="/configuracion" component={Configuracion} />
          </Switch>
        </MainContent>
      </Container>
    </Router>
  );
};

export default Layout;
