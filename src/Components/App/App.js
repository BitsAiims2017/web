import React, { Component } from "react";
import Login from "../Login/Login";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { token: "" };
		this.handleToken = this.handleToken.bind(this);
	}

	handleToken(token) {
		this.setState({
			token: token
		});
	}

	render() {
		if (!this.state.token) {
			return (
				<div className="App">
					<Login token={this.handleToken} />
				</div>
			);
		} else {
			return (
				<div>
					<h1>Yay! I've logged in!</h1>
				</div>
			);
		}
	}
}

export default App;
