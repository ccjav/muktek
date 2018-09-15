import React, { Component } from "react";

class TodoItem extends Component {
  handleClick = () => {
    const { todoItem, onDelete } = this.props;
    onDelete(todoItem.id);
  };

  handleCheckboxChange = event => {
    const { todoItem, onDone } = this.props;
    onDone(todoItem.id);
  };

  render() {
    const { todoItem } = this.props;
    let nowDate = new Date();
    let itemDate = new Date(todoItem.dueDate);

    const done_class = todoItem.done ? "todoItem__done" : "";
    const urgent_class = todoItem.urgent ? "todoItem__urgent" : "";
    const expired_class = itemDate < nowDate ? "todoItem__expired" : "";

    return (
      <li className={`todoItem ${expired_class} ${done_class} ${urgent_class}`}>
        <div>
          <input
            type="checkbox"
            checked={todoItem.done}
            onChange={this.handleCheckboxChange}
          />
          {todoItem.description}
        </div>

        {todoItem.dueDate}

        <button onClick={this.handleClick}>X</button>
      </li>
    );
  }
}
export default TodoItem;
