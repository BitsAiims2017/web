import React from "react";
import "./Toolbar.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
// Importing Icons
import IconAdd from "material-ui/svg-icons/content/add";
import IconCreate from "material-ui/svg-icons/content/create";
import IconDeleteSweep from "material-ui/svg-icons/content/delete-sweep";
import IconPeople from "material-ui/svg-icons/social/people";
import IconSearch from "material-ui/svg-icons/action/search";

// ===========================================

// Defining Icons
const IconsStyles = {
  width: "2.8vh",
  height: "2.8vh",
  color: "whitesmoke",
  lineHeight: "89px"
};
const addUserIcon = <IconAdd style={IconsStyles} />;
const editUserIcon = <IconCreate style={IconsStyles} />;
const deleteUserIcon = <IconDeleteSweep style={IconsStyles} />;
const allUsersIcon = <IconPeople style={IconsStyles} />;
const findUserIcon = <IconSearch style={IconsStyles} />;

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleClick(i, e) {
    this.props.selectItem(i);
  }

  handleMouseOver() {}

  render() {
    return (
      <div className="Toolbar-Container">
        <div className="Toolbar">
          <MuiThemeProvider>
            <ul className="user-operations">
              <li
                onClick={this.handleClick.bind(this, "allusers")}
                onMouseOver={this.handleMouseOver}
                key="allusers"
              >
                {allUsersIcon}
              </li>
              <li
                onClick={this.handleClick.bind(this, "findusers")}
                onMouseOver={this.handleMouseOver}
                key="finduser"
              >
                {findUserIcon}
              </li>
              <li
                onClick={this.handleClick.bind(this, "adduser")}
                onMouseOver={this.handleMouseOver}
                key="adduser"
              >
                {addUserIcon}
              </li>
            </ul>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
