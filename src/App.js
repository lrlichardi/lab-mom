import NavBar from './component/NavBar';
import NewPatient from './component/NewPatient';
import Patients from './component/Patients';
import Patient from './component/Patient';
import Analisys from './component/Analisys';
import './App.css';
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path='/patients'>
              <Patients/>
            </Route>
            <Route exact path='/patients/new'>
              <NewPatient/>
            </Route>
            <Route exact path='/patients/:id'>
              <Patient/>
            </Route>
            <Route exact path='/patients/:id/analisys/newAnalysis'>
              <Analisys/>
            </Route>
            <Router exact path='/'>
            <Patients/>
            </Router>
            
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
