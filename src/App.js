import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/HeaderComp/HeaderComp";
import SignInAndSignUp from "./pages/auth/SignInAndSignUp";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currrentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currrentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currrentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
