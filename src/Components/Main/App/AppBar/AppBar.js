import React from "react";
import "./AppBar.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
// Import Icons
import IconShoppingCart from "material-ui/svg-icons/action/shopping-cart";
import IconPeople from "material-ui/svg-icons/social/people";
import IconStore from "material-ui/svg-icons/action/store";
import IconDashboard from "material-ui/svg-icons/action/dashboard";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

// ===================================================

// Defining Icons
const IconsStyles = {
	width: "1.2vw",
	height: "1.2vw"
};
const menuStyles = {
	padding: "0",
	height: "6vh",
	width: "inherit",
	background: "none"
};
const dashboardIcon = <IconDashboard style={IconsStyles} />;
const usersIcon = <IconPeople style={IconsStyles} />;
const InventoryIcon = <IconStore style={IconsStyles} />;
const ordersIcon = <IconShoppingCart style={IconsStyles} />;

export default class AppBar extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		injectTapEventPlugin();
	}

	render() {
		if (this.props.userInfo.role === '"admin"') {
			return (
				<div className="AppBar">
					<ul className="user-information-list">
						<li className="menu">
							<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
								<IconMenu
									iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
									anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
									targetOrigin={{ horizontal: "left", vertical: "bottom" }}
									style={menuStyles}
									iconStyle={{
										color: "white",
										padding: "0",
										lineHeight: "6vh",
										width: "1.5vw",
										height: "1.5vw"
									}}
									desktop={true}
									listStyle={{ background: "#111" }}
								>

									<MenuItem primaryText="Send feedback" />
									<MenuItem primaryText="About" />
									<MenuItem primaryText="Help" />
									<MenuItem
										primaryText="Log out"
										onClick={this.props.forgetUserInfo}
									/>
								</IconMenu>
							</MuiThemeProvider>
						</li>
						<li>
							<span>Username : </span>
							<span className="username-text">
								{this.props.userInfo.username
									.replace(/^"/, "")
									.replace(/"$/, "")}
							</span>
						</li>
						<li>
							<span>Role : </span>
							<span className="role-text">
								{this.props.userInfo.role.replace(/^"/, "").replace(/"$/, "")}
							</span>
						</li>
					</ul>
					<MuiThemeProvider>
						<ul className="AppBar-list">
							<li>
								<RaisedButton
									label="Dashboard"
									labelPosition="before"
									labelStyle={{
										textTransform: "none",
										fontSize: "1vw",
										lineHeight: "100%",
										fontWeight: "200"
									}}
									style={{
										backgroundColor: "transparent",
										margin: "0",
										lineHeight: "8vh"
									}}
									fullWidth={true}
									buttonStyle={{
										backgroundColor: "#007748",
										height: "6vh",
										margin: "1vh 0",
										padding: "0.1vh",
										borderRadius: "0"
									}}
									labelColor={"#FFF"}
									icon={dashboardIcon}
								/>
							</li>
							<li>
								<RaisedButton
									label="Inventory"
									labelPosition="before"
									labelStyle={{
										textTransform: "none",
										fontSize: "1vw",
										lineHeight: "100%",
										fontWeight: "200"
									}}
									style={{
										backgroundColor: "transparent",
										margin: "0",
										lineHeight: "8vh"
									}}
									fullWidth={true}
									buttonStyle={{
										backgroundColor: "#02645A",
										height: "6vh",
										margin: "1vh 0",
										padding: "0.1vh",
										borderRadius: "0"
									}}
									labelColor={"#FFF"}
									icon={InventoryIcon}
								/>
							</li>
							<li>
								<RaisedButton
									label="Orders"
									labelPosition="before"
									labelStyle={{
										textTransform: "none",
										fontSize: "1vw",
										lineHeight: "100%",
										fontWeight: "200"
									}}
									style={{
										backgroundColor: "transparent",
										margin: "0",
										lineHeight: "8vh"
									}}
									fullWidth={true}
									buttonStyle={{
										backgroundColor: "#4E0264",
										height: "6vh",
										margin: "1vh 0",
										padding: "0.1vh",
										borderRadius: "0"
									}}
									labelColor={"#FFF"}
									icon={ordersIcon}
								/>
							</li>
							<li>
								<RaisedButton
									label="Users"
									labelPosition="before"
									labelStyle={{
										textTransform: "none",
										fontSize: "1vw",
										lineHeight: "100%",
										fontWeight: "200"
									}}
									style={{
										backgroundColor: "transparent",
										margin: "0",
										lineHeight: "8vh"
									}}
									fullWidth={true}
									buttonStyle={{
										backgroundColor: "#D3350D",
										height: "6vh",
										margin: "1vh 0",
										padding: "0.1vh",
										borderRadius: "0"
									}}
									labelColor={"#FFF"}
									icon={usersIcon}
								/>
							</li>
						</ul>
					</MuiThemeProvider>
				</div>
			);
		} else {
			return (
				<div className="AppBar">
					<ul className="user-information-list">
						<li className="menu">
							<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
								<IconMenu
									iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
									anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
									targetOrigin={{ horizontal: "left", vertical: "bottom" }}
									style={menuStyles}
									iconStyle={{
										color: "white",
										padding: "0",
										lineHeight: "6vh",
										width: "1.5vw",
										height: "1.5vw"
									}}
									desktop={true}
									listStyle={{ background: "#111" }}
								>

									<MenuItem primaryText="Send feedback" />
									<MenuItem primaryText="About" />
									<MenuItem primaryText="Help" />
									<MenuItem
										primaryText="Log out"
										onClick={this.props.forgetUserInfo}
									/>
								</IconMenu>
							</MuiThemeProvider>
						</li>
						<li>
							<span>Username : </span>
							<span className="username-text">
								{this.props.userInfo.username
									.replace(/^"/, "")
									.replace(/"$/, "")}
							</span>
						</li>
						<li>
							<span>Role : </span>
							<span className="role-text">
								{this.props.userInfo.role.replace(/^"/, "").replace(/"$/, "")}
							</span>
						</li>
					</ul>
					<MuiThemeProvider>
						<ul className="AppBar-list">
							<li>
								<RaisedButton
									label="Dashboard"
									labelPosition="before"
									labelStyle={{
										textTransform: "none",
										fontSize: "1vw",
										lineHeight: "100%",
										fontWeight: "200"
									}}
									style={{
										backgroundColor: "transparent",
										margin: "0",
										lineHeight: "8vh"
									}}
									fullWidth={true}
									buttonStyle={{
										backgroundColor: "#007748",
										height: "6vh",
										margin: "1vh 0",
										padding: "0.1vh",
										borderRadius: "0"
									}}
									labelColor={"#FFF"}
									icon={dashboardIcon}
								/>
							</li>
							<li>
								<RaisedButton
									label="Inventory"
									labelPosition="before"
									labelStyle={{
										textTransform: "none",
										fontSize: "1vw",
										lineHeight: "100%",
										fontWeight: "200"
									}}
									style={{
										backgroundColor: "transparent",
										margin: "0",
										lineHeight: "8vh"
									}}
									fullWidth={true}
									buttonStyle={{
										backgroundColor: "#02645A",
										height: "6vh",
										margin: "1vh 0",
										padding: "0.1vh",
										borderRadius: "0"
									}}
									labelColor={"#FFF"}
									icon={InventoryIcon}
								/>
							</li>
							<li>
								<RaisedButton
									label="Orders"
									labelPosition="before"
									labelStyle={{
										textTransform: "none",
										fontSize: "1vw",
										lineHeight: "100%",
										fontWeight: "200"
									}}
									style={{
										backgroundColor: "transparent",
										margin: "0",
										lineHeight: "8vh"
									}}
									fullWidth={true}
									buttonStyle={{
										backgroundColor: "#4E0264",
										height: "6vh",
										margin: "1vh 0",
										padding: "0.1vh",
										borderRadius: "0"
									}}
									labelColor={"#FFF"}
									icon={ordersIcon}
								/>
							</li>
						</ul>
					</MuiThemeProvider>
				</div>
			);
		}
	}
}
