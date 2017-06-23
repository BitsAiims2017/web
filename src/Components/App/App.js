import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

export default class App extends React.Component {
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
                username:localStorage["aiims-login-username"],
                role: localStorage["aiims-login-role"]
            }
        });
    }

	render() {
		return (
			<div className="App">
				<Content userInfo={this.state.userInfo} />
				<Sidebar userInfo={this.state.userInfo} forgetUserInfo={this.props.forgetUserInfo} />
			</div>
		);
	}
}
