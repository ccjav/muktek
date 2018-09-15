import React, { Component } from "react";

class NewTodoForm extends Component {
  todoRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();

    const todoItem = {
      id: Date.now(),
      description: this.todoRef.current.value,
      done: false
    };

    this.props.onCreateTodo(todoItem);
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.todoRef} />
        <button>+</button>
      </form>
    );
  }
}
export default NewTodoForm;
