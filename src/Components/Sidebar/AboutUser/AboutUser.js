import React from "react";
import "./AboutUser.css";

const AboutUser = props => {
    return (
        <div className="AboutUser">
            <div className="Username">
                <h2>
                    {props.userInfo.username
                        .replace(/^"/, "")
                        .replace(/"$/, "")}
                </h2>
                <h4>
                    {props.userInfo.role.replace(/^"/, "").replace(/"$/, "")}
                </h4>
            </div>
        </div>
    );
};

export default AboutUser;
