import React from "react";
import AppBar from "./AppBar/AppBar";
import Content from "./Content/Content";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: "",
			activeItem: ""
		};
		this.handleActiveItem = this.handleActiveItem.bind(this);
		this.handleActivePage = this.handleActivePage.bind(this);
	}

	handleActiveItem(i) {
		this.setState({
			activeItem: i
		});
	}

	handleActivePage(i) {
		this.setState({
			activePage: i
		});
	}

	render() {
		return (
			<div className="App">
				<Content
					userInfo={this.props.userInfo}
					activePage={this.state.activePage}
					activeItem={this.state.activeItem}
					selectPage={this.handleActivePage}
					selectItem={this.handleActiveItem}
				/>
				<AppBar
					userInfo={this.props.userInfo}
					forgetUserInfo={this.props.forgetUserInfo}
					select={this.handleActivePage}
				/>
			</div>
		);
	}
}
