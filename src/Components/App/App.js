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

	rememberToken(token) {
		this.setState({
			token: token
		});
		localStorage["aiims-login-token"] = JSON.stringify(token);
		window.location.reload();
	}

	forgetToken() {
		this.setState({
			token: ''
		});
		delete window.localStorage["aiims-login-token"];
		window.location.reload();
	}

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
