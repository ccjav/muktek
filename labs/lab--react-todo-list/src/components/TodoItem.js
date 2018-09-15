import React, { Component } from "react";

class TodoItem extends Component {
  handleClick = () => {
    const { todoItem, onDelete } = this.props;
    onDelete(todoItem.id);
  };

  render() {
    const { todoItem } = this.props;

    return (
      <li>
        <span>{todoItem.done}</span>
        {todoItem.description}
        <button onClick={this.handleClick}>X</button>
      </li>
    );
  }
}
export default TodoItem;
