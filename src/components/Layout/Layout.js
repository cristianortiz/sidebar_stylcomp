import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import Dashboard from "../Dashboard/Dashboard";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import { Container, MainContent } from "./Layout.styles";

const Layout = () => {
  const sidebar_context = useContext(SidebarContext);
  const { is_open, open_width, close_width } = sidebar_context;

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
            <Route exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </MainContent>
      </Container>
    </Router>
  );
};

export default Layout;
