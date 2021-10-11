import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import './static/Styles/styles.css'
import Homepage from './Components/Homepage';

function App() {

  const routes = [{
    path: "/",
    component: Homepage
  }]
  return (
    <Router>
        <Switch>
            {routes.map((route, index) => (
              <Route key={index} exact component={route.component} path={route.path} />
            ))}
        </Switch>
    </Router>
  );
}

export default App;
