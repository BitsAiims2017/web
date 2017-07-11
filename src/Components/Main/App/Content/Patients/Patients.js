import React from "react";
import "../Content.css";
import "./Patients.css";
import $ from "jquery";
import Toolbar from "./Toolbar/Toolbar";
import AddNewPatient from "./AddNewPatient/AddNewPatient";
import AllPatients from "./AllPatients/AllPatients";
import EditPatient from "./EditPatient/EditPatient";

var allPatients = [];

export default class Patients extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="Patients">
				<AddNewPatient
					userInfo={this.props.userInfo}
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
				/>

				{/* <Toolbar
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
				/> */}

				<EditPatient
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

				<AllPatients
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
