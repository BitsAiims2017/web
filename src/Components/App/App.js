import React, { Component } from "react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { token: "" };
		this.rememberToken = this.rememberToken.bind(this);
		this.forgetToken = this.forgetToken.bind(this);
	}

	// This function will remember the token when the server gives it for the very first time
	// It'll store it in local storage with key : "aiims-login-token" and then reload the browser.
	// It'll also keep it in state of the App component, so that it can be passed to other components.
	rememberToken(token) {
		this.setState({
			token: token
		});
		localStorage["aiims-login-token"] = JSON.stringify(token);
		window.location.reload();
	}

	// ForgetToken will remove token from local storage and reset the token key in state of App component.
	// It'll be fired when the user hits logout.
	forgetToken() {
		this.setState({
			token: ""
		});
		delete window.localStorage["aiims-login-token"];
		window.location.reload();
	}

	// This function is important for browser to know what to render depending upon what's
	// in the local storage.
	componentWillMount() {
		if (!localStorage["aiims-login-token"]) {
			return (
				<div className="App">
					<Login token={this.rememberToken} />
				</div>
			);
		} else {
			return (
				<div>
					<Logout forgetToken={this.forgetToken} />
				</div>
		 	);
		}
	}

	// Render function will render everything. Nothing much is added to it yet,
	render() {
		if (!localStorage["aiims-login-token"]) {
			return (
				<div className="App">
					<Login token={this.rememberToken} />
				</div>
			);
		} else { 
			return (
				<div>
					<Logout forgetToken={this.forgetToken} />
				</div>
			);
		} 
	}
}

export default App;
