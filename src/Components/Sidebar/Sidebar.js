import React from "react";
import "./Sidebar.css";
import AboutUser from "./AboutUser/AboutUser";
import Logout from "./Logout/Logout";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
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
        return (
            <div className="Sidebar">
                <AboutUser userInfo={this.props.userInfo} />
                <Logout forgetUserInfo={this.props.forgetUserInfo} />
            </div>
        );
    }
}
