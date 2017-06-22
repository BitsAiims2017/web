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
		this.forgetUserInfo = this.forgetUserInfo.bind(this);
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

	

	forgetUserInfo() {
		this.setState({
			userInfo: {
				token: "",
				username: "",
				role: ""
			}
		});
		delete window.localStorage["aiims-login-token"];
		delete window.localStorage["aiims-login-username"];
		delete window.localStorage["aiims-login-role"];
		window.location.reload();
	}

	render() {
		return (
			<div className="App">
				<Content userInfo={this.state.userInfo} />
				<Sidebar userInfo={this.state.userInfo} forgetUserInfo={this.forgetUserInfo} />
			</div>
		);
	}
}
