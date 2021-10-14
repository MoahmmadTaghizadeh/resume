import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./static/Styles/styles.css";
import Homepage from "./Components/Homepage";
import AdlDriver from "./Components/adlDriver";
import AdlCustomer from "./Components/adlCustomer";
import AdlCmr from "./Components/adlCmr";
import WebApplicationTaxi from "./Components/webApp";
import Avid from "./Components/avid";

import "swiper/swiper-bundle";
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
    { path: "/webApplicationTaxi", component: WebApplicationTaxi },
    { path: "/avid", component: Avid },
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
