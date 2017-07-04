import React from "react";
import "./AppBar.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
// Import Icons
import IconShoppingCart from "material-ui/svg-icons/action/shopping-cart";
import IconPeople from "material-ui/svg-icons/social/people";
import IconStore from "material-ui/svg-icons/action/store";
import IconLocalHospital from "material-ui/svg-icons/maps/local-hospital";
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
const dashboardIcon = <IconDashboard style={IconsStyles} />;
const usersIcon = <IconPeople style={IconsStyles} />;
const InventoryIcon = <IconStore style={IconsStyles} />;
const ordersIcon = <IconShoppingCart style={IconsStyles} />;
const patientsIcon = <IconLocalHospital style={IconsStyles} />;

// Menu styles
const menuStyles = {
	padding: "0",
	height: "6vh",
	width: "inherit",
	background: "none"
};

// Class AppBar
export default class AppBar extends React.Component {
	componentWillMount() {
		injectTapEventPlugin();
	}

	handleClick(i, e) {
		// On click, index corresponding to key of clicked thing is sent to  App.js, stored as a state. From there, it'll be sent to Content.js via states.
		this.props.select(i);
	}

	renderUserTab() {
		if (this.props.userInfo.role === '"admin"') {
			return (
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
							backgroundColor: "#2B0049",
							height: "6vh",
							margin: "1vh 0",
							padding: "0.1vh",
							borderRadius: "0"
						}}
						labelColor={"#FFF"}
						icon={usersIcon}
						onClick={this.handleClick.bind(this, "users")}
						key="users"
						ref="users"
					/>
				</li>
			);
		}
	}

	render() {
		return (
			<div className="AppBar">
				<ul className="user-information-list">
					<li>
						<span>Username : </span>
						<span className="username-text">
							{this.props.userInfo.username.replace(/^"/, "").replace(/"$/, "")}
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
									backgroundColor: "#761303",
									height: "6vh",
									margin: "1vh 0",
									padding: "0.1vh",
									borderRadius: "0"
								}}
								labelColor={"#FFF"}
								icon={dashboardIcon}
								onClick={this.handleClick.bind(this, "dashboard")}
								key="dashboard"
							/>
						</li>
						<li>
							<RaisedButton
								label="Patients"
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
									backgroundColor: "#00492A",
									height: "6vh",
									margin: "1vh 0",
									padding: "0.1vh",
									borderRadius: "0"
								}}
								labelColor={"#FFF"}
								icon={patientsIcon}
								onClick={this.handleClick.bind(this, "patients")}
								key="patients"
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
									backgroundColor: "#492E00",
									height: "6vh",
									margin: "1vh 0",
									padding: "0.1vh",
									borderRadius: "0"
								}}
								labelColor={"#FFF"}
								icon={InventoryIcon}
								onClick={this.handleClick.bind(this, "inventory")}
								key="inventory"
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
									backgroundColor: "#002F49",
									height: "6vh",
									margin: "1vh 0",
									padding: "0.1vh",
									borderRadius: "0"
								}}
								labelColor={"#FFF"}
								icon={ordersIcon}
								onClick={this.handleClick.bind(this, "orders")}
								key="orders"
							/>
						</li>
						{this.renderUserTab()}
            <li className="menu">
              <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  anchorOrigin={{ horizontal: "right", vertical: "top" }}
                  targetOrigin={{ horizontal: "right", vertical: "top" }}
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

                  <MenuItem
                    primaryText="Feedback"
                    onClick={this.handleClick.bind(this, "feedback")}
                    key="feedback"
                  />
                  <MenuItem
                    primaryText="About"
                    onClick={this.handleClick.bind(this, "about")}
                    key="about"
                  />
                  <MenuItem
                    primaryText="Shortcuts"
                    onClick={this.handleClick.bind(this, "shortcuts")}
                    key="shortcuts"
                  />
                  <MenuItem
                    primaryText="Log out"
                    onClick={this.props.forgetUserInfo}
                  />
                </IconMenu>
              </MuiThemeProvider>
            </li>
					</ul>
				</MuiThemeProvider>
			</div>
		);
	}
}
