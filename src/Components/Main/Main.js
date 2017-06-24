import React, { Component } from "react";
import Login from "./Login/Login";
import App from "./App/App";
import "./Main.css";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				token: localStorage["aiims-login-token"],
				username: localStorage["aiims-login-username"],
				role: localStorage["aiims-login-role"]
			}
		};
		this.rememberUserInfo = this.rememberUserInfo.bind(this);
		this.forgetUserInfo = this.forgetUserInfo.bind(this);
	}

	// This function will remember the token, username and  when the server gives it for the very first time
	// It'll store it in local storage with key : "aiims-login-token" and then reload the browser.
	// It'll also keep it in state of the Main component, so that it can be passed to other components.
	rememberUserInfo(token, username, role) {
		this.setState({
			userInfo: {
				token: token,
				username: username,
				role: role
			}
		});
		localStorage["aiims-login-token"] = JSON.stringify(token);
		localStorage["aiims-login-username"] = JSON.stringify(username);
		localStorage["aiims-login-role"] = JSON.stringify(role);
		window.location.reload();
	}

	// ForgetToken will remove token from local storage and reset the token key in state of Main component.
	// It'll be fired when the user hits logout.
	forgetUserInfo() {
		this.setState({
			userInfo: {
				token: "",
				username: "",
				role: ""
			}
		});
		delete window.localStorage["aiims-login-token"];
		delete window.localStorage["aiims-login-username"];
		delete window.localStorage["aiims-login-role"];
		window.location.reload();
	}

	// Render function will render everything. Nothing much is added to it yet,
	render() {
		if (!localStorage["aiims-login-token"]) {
			return <Login userInfo={this.rememberUserInfo} />;
		} else {
			return (
				<App
					userInfo={this.state.userInfo}
					forgetUserInfo={this.forgetUserInfo}
				/>
			);
		}
	}
}

export default Main;
