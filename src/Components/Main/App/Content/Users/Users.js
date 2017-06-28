import React from "react";
import "../Content.css";
import "./Users.css";
import $ from "jquery";
import Toolbar from "./Toolbar/Toolbar";

export default class Users extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Users">
				<Toolbar />
			</div>
		);
	}
}
