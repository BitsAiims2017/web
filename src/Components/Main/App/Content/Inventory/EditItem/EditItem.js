import React from "react";
import "./EditItem.css";
import ReactDOM from "react-dom";
import { Icon } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import AllItems from "../AllItems/AllItems";

const IconStyles = {
	fontSize: "3vw",
	position: "relative",
	padding: "0px",
	margin: "0px",
	top: "3vh",
	color: "rgba(51, 10, 88, 0.79)"
};

const options = [
	{ key: "admin", text: "Admin", value: "admin" },
	{ key: "viewer", text: "Viewer", value: "viewer" }
];

export default class EditItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			id: "",
			category: "",
			quantity: "",
			price: "",
			date_added: "",
			token: this.props.userInfo.token.replace(/^"/, "").replace(/"$/, ""),
			check: false
		};
		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		let name, id, category, quantity, price, date_added;
		let check = this.state.check;
		return (
			<div className="EditItem">
				<div className="response-box" />
				<div className="EditItem-Form">
					<div className="IconPlace" style={{ textAlign: "center" }}>
						<Icon name="cart" style={IconStyles} />
					</div>
					<br />
					<hr style={{ borderColor: "rgba(156, 39, 176, 0.34)" }} />
					<br />
					<div className="Form">
						<h3 className="Form-Heading">Enter Item ID</h3>
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
									autoComplete="off"
								/>
								<Form.Input
									placeholder="Category"
									name="category"
									value={category}
									onChange={this.handleChange}
									autoComplete="off"
								/>
								<Form.Input
									placeholder="Quantity"
									name="quantity"
									value={quantity}
									onChange={this.handleChange}
									autoComplete="off"
								/>
								<Form.Input
									placeholder="Price"
									name="price"
									value={price}
									onChange={this.handleChange}
									autoComplete="off"
								/>
								<Form.Input
									placeholder="Date Added"
									name="date_added"
									value={date_added}
									onChange={this.handleChange}
									autoComplete="off"
								/>
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
					quantity: "admin"
				});
			} else {
				this.setState({
					check: "0",
					quantity: ""
				});
			}
		}
		if (ref === "viewer") {
			if (this.state.check !== "2") {
				this.setState({
					check: "2",
					quantity: "viewer"
				});
			} else {
				this.setState({
					check: "0",
					quantity: ""
				});
			}
		}
		if (ref === "doctor") {
			if (this.state.check !== "3") {
				this.setState({
					check: "3",
					quantity: "doctor"
				});
			} else {
				this.setState({
					check: "0",
					quantity: ""
				});
			}
		}
		if (ref === "inventory") {
			if (this.state.check !== "4") {
				this.setState({
					check: "4",
					quantity: "inventory"
				});
			} else {
				this.setState({
					check: "0",
					quantity: ""
				});
			}
		}
		console.log(ref);
	}
	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	// Function to handle things that should happen after submit.
	handleSubmit(e) {
		e.preventDefault();
		let { name, id, category, quantity, price, date_added, token } = this.state;
		let data = { name, id, category, quantity, price, date_added, token };

		// 	If the user presses DELETE
		if (this.props.activeItem === "delete") {
			this.props.deleteRequest(`http://localhost:2000/items/${id}`, res => {
				var responseBox = $(".EditItem .response-box");

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
						// If id is correct, but category is wrong.
						let responseMessage = `Item already exists`;
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
			this.props.putRequest(`http://localhost:2000/items/${id}`, data, res => {
				var responseBox = $(".EditItem .response-box");

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
						// If id is correct, but category is wrong.
						let responseMessage = `Item already exists`;
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
		this.setState({
			quantity: "",
			check: false
		});
		this.props.refreshAllItems();
	}
}
