import React from "react";
import "./AllPatients.css";
import ViewTable from "./ViewTable/ViewTable";
import EditableTable from "./EditableTable/EditableTable";

export default class AllPatients extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="AllPatients">
				{(() => {
					switch (this.props.activeItem) {
						case "editmode":
							return (
								<EditableTable
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
									activeItem={this.props.activeItem}
									activePage={this.props.activePage}
									getRequest={this.props.getRequest}
									postRequest={this.props.postRequest}
								/>
							);
							break;
						case "viewmode":
						default:
							return (
								<ViewTable
									selectPage={this.props.selectPage}
									selectItem={this.props.selectItem}
									activeItem={this.props.activeItem}
									activePage={this.props.activePage}
									getRequest={this.props.getRequest}
									postRequest={this.props.postRequest}
								/>
							);
							break;
					}
				})()}
			</div>
		);
	}
}
