// Importing React and CSS file
import React from "react";
import "./AppBar.css";
// Importing Material UI component for Bottom Navigation
// Necessary for AppBar to function Correctly
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
	BottomNavigation,
	BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
// Import Icons
import IconShoppingCart from "material-ui/svg-icons/action/shopping-cart";
import IconPeople from "material-ui/svg-icons/social/people";
import IconStore from "material-ui/svg-icons/action/store";
import IconDashboard from "material-ui/svg-icons/action/dashboard";

// ===================================================

// Defining Icons
const dashboardIcon = <IconDashboard />;
const usersIcon = <IconPeople />;
const InventoryIcon = <IconStore />;
const OrdersIcon = <IconShoppingCart />;

// Defining AppBar
export default class AppBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
		this.select = this.select.bind(this);
	}

	select = index => {
		this.setState({ selectedIndex: index });
		this.props.select(index);
	};

	componentWillMount() {
		injectTapEventPlugin();
	}

	render() {
		if (this.props.userInfo.role === '"admin"') {
			return (
				<div className="AppBar">
					<MuiThemeProvider>
						<Paper zDepth={1}>
							<BottomNavigation selectedIndex={this.state.selectedIndex}>
								<BottomNavigationItem
									label="Dashboard"
									icon={dashboardIcon}
									onTouchTap={() => this.select(0)}
								/>
								<BottomNavigationItem
									label="Users"
									icon={usersIcon}
									onTouchTap={() => this.select(1)}
								/>
								<BottomNavigationItem
									label="Inventory"
									icon={InventoryIcon}
									onTouchTap={() => this.select(2)}
								/>
								<BottomNavigationItem
									label="Orders"
									icon={OrdersIcon}
									onTouchTap={() => this.select(3)}
								/>
							</BottomNavigation>
						</Paper>
					</MuiThemeProvider>
				</div>
			);
		} else {
			return (
				<div className="AppBar">
					<MuiThemeProvider>
						<Paper zDepth={1}>
							<BottomNavigation selectedIndex={this.state.selectedIndex}>
								<BottomNavigationItem
									label="Inventory"
									icon={InventoryIcon}
									onTouchTap={() => this.select(0)}
								/>
								<BottomNavigationItem
									label="Orders"
									icon={OrdersIcon}
									onTouchTap={() => this.select(1)}
								/>
							</BottomNavigation>
						</Paper>
					</MuiThemeProvider>
				</div>
			);
		}
	}
}
