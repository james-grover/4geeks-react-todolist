import React from "react";

//create your first component
export default class ToDoList extends React.Component {
	constructor() {
		super();
		this.state = {
			todolist: [
				{ title: "Wash the dog", id: "1", done: "false" },
				{ title: "make the bed", id: "2", done: "false" },
				{ title: "Eat", id: "3", done: "false" },
				{ title: "Wash my hands", id: "4", done: "false" }
			],
			taskInput: ""
		};
	}

	render() {
		var TaskList = this.state.todolist.map(tasks => {
			return tasks;
		});

		return (
			<div id="myDIV" className="header">
				<h2>My To Do List</h2>
				<ul>
					<li>
						<input
							type="text"
							id="myInput"
							placeholder={TaskList[0].title}
						/>
					</li>
					<li>
						<input
							type="text"
							id="myInput"
							placeholder={TaskList[1].title}
						/>
					</li>
					<li>
						<input
							type="text"
							id="myInput"
							placeholder={TaskList[2].title}
						/>
					</li>
					<li>
						<input
							type="text"
							id="myInput"
							placeholder={TaskList[3].title}
						/>
					</li>
				</ul>
			</div>
		);
	}
}
