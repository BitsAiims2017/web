import React from "react";
import "./Toolbar.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
// Importing Icons
import IconRemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import IconEdit from "material-ui/svg-icons/image/edit";
import $ from "jquery";

// ===========================================

// Defining Icons
const IconsStyles = {
  width: "2.8vh",
  height: "2.8vh",
  color: "whitesmoke",
  lineHeight: "89px"
};
const viewModeIcon = <IconRemoveRedEye style={IconsStyles} />;
const editModeIcon = <IconEdit style={IconsStyles} />;

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(i, e) {
    this.props.selectItem(i);

    var clicked = $(e.target);
    var allToolbarItems = $(".Toolbar li");
    if (allToolbarItems.hasClass("active")) {
      allToolbarItems.removeClass("active");
    }
    if (clicked.prop("tagName") === "LI") {
      clicked.addClass("active");
    }
  }

  render() {
    return (
      <div className="Toolbar-Container">
        <div className="Toolbar">
          <MuiThemeProvider>
            <ul className="user-operations">
              <li
                onClick={this.handleClick.bind(this, "viewmode")}
                onMouseOver={this.handleMouseOver}
                key="viewmode"
                ref="viewmode"
              >
                {viewModeIcon}
              </li>
              <li
                onClick={this.handleClick.bind(this, "editmode")}
                onMouseOver={this.handleMouseOver}
                key="editmode"
                ref="editmode"
              >
                {editModeIcon}
              </li>
            </ul>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
