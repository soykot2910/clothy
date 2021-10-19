import React from "react";
import { connect } from "react-redux";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Header from "./components/HeaderComp/HeaderComp";
import SignInAndSignUp from "./pages/auth/SignInAndSignUp";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
				</Switch>
			</Router>
		);
	}
}
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
