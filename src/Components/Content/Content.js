import React from "react";
import "./Content.css";

export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				token: "",
				username: "",
				role: ""
			}
		};
	}

	componentWillMount() {
		this.setState({
			userInfo: {
				token: localStorage["aiims-login-token"],
				username: localStorage["aiims-login-username"],
				role: localStorage["aiims-login-role"]
			}
		});
	}

	render() {
		return <div className="Content" />;
	}
}
