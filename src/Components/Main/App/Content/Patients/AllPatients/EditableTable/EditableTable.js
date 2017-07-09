import React from "react";
import "./EditableTable.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import EditTable from "material-ui-table-edit";
const getMuiTheme = require("material-ui/styles/getMuiTheme").default;
const baseTheme = require("material-ui/styles/baseThemes/darkBaseTheme");

const headers = [
	{ value: "ID", type: "TextField", width: 80 },
	{ value: "Name", type: "TextField" },
	{ value: "Username", type: "TextField" },
	{ value: "Password", type: "TextField" },
	{ value: "Role", type: "TextField" }
];

var rows = [];

export default class EditableTable extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.getAllUserData = this.getAllUserData.bind(this);
	}

	onChange(row) {
		console.log(row);
	}

	getAllUserData() {
		this.props.getRequest("http://localhost:2000/users/", res => {
			for (var i = 0, upperLimit = res.length; i < upperLimit; i += 1) {
				res[i].date = `${res[i].joined.day} / ${res[i].joined.month +
					1} / ${res[i].joined.year} `; // - ${res[i].joined.hour}:${res[i].joined.minute}:${res[i].joined.second}`;
				res[i].id = i + 1;
			}
			rows = [...res];
		});
	}

	componentDidMount() {
		this.getAllUserData();
	}

	render() {
		return (
			<div className="EditableTable">
				<MuiThemeProvider>
					<EditTable
						onChange={this.onChange}
						rows={rows}
						headerColumns={headers}
						enableDelete={true}
					/>
				</MuiThemeProvider>
			</div>
		);
	}
}
