import React from "react";
import AppBar from "./AppBar/AppBar";
import Content from "./Content/Content";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickedIndex: ""
		};
		this.handleClickedItemIndex = this.handleClickedItemIndex.bind(this);
	}

	handleClickedItemIndex(i) {
		this.setState({
			clickedIndex: i
		});
	}

	render() {
		return (
			<div className="App">
				<Content
					userInfo={this.props.userInfo}
					clickedIndex={this.state.clickedIndex}
					select={this.handleClickedItemIndex}
				/>
				<AppBar
					userInfo={this.props.userInfo}
					forgetUserInfo={this.props.forgetUserInfo}
					select={this.handleClickedItemIndex}
				/>
			</div>
		);
	}
}
