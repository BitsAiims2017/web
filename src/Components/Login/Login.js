import React from "react";
import ReactDom from "react-dom";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import "./Login.css";

export default class Login extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleToken = this.handleToken.bind(this);
		this.postUser = this.postUser.bind(this);
		this.state = { username: "", password: "" };
	}

	// Render function : to render our component
	render() {
		const { username, password } = this.state;
		return (
			<div className="Login-Container">
				<div className="LoginWrapper">
					<div className="Login">
						<div className="Login-content-wrapper">
							<h1> Login </h1>
							<h3>Please fill in your basic info</h3>
							<br />
							{/*
							Right below here is USERNAME field. On change, the value stored in the field at 
							the moment gets transfered to the variable 'username' by function handleChange, and then onSubmit, 
							a post request is sent to the server. 
							*/}
							<Input
								icon="user"
								iconPosition="left"
								placeholder="username"
								value={username}
								name="username"
								onChange={this.handleChange}
							/>
							<br />
							<br />
							{/*
							Right below here is PASSWORD field. On change, the value stored in the field at 
							the moment gets transfered to the variable 'password' by the function handleChange, and then onSubmit, 
							a post request is sent to the server, containing both username and password in JSON.
							*/}
							<Input
								icon="lock"
								iconPosition="left"
								placeholder="password"
								type="password"
								value={password}
								name="password"
								onChange={this.handleChange}
							/>
							{/*
							Submit button on click will fire a function called handleSubmit, which will of course, 
							as I said earlier, will post a request to the server. Server will then send a token, which is to be used for any
							further requests in a session.
							*/}
							<Button type="submit" onClick={this.handleSubmit}>
								LOGIN
							</Button>

						</div>
					</div>
					<div className="Right-half">
						<div className="Right-half-text">
							<h1> New User? </h1>
							<p>
								AIIMS being a govt. organization requires you to contact the
								administrator for a new account.
							</p>
							<hr />
							<div className="Response-Box">
								<div className="Response-text" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Sets state whenever some field changes in input form.
	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	// Function to handle things that should happen after submit.
	handleSubmit(e) {
		e.preventDefault();
		let { username, password } = this.state;
		let data = { username, password };
		this.postUser(data);
	}

	// This function transfers data from the FORM and gets a response object from server.
	// res.token contains token, which is to be used by the app for further purposes.
	// TODO:
	//  => url needs to be changed
	// => failed cases must output some html for the user to see
	//
	postUser = data => {
		$.ajax({
			type: "POST",
			url: "http://localhost:2000/auth",
			data: data,
			datatype: "application/json"
		})
			.done(res => {
				this.handleToken(res.token);
			})
			.fail(err => {
				var responseBox = $(".Response-Box");
				responseBox.addClass("Response-active");
				if (err.status === 404) {
					// If the username is wrong
					let responseMessage = `Please check if the username you entered is correct and try again.`;
					responseBox.children().text(responseMessage).fadeIn(300);
				}

				if (err.status === 401) {
					// If username is correct, but password is wrong.
					let responseMessage = `Dude, Recheck your password and try again.`;
					responseBox.children().text(responseMessage).fadeIn(300);
				}
				if (err.status === 400) {
					// If empty form is submitted
					let responseMessage = `Enter your username & password.`;
					responseBox.children().text(responseMessage).fadeIn(300);
				}
			});
	};

	handleToken(token) {
		// This function will send the token recieved from the server to the app component.
		this.props.token(token);
	}
}
