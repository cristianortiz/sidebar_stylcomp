import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarState from "./context/Sidebar/SidebarState";
import Login from "./components/Login/Login";
import Home from "./pages/Home";

function App() {
  return (
    <SidebarState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </SidebarState>
  );
}

export default App;
