import React from "react";
import "./AllUsers.css";
import ViewTable from "./ViewTable/ViewTable";

export default class AllUsers extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="AllUsers">
				<ViewTable
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
