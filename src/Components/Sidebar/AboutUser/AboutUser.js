import React from "react";
import "./AboutUser.css";

export default class AboutUser extends React.Component {
    defaultProps = {
        userInfo: {
            token: localStorage["aiims-login-token"],
            username: localStorage["aiims-login-username"],
            role: localStorage["aiims-login-role"]
        }
    };

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
        return (
            <div className="AboutUser">
                <div className="Username">
                    <h2>{this.state.userInfo.username.replace(/^"/, "").replace(/"$/, "")}</h2>
                    <h4>{this.state.userInfo.role.replace(/^"/, "").replace(/"$/, "")}</h4>
                </div>
            </div>
        );
    }
}
