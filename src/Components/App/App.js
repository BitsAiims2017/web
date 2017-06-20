import React, { Component } from "react";
import { Input } from "semantic-ui-react";
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
		console.log(this.state.token);
	}

	render() {
		return (
			<div className="App">
				<Login token={this.handleToken} />
			</div>
		);
	}
}

export default App;
