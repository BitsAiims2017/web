import React from "react";
import "./EditPatient.css";
import ReactDOM from "react-dom";
import { Icon } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import AllPatients from "../AllPatients/AllPatients";
import { Button, Header, Modal } from "semantic-ui-react";

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
			check: "0",
			modelOpen: false,
			recievedPatientData: {
				id: "",
				name: "",
				dob: "",
				blood_group: "",
				gender: "",
				open_consultation: "",
				reports: []
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleOpen = (i, e) => {
		this.props.selectItem(i);
		let { name, id, dob, blood_group, token } = this.state;
		let data = { name, id, dob, blood_group, token };
		// If the user presses REPORTS`
		this.props.getRequest(
			`http://localhost:2000/patients`,
			res => {
				for (
					var i = 0, upperLimit = res.patients.length;
					i < upperLimit;
					i += 1
				) {
					if (res.patients[i].id === id) {
						this.setState({
							recievedPatientData: {
								id: res.patients[i].id,
								name: res.patients[i].name,
								dob: res.patients[i].dob,
								blood_group: res.patients[i].blood_group,
								gender: res.patients[i].gender,
								open_consultation: res.patients[i].open_consultation,
								reports: res.patients[i].reports,
								age: res.patients[i].age
							}
						});
					}
				}
				console.log(this.state.recievedPatientData);
			},
			{ id: id }
		);

		this.setState({
			modalOpen: true
		});
	};

	handleClose = e =>
		this.setState({
			modalOpen: false
		});

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
								<div className="Reports">
									<Modal
										trigger={
											<Form.Button
												content="Reports"
												onClick={this.handleOpen.bind(this, "reports")}
												key="reports"
											/>
										}
										open={this.state.modalOpen}
										closeIcon="close"
										onClose={this.handleClose}
										basic
										size="medium"
									>
										<Header icon="archive" content="Patient Report" />
										<Modal.Content>
											{(() => {
												if (this.state.id === "") {
													return (
														<p>
															Please enter a valid patient ID to see reports.
														</p>
													);
												} else {
													return (
														<div>
															<span>
																<h3>ID</h3>
																<p>{this.state.recievedPatientData.id}</p>
															</span>
															<br />
															<span>
																<h3>Name</h3>
																<p>{this.state.recievedPatientData.name}</p>
															</span>
															<br />
															<span>
																<h3>Age</h3>
																<p>{this.state.recievedPatientData.age}</p>
															</span>
															<br />
															<span>
																<h3>Blood Group</h3>
																<p>
																	{this.state.recievedPatientData.blood_group}
																</p>
															</span>
															<br />
															<span>
																<p>Reports</p>
																<p>{this.state.recievedPatientData.reports}</p>
															</span>b
														</div>
													);
												}
											})()}
										</Modal.Content>
										<Modal.Actions>
											{/*}
											<Button
												basic
												color="red"
												inverted
												onClick={this.handleClose}
											>
												<Icon name="remove" /> No
											</Button> */}
											<Button color="green" inverted onClick={this.handleClose}>
												<Icon name="checkmark" /> Okay
											</Button>
										</Modal.Actions>
									</Modal>
								</div>
								<Form.Input
									placeholder="Name"
									name="name"
									value={name}
									onChange={this.handleChange}
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
		console.log(i);
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
	}
	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	// Function to handle things that should happen after submit.
	handleSubmit(e) {
		e.preventDefault();
		let { name, id, dob, blood_group, token } = this.state;
		let data = { name, id, dob, blood_group, token };

		// 	If the user presses DELETE
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

		// If the user presses SAVE
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
	}
}
