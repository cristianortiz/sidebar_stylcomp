import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, MainContent } from "../components/Layout/Layout.styles";
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
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/home/dashboard" component={Dashboard} />
            <Route exact path="/home/programas" component={Programas} />
            <Route exact path="/home/alumnos" component={Alumnos} />
            <Route exact path="/home/becas" component={Becas} />
            <Route exact path="/home/academicos" component={Academicos} />
            <Route exact path="/home/configuracion" component={Configuracion} />
          </Switch>
        </MainContent>
      </Container>
    </Router>
  );
};

export default Home;
