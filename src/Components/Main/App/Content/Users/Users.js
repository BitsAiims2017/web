import React from "react";
import "../Content.css";
import "./Users.css";
import $ from "jquery";
import Toolbar from "./Toolbar/Toolbar";
import AddNewUser from "./AddNewUser/AddNewUser";
import AllUsers from "./AllUsers/AllUsers";

export default class Users extends React.Component {
	constructor(props) {
		super(props);
		this.getAllUserData = this.getAllUserData.bind(this);
		// this.editUserData = this.editUserData.bind(this);
		this.state =  {
			alluserdata : []
		}
	}

	getAllUserData() {
		this.props.getRequest("http://localhost:2000/users/", (res) => {
		  return res;
		});
	}

	componentDidMount() {
		this.getAllUserData();
	}

	render() {
		return (
			<div className="Users">
				<AddNewUser
					userInfo={this.props.userInfo}
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
				/>

				<Toolbar
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
				/>
				<AllUsers
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
				/>
			</div>
		);
	}
}
