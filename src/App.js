import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HeaderComp/HeaderComp";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
};

export default App;
