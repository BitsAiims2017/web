import React from "react";
import "./AllItems.css";
import ViewTable from "./ViewTable/ViewTable";

export default class AllItems extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="AllItems">

				<ViewTable
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
					deleteRequest={this.props.deleteRequest}
					putRequest={this.props.putRequest}
					ref="viewtable"
				/>

			</div>
		);
	}
}
