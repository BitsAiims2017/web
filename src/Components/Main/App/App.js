import React from "react";
import AppBar from "./AppBar/AppBar";
import Content from "./Content/Content";

const App = props => {
	return (
		<div className="App">
			<Content userInfo={props.userInfo} />
			<AppBar
				userInfo={props.userInfo}
				forgetUserInfo={props.forgetUserInfo}
				select={props.sendPageIndexToMain}
			/>
		</div>
	);
};

export default App;