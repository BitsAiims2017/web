import React from "react";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import RemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import PersonAdd from "material-ui/svg-icons/social/person-add";
import ContentLink from "material-ui/svg-icons/content/link";
import IconSettings from "material-ui/svg-icons/action/settings";
import Divider from "material-ui/Divider";
import ContentCopy from "material-ui/svg-icons/content/content-copy";
import Download from "material-ui/svg-icons/file/file-download";
import Delete from "material-ui/svg-icons/action/delete";
import FontIcon from "material-ui/FontIcon";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const settingsIcon = <IconSettings />;
const style = {
  paper: {
    display: "inline-block",
    float: "left",
    margin: "16px 32px 16px 0"
  },
  rightIcon: {
    textAlign: "center",
    lineHeight: "12px"
  }
};

const Example = () =>
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <Paper style={style.paper}>
        <Menu>
          <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
          <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
          <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
          <Divider />
          <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
          <MenuItem primaryText="Download" leftIcon={<Download />} />
          <Divider />
          <MenuItem primaryText="Remove" leftIcon={<Delete />} />
        </Menu>
      </Paper>
      <Paper style={style.paper}>
        <Menu>
          <MenuItem primaryText="Clear Config" />
          <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
          <MenuItem primaryText="Project" rightIcon={settingsIcon} />
          <MenuItem primaryText="Workspace" rightIcon={settingsIcon} />
          <MenuItem
            primaryText="Paragraph"
            rightIcon={<b style={style.rightIcon}>¶</b>}
          />
          <MenuItem
            primaryText="Section"
            rightIcon={<b style={style.rightIcon}>§</b>}
          />
        </Menu>
      </Paper>
    </div>
  </MuiThemeProvider>;

export default Example;
