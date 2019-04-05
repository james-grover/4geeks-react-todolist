import React from "react";

import ToDoList from "./todolist.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<ToDoList />
			</div>
		);
	}
}
