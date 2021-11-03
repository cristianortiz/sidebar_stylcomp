import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarState from "./context/Sidebar/SidebarState";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import AcademicosState from "./context/Academicos/AcademicosState";

function App() {
  return (
    <SidebarState>
      <AcademicosState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
      </AcademicosState>
    </SidebarState>
  );
}

export default App;
