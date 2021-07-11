import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarState from "./context/Sidebar/SidebarState";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

function App() {
  return (
    <SidebarState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Layout" component={Layout} />

          {/* <Route exact path="/products/edit/:id" component={EditProduct} /> */}
        </Switch>
      </Router>
    </SidebarState>
  );
}

export default App;
