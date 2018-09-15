import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {
  handleDeleteTodoItem = id => {
    this.props.onDeleteTodoItem(id);
  };

  render() {
    return (
      <ul>
        {this.props.data.map(todo => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
            onDelete={this.handleDeleteTodoItem}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
