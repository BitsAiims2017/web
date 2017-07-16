import React from "react";
import "../Content.css";
import "./Dashboard.css";
import { Doughnut, Bar, Line, Bubble } from "react-chartjs-2";

var doughnutData = {
	labels: ["Users", "Patients", "Items"],
	datasets: [
		{
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			data: [300, 50, 100],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
		}
	]
};

var barData = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"July",
		"Aug",
		"Oct",
		"Nov",
		"Dec"
	],
	datasets: [
		{
			backgroundColor: [
				"#EB4A44",
				"#EB4475",
				"#EB44BD",
				"#C644EB",
				"#8744EB",
				"#444DEB",
				"#449AEB",
				"#44C4EB",
				"#26AA74",
				"#1CA838",
				"#198211"
			],
			data: [10, 20, 30, 40, 50, 60, 70, 80, 70, 90, 100, 30],
			hoverBackgroundColor: [
				"#EB4A44",
				"#EB4475",
				"#EB44BD",
				"#C644EB",
				"#8744EB",
				"#444DEB",
				"#449AEB",
				"#44C4EB",
				"#26AA74",
				"#1CA838",
				"#198211"
			]
		}
	]
};

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Dashboard">
				<div className="Overview-Container">
					<h1 className="Chart-heading">Overview</h1>
					<Doughnut data={doughnutData} height={200} />
				</div>
				<div className="Users-Container">
					<h1 className="Chart-heading">Users Added</h1>
					<Bar
						data={barData}
						height={70}
						options={{
							maintainAspectRatio: true
						}}
					/>
				</div>
				<div className="Inventory-Container">
					<h1 className="Chart-heading">Inventory Overview</h1>
					<Bubble
						data={barData}
						options={{
							maintainAspectRatio: true
						}}
					/>
				</div>
				<div className="Patients-Container">
					<h1 className="Chart-heading">Patients Overview</h1>
					<Line
						data={barData}
						height={70}
						options={{
							maintainAspectRatio: true,
							fill: false
						}}
					/>
				</div>
			</div>
		);
	}
}
