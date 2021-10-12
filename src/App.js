import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./static/Styles/styles.css";
import Homepage from "./Components/Homepage";
import adlDriver from "./Components/adlDriver";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link, glide } from "react-tiger-transition";
function App() {
  const routes = [
    {
      path: "/",
      component: Homepage,
    },
    { path: "/adltarabaranDriverPanel", component: adlDriver },
  ];
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
