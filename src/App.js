import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HeaderComp/HeaderComp";
import SignInAndSignUp from "./pages/auth/SignInAndSignUp";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </Router>
  );
};

export default App;
