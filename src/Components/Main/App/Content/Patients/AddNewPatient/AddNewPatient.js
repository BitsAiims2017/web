import React from "react";
import "./AddNewPatient.css";
import { Icon } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import AllPatients from "../AllPatients/AllPatients";

const IconStyles = {
	fontSize: "3vw",
	position: "relative",
	padding: "0px",
	margin: "0px",
	top: "3vh",
	color: "rgba(10, 88, 64, 0.79)"
};

const options = [
	{ key: "male", text: "Male", value: "male" },
	{ key: "female", text: "Female", value: "female" }
];

export default class AddNewPatient extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			dob: "",
			blood_group: "",
			gender: "",
			token: this.props.userInfo.token.replace(/^"/, "").replace(/"$/, ""),
			check: false
		};
		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		let name, dob, blood_group, gender;
		let check = this.state.check;
		return (
			<div className="AddNewPatient">
				<div className="response-box" />
				<div className="AddNewPatient-Form">
					<div className="IconPlace" style={{ textAlign: "center" }}>
						<Icon name="add user" style={IconStyles} />
					</div>
					<br />
					<hr style={{ borderColor: "rgba(22, 82, 32, 0.48)" }} />
					<br />
					<div className="Form">
						<h3 className="Form-Heading">Add Patient</h3>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group>
								<Form.Input
									placeholder="Name"
									name="name"
									value={name}
									onChange={this.handleChange}
									required
									autoComplete="off"
								/>
								<Form.Input
									placeholder="DOB"
									name="dob"
									value={dob}
									onChange={this.handleChange}
									autoComplete="off"
								/>
								<Form.Input
									placeholder="Blood Group"
									name="blood_group"
									value={blood_group}
									onChange={this.handleChange}
									autoComplete="off"
								/>
								<div className="Checkboxes">
									<Checkbox
										label="Male"
										checked={check === "1"}
										onChange={this.handleCheckboxChange.bind(this, "male")}
										ref="male"
									/>
									<Checkbox
										label="Female"
										checked={check === "2"}
										onChange={this.handleCheckboxChange.bind(this, "female")}
									/>
								</div>
								<Form.Button
									content="Submit"
									onClick={this.handleClick.bind(this, "submit")}
									key="submit"
								/>
							</Form.Group>
						</Form>
					</div>
				</div>

			</div>
		);
	}

	handleClick(i, e) {
		this.props.selectItem(i);	
	}

	handleCheckboxChange(ref, e) {
		if (ref === "male") {
			if (this.state.check !== "1") {
				this.setState({
					check: "1",
					gender: "male"
				});
			} else {
				this.setState({
					check: "0",
					gender: ""
				});
			}
		}
		if (ref === "female") {
			if (this.state.check !== "2") {
				this.setState({
					check: "2",
					gender: "female"
				});
			} else {
				this.setState({
					check: "0",
					gender: ""
				});
			}
		}
		console.log(ref);
	}
	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	// Function to handle things that should happen after submit.
	handleSubmit(e) {
		e.preventDefault();
		let { name, dob, blood_group, gender, token } = this.state;
		let data = { name, dob, blood_group, gender, token };
		this.postPatient(data);
		this.setState({
			gender: "",
			check: false
		});
	}

	postPatient = data => {
		$.ajax({
			type: "POST",
			url: "http://localhost:2000/patient/",
			data: data,
			datatype: "application/json"
		})
			.done(res => {
				var responseBox = $(".response-box");
				if (responseBox.hasClass("response-failed")) {
					responseBox.removeClass("response-failed");
				}
				responseBox.addClass("response-success");
			})
			.fail(err => {
				var responseBox = $(".response-box");
				if (responseBox.hasClass("response-success")) {
					responseBox.removeClass("response-success");
				}
				responseBox.addClass("response-failed");
				console.log(err);
				if (err.status === 400) {
					// Incomplete / Wrong Parameters
					let responseMessage = `Incomplete/Wrong Parameters`;
					console.log(responseMessage);
					console.log(err);
				}
				if (err.status === 401) {
					// No permission
					let responseMessage = `The request is not authorized`;
					console.log(responseMessage);
				}

				if (err.status === 409) {
					// If dob is correct, but blood_group is wrong.
					let responseMessage = `Patient already exists`;
					console.log(responseMessage);
				}
				if (err.status === 500) {
					// If empty form is submitted
					let responseMessage = `Internal Error`;
					console.log(responseMessage);
				}
			});
	};
}
