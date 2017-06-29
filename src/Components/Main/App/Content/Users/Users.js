import React from "react";
import "../Content.css";
import "./Users.css";
import $ from "jquery";
import Toolbar from "./Toolbar/Toolbar";
import AddNewUser from "./AddNewUser/AddNewUser";

export default class Users extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Users">
				{/* <Toolbar
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
				/> */}
				<AddNewUser userInfo={this.props.userInfo} />
			</div>
		);
	}
}
