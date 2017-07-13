import React from "react";
import ReactDOM from "react-dom";
import "./AddNewItem.css";
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

export default class AddNewItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			category: "",
			id: "",
			quantity: "",
			price: "",
			token: this.props.userInfo.token.replace(/^"/, "").replace(/"$/, ""),
			check: false
		};
		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		let name, category, id, quantity, price;
		let check = this.state.check;
		return (
			<div className="AddNewItem">
				<div className="response-box" />
				<div className="AddNewItem-Form">
					<div className="IconPlace" style={{ textAlign: "center" }}>
						<Icon name="plus cart" style={IconStyles} />
					</div>
					<br />
					<hr style={{ borderColor: "rgba(156, 39, 176, 0.34)" }} />
					<br />
					<div className="Form">
						<h3 className="Form-Heading">Add Item</h3>
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
		let { name, category, id, quantity, price } = this.state;
		let data = { name, category, id, quantity, price };
		console.log(data)
		this.postItem(data);
		this.setState({
			quantity: "",
			check: false
		});
		this.props.refreshAllItems();
	}

	postItem = data => {
		$.ajax({
			type: "POST",
			url: "http://localhost:2000/items",
			data: data,
			datatype: "application/json"
		})
			.done(res => {
				var responseBox = $(".AddNewItem .response-box");
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
					// If category is correct, but id is wrong.
					let responseMessage = `Item already exists`;
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
