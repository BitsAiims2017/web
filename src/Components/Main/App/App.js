import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

const App = props => {
	return (
		<div className="App">
			<Content userInfo={props.userInfo} />
			<Sidebar
				userInfo={props.userInfo}
				forgetUserInfo={props.forgetUserInfo}
			/>
		</div>
	);
};

export default App;