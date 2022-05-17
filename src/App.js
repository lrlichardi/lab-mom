import NavBar from "./component/NavBar";
import NewPatient from "./component/patient/NewPatient";
import Patients from "./component/patient/Patients";
import Patient from "./component/patient/Patient";
import Analysis from "./component/Analysis";
import AnalyisisEdit from "./component/analysisComponent/AnalyisisEdit";
import AnalysisView from "./component/analysisComponent/AnalysisView";
import SocialWork from "./pages/SocialWork";
import PaginasUtiles from "./pages/PaginasUtiles";
import Error404 from './pages/Error404';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Router exact path="/">
            <Patients />
          </Router>

          <Route exact path="/patients">
            <Patients />
          </Route>

          <Route exact path="/patients/new">
            <NewPatient />
          </Route>

          <Route exact path="/patients/:pathName">
            <Patient />
          </Route>

          <Route exact path="/patients/:pathName/analysis/newAnalysis">
            <Analysis />
          </Route>

          <Router exact path="/patients/:pathName/analysis/:id/edit">
            <AnalyisisEdit />
          </Router>

          <Router exact path="/patients/:pathName/analysis/:id/view">
            <AnalysisView />
          </Router>

          <Router exact path="/socialwork">
            <SocialWork/>
          </Router>

          <Router exact path="/paginasutiles">
            <PaginasUtiles/>
          </Router>

          {/* <Router exact path="*">
            <Error404 />
          </Router> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
