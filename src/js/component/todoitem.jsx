import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" />
			<p>{props.item.text}</p>
		</div>
	);
}

//console.log(TodoItem);

TodoItem.propTypes = {
	item: PropTypes.object
};

export default TodoItem;
