import "./App.css";
import SidebarState from "./context/Sidebar/SidebarState";
import AcademicosState from "./context/Academicos/AcademicosState";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <SidebarState>
      <AcademicosState>
     <AppRouter />
      </AcademicosState>
    </SidebarState>
  );
}

export default App;
