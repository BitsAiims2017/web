import React from "react";
import "./EditPatient.css";
import ReactDOM from "react-dom";
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

export default class EditPatient extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
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
		let name, id, dob, blood_group, gender;
		let check = this.state.check;
		return (
			<div className="EditPatient">
				<div className="response-box" />
				<div className="EditPatient-Form">
					<div className="IconPlace" style={{ textAlign: "center" }}>
						<Icon name="user circle outline" style={IconStyles} />
					</div>
					<br />
					<hr style={{ borderColor: "rgba(156, 39, 176, 0.34)" }} />
					<br />
					<div className="Form">
						<h3 className="Form-Heading">Enter Patient ID</h3>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group>
								<Form.Input
									placeholder="ID"
									name="id"
									value={id}
									onChange={this.handleChange}
									required
									autoComplete="off"
								/>
								<br />
								<h3 className="Form-Heading">Edit Details</h3>
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
								{/*<MuiThemeProvider>
								<DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" desktop={true} className="DatePicker" />
								</MuiThemeProvider>*/}
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
								<div className="Save">
									<Form.Button
										content="Save"
										onClick={this.handleClick.bind(this, "submit")}
										key="submit"
									/>
								</div>
								<div className="Delete">
									<Form.Button
										content="Delete"
										onClick={this.handleClick.bind(this, "delete")}
										key="delete"
										className="Delete"
									/>
								</div>
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
		if (ref === "admin") {
			if (this.state.check !== "1") {
				this.setState({
					check: "1",
					blood_group: "admin"
				});
			} else {
				this.setState({
					check: "0",
					blood_group: ""
				});
			}
		}
		if (ref === "viewer") {
			if (this.state.check !== "2") {
				this.setState({
					check: "2",
					blood_group: "viewer"
				});
			} else {
				this.setState({
					check: "0",
					blood_group: ""
				});
			}
		}
		if (ref === "doctor") {
			if (this.state.check !== "3") {
				this.setState({
					check: "3",
					blood_group: "doctor"
				});
			} else {
				this.setState({
					check: "0",
					blood_group: ""
				});
			}
		}
		if (ref === "inventory") {
			if (this.state.check !== "4") {
				this.setState({
					check: "4",
					blood_group: "inventory"
				});
			} else {
				this.setState({
					check: "0",
					blood_group: ""
				});
			}
		}
		console.log(ref);
	}
	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	// Function to handle things that should happen after submit.
	handleSubmit(e) {
		e.preventDefault();
		let { name, id, dob, blood_group, token } = this.state;
		let data = { name, id, dob, blood_group, token };

		// 	If the patient presses DELETE
		if (this.props.activeItem === "delete") {
			this.props.deleteRequest(`http://localhost:2000/patients/${id}`, res => {
				var responseBox = $(".EditPatient .response-box");

				if (res.status === 202) {
					if (responseBox.hasClass("response-failed")) {
						responseBox.removeClass("response-failed");
					}
					responseBox.addClass("response-success");
				} else {
					if (responseBox.hasClass("response-success")) {
						responseBox.removeClass("response-success");
					}
					responseBox.addClass("response-failed");
					if (res.status === 400) {
						// Incomplete / Wrong Parameters
						let responseMessage = `Incomplete/Wrong Parameters`;
						console.log(responseMessage);
						console.log(res);
					}
					if (res.status === 401) {
						// No permission
						let responseMessage = `The request is not authorized`;
						console.log(responseMessage);
					}
					if (res.status === 409) {
						// If id is correct, but dob is wrong.
						let responseMessage = `Patient already exists`;
						console.log(responseMessage);
					}
					if (res.status === 500) {
						// If empty form is submitted
						let responseMessage = `Internal Error`;
						console.log(responseMessage);
					}
				}
			});
		}

		// If the patient presses SAVE
		if (this.props.activeItem === "submit") {
			this.props.putRequest(
				`http://localhost:2000/patients/${id}`,
				data,
				res => {
					var responseBox = $(".EditPatient .response-box");

					if (res.status === 200) {
						if (responseBox.hasClass("response-failed")) {
							responseBox.removeClass("response-failed");
						}
						responseBox.addClass("response-success");
					} else {
						if (responseBox.hasClass("response-success")) {
							responseBox.removeClass("response-success");
						}
						responseBox.addClass("response-failed");
						if (res.status === 400) {
							// Incomplete / Wrong Parameters
							let responseMessage = `Incomplete/Wrong Parameters`;
							console.log(responseMessage);
							console.log(res);
						}
						if (res.status === 401) {
							// No permission
							let responseMessage = `The request is not authorized`;
							console.log(responseMessage);
						}
						if (res.status === 409) {
							// If id is correct, but dob is wrong.
							let responseMessage = `Patient already exists`;
							console.log(responseMessage);
						}
						if (res.status === 500) {
							// If empty form is submitted
							let responseMessage = `Internal Error`;
							console.log(responseMessage);
						}
					}
				}
			);
		}
		this.setState({
			blood_group: "",
			check: false
		});
		this.props.refreshAllPatients();
	}
}
