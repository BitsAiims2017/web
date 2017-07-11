import React from "react";
import "../Content.css";
import "./Inventory.css";
import $ from "jquery";
import Toolbar from "./Toolbar/Toolbar";
import AddNewItem from "./AddNewItem/AddNewItem";
import AllItems from "./AllItems/AllItems";
import EditItem from "./EditItem/EditItem";

export default class Inventory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: 1
		};
		this.refreshAllItems = this.refreshAllItems.bind(this);
	}

	refreshAllItems() {
		this.setState({
			val: this.state.val + 1
		});
	}

	render() {
		return (
			<div className="Inventory">
				<AddNewItem
					userInfo={this.props.userInfo}
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
					deleteRequest={this.props.deleteRequest}
					putRequest={this.props.putRequest}
					refreshAllItems={this.refreshAllItems}
					onClick={this.refreshAllItems}
				/>
				{/*}
				<Toolbar
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
				/> 
				*/}

				<EditItem
					userInfo={this.props.userInfo}
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
					deleteRequest={this.props.deleteRequest}
					putRequest={this.props.putRequest}
					refreshAllItems={this.refreshAllItems}
				/>

				<AllItems
					selectPage={this.props.selectPage}
					selectItem={this.props.selectItem}
					activeItem={this.props.activeItem}
					activePage={this.props.activePage}
					getRequest={this.props.getRequest}
					postRequest={this.props.postRequest}
					deleteRequest={this.props.deleteRequest}
					putRequest={this.props.putRequest}
					ref="allitems"
				/>
			</div>
		);
	}
}
