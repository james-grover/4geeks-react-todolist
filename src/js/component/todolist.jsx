import React from "react";
import TodoItem from "./todoitem.jsx";
import todosData from "./todosData.js";

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			todosData
		};
	}

	render() {
		const todoItems = this.state.todosData.map(item => (
			<TodoItem key={item.id} item={item} />
		));

		return (
			<div className="todo-list">
				<h1>todos</h1>
				{todoItems}
			</div>
		);
	}
}

export default TodoList;
