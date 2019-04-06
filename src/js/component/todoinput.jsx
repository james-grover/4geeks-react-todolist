import React from "react";

function TodoInput() {
	return (
		<div className="todo-item">
			<input
				type="text"
				id="myInput"
				name="myInput"
				maxLength="100"
				placeholder="Enter text Here"
			/>{" "}
		</div>
	);
}

export default TodoInput;
