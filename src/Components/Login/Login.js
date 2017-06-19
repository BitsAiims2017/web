import React from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import "./Login.css";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Login-Container">
				<div className="LoginWrapper">
					<div className="Login">
						<div className="Login-content-wrapper">
							<h1> Login </h1>
							<h3>Please fill in your basic info</h3>
							<br />
							<Input icon="user" iconPosition="left" placeholder="username" />
							<br />
							<br />
							<Input
								icon="lock"
								iconPosition="left"
								placeholder="password"
								type="password"
							/>
							<Button type="submit"> LOGIN </Button>
						</div>
					</div>
					<div className="Register">
						Hi
					</div>
				</div>
			</div>
		);
	}
}
