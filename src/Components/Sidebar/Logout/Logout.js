import React from "react";
import "./Logout.css";
import "../../../libs/semantic-ui/components/icon.min.css";

const Logout = props => {
	return (
		<button className="Logout" onClick={props.forgetUserInfo}>
			<p>Logout</p>
		</button>
	);
};

export default Logout;
