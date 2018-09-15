import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {
  handleDeleteTodoItem = id => {
    this.props.onDeleteTodoItem(id);
  };

  handleCompletedTodoItem = todoItemId => {
    //alert("hola desde todos list");
    this.props.onCompletedTodoItem(todoItemId);
  };

  render() {
    return (
      <ul className="todosList">
        {this.props.data.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onDelete={this.handleDeleteTodoItem}
            onDone={this.handleCompletedTodoItem}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
