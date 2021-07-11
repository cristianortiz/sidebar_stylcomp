import SidebarContext from "./context/Sidebar/SidebarContext";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Container, MainContent } from "./components/Layout.styles";
import Dashboard from "./components/Dashboard/Dashboard";
import SidebarState from "./context/Sidebar/SidebarState";

function App() {
  return (
    <SidebarState>
      <Router>
        <Container>
          <Sidebar />
          <MainContent>
            <NavBar />
            <Switch>
              <Route exact path="/Dashboard" component={Dashboard} />
              {/* <Route exact path="/programas" component={Programas} />
            <Route exact path="/products/edit/:id" component={EditProduct} /> */}
            </Switch>
          </MainContent>
        </Container>
      </Router>
    </SidebarState>
  );
}

export default App;
