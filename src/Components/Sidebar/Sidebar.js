import React from "react";
import "./Sidebar.css";
import AboutUser from "./AboutUser/AboutUser";
import Logout from "./Logout/Logout";

const Sidebar = props => {
    return (
        <div className="Sidebar">
            <AboutUser userInfo={props.userInfo} />
            <Logout forgetUserInfo={props.forgetUserInfo} />
        </div>
    );
};

export default Sidebar;
