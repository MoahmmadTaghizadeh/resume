import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./static/Styles/styles.css";
import Homepage from "./Components/Homepage";
import AdlDriver from "./Components/adlDriver";
import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import AdlCustomer from "./Components/adlCustomer";
import AdlCmr from "./Components/adlCmr";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { Link, glide } from "react-tiger-transition";
function App() {
  const routes = [
    {
      path: "/",
      component: Homepage,
    },
    { path: "/adltarabaranDriverPanel", component: AdlDriver },
    { path: "/adltarabaranCustomerPanel", component: AdlCustomer },
    { path: "/adltarabaranCmrPanel", component: AdlCmr },
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
