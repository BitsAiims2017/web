import React from "react";
import "./ViewTable.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DataTables from "material-ui-datatables";
import low from "lowdb";
const fakeDB = low();

const TABLE_COLUMNS_SORT_STYLE = [
  {
    key: "id",
    label: "ID",
    sortable: true,
    style: {
      width: "80px"
    }
  },
  {
    key: "name",
    label: "Name",
    sortable: true
  },
  {
    key: "age",
    label: "Age",
    sortable: true
  },
  {
    key: "blood_group",
    label: "Blood Group",
    sortable: true
  },
  {
    key: "date",
    label: "Date Added",
    sortable: true
  }
];

export default class ViewTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleRowSizeChange = this.handleRowSizeChange.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleData = this.handleData.bind(this);
    this.getAllPatientData = this.getAllPatientData.bind(this);
    this.state = {
      data: [],
      currentPage: 1,
      rowSize: 8,
      total: 0,
      sort: "",
      order: "",
      filter: "",
      activeItem: ""
    };
  }

  getAllPatientData() {
    this.props.getRequest("http://localhost:2000/patients", res => {
      for (var i = 0, upperLimit = res.length; i < upperLimit; i += 1) {
        res[i].date = `${res[i].joined.day} / ${res[i].joined.month +
          1} / ${res[i].joined.year} `; // - ${res[i].joined.hour}:${res[i].joined.minute}:${res[i].joined.second}`;
        res[i].id = i + 1;
      }
      console.log(res)
      fakeDB
        .defaults({
          data: [...res.patients]
        })
        .value();
    }, {page: this.state.currentPage, size: 100});
  }

  handleData(page, perPage, sort, order, filter, callback) {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    if (filter !== "") {
      const pattern = new RegExp(filter.toLowerCase());
      setTimeout(() => {
        const result = {
          count: fakeDB
            .get("data")
            .filter(data => {
              return pattern.test(data.name.toLowerCase());
            })
            .size()
            .value(),
          data: fakeDB
            .get("data")
            .filter(data => {
              return pattern.test(data.name.toLowerCase());
            })
            .orderBy([sort], [order])
            .slice(start, end)
            .value()
        };
        callback(result);
      }, 200);
    } else {
      setTimeout(() => {
        const result = {
          count: fakeDB.get("data").size().value(),
          data: fakeDB
            .get("data")
            .orderBy([sort], [order])
            .slice(start, end)
            .value()
        };
        callback(result);
      }, 100);
    }
  }

  componentWillMount() {
    this.getAllPatientData();
    this.handleData(
      this.state.currentPage,
      this.state.rowSize,
      this.state.sort,
      this.state.order,
      this.state.filter,
      result => {
        this.setState({
          total: result.count,
          data: result.data
        });
      }
    );
  }

  handleSortOrderChange(key, order) {
    this.handleData(
      this.state.currentPage,
      this.state.rowSize,
      key,
      order,
      this.state.filter,
      result => {
        this.setState({
          total: result.count,
          data: result.data,
          sort: key,
          order: order
        });
      }
    );
  }

  handleFilterValueChange(value) {
    const page = 1;
    this.handleData(
      page,
      this.state.rowSize,
      this.state.sort,
      this.state.order,
      value,
      result => {
        this.setState({
          total: result.count,
          data: result.data,
          filter: value,
          currentPage: page
        });
      }
    );
  }

  handlePreviousPageClick() {
    const page = this.state.currentPage - 1;
    this.handleData(
      page,
      this.state.rowSize,
      this.state.sort,
      this.state.order,
      this.state.filter,
      result => {
        this.setState({
          total: result.count,
          data: result.data,
          currentPage: page
        });
      }
    );
  }

  handleNextPageClick() {
    const page = this.state.currentPage + 1;
    this.handleData(
      page,
      this.state.rowSize,
      this.state.sort,
      this.state.order,
      this.state.filter,
      result => {
        this.setState({
          total: result.count,
          data: result.data,
          currentPage: page
        });
      }
    );
  }

  handleRowSizeChange(index, rowSize) {
    let page = this.state.currentPage;
    if ((page - 1) * rowSize > this.state.total) {
      page = 1;
    }
    this.handleData(
      page,
      rowSize,
      this.state.sort,
      this.state.order,
      this.state.filter,
      result => {
        this.setState({
          total: result.count,
          data: result.data,
          currentPage: page,
          rowSize: rowSize
        });
      }
    );
  }

  handleRowClick() {
    console.log("Clicked!")
  }

  render() {
    return (
      <div className="ViewTable">
        <MuiThemeProvider>
          <DataTables
            title={"Patients"}
            titleStyle={{
              fontSize: "1.5vw",
              fontFamily: "'Roboto', sans-serif",
              color: "rgb(0, 111, 51)",
              fontWeight: "200",
              textAlign: "center",
              overflow: "hidden"
            }}
            height={"auto"}
            selectable={true}
            showRowHover={true}
            columns={TABLE_COLUMNS_SORT_STYLE}
            data={this.state.data}
            showCheckboxes={false}
            showHeaderToolbar={true}
            onCellClick={this.handleCellClick}
            onCellDoubleClick={this.handleCellDoubleClick}
            onFilterValueChange={this.handleFilterValueChange}
            onNextPageClick={this.handleNextPageClick}
            onPreviousPageClick={this.handlePreviousPageClick}
            onSortOrderChange={this.handleSortOrderChange}
            onRowSizeChange={this.handleRowSizeChange}
            onRowHover={this.handleRowClick}
            page={this.state.currentPage}
            count={this.state.total}
            rowSize={this.state.rowSize}
            rowSizeList={[5, 8]}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
