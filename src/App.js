import React                                      from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard                                  from "./pages/Dashboard/Dashboard";
import LoginPage                                  from "./pages/Login/Login";


const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  </div>
);

export default App;
