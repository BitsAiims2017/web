import React from "react";
import "./Content.css";
import Dashboard from "./Dashboard/Dashboard";
import Patients from "./Patients/Patients";
import Users from "./Users/Users";
import Orders from "./Orders/Orders";
import Inventory from "./Inventory/Inventory";
import Feedback from "./Feedback/Feedback";
import Shortcuts from "./Shortcuts/Shortcuts";
import About from "./About/About";

export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			x: "",
			y: "",
			isLoaded: false
		};
	}

	_onMouseMove(e) {
		this.setState({
			x: e.clientX,
			y: e.clientY
		});
	}

	componentDidMount() {
		this.setState({
			isLoaded: true
		});
	}

	render() {
		return (
			<div
				className="Content"
				onMouseMove={this._onMouseMove.bind(this)}
				ref="content"
			>
				{(() => {
					switch (this.props.activePage) {
						case "dashboard":
							return (
								<Dashboard
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						case "patients":
							return (
								<Patients
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						case "users":
							return (
								<Users
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						case "orders":
							return (
								<Orders
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						case "inventory":
							return (
								<Inventory
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						case "feedback":
							return (
								<Feedback
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						case "about":
							return (
								<About
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						case "shortcuts":
							return (
								<Shortcuts
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
						default:
							return (
								<Dashboard
									userInfo={this.props.userInfo}
									activePage={this.props.activePage}
									activeItem={this.props.activeItem}
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
								/>
							);
							break;
					}
				})()}
			</div>
		);
	}
}
