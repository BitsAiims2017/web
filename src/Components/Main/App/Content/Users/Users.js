import React from "react";
import "../Content.css";
import "./Users.css";
import $ from "jquery";
import Toolbar from "./Toolbar/Toolbar";
import AddNewUser from "./AddNewUser/AddNewUser";
import AllUsers from "./AllUsers/AllUsers";
import EditUser from "./EditUser/EditUser";

export default class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: 1
		};
		this.refreshAllUsers = this.refreshAllUsers.bind(this);
	}

	refreshAllUsers() {
		this.setState({
			val: this.state.val + 1
		});
	}

	render() {
		return (
			<div className="Users">
				{this.state.val}
				<AddNewUser
					userInfo={this.props.userInfo}
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
					deleteRequest={this.props.deleteRequest}
					putRequest={this.props.putRequest}
					refreshAllUsers={this.refreshAllUsers}
					onClick={this.refreshAllUsers}
				/>
				{/*}
				<Toolbar
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
				/> 
				*/}

				<EditUser
					userInfo={this.props.userInfo}
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
					deleteRequest={this.props.deleteRequest}
					putRequest={this.props.putRequest}
					refreshAllUsers={this.refreshAllUsers}
				/>

				<AllUsers
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
					deleteRequest={this.props.deleteRequest}
					putRequest={this.props.putRequest}
					ref="allusers"
				/>
			</div>
		);
	}
}
