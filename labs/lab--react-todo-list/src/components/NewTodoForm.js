import React, { Component } from "react";

class NewTodoForm extends Component {
  descriptionRef = React.createRef();
  dateRef = React.createRef();
  urgencyRef = React.createRef();

  state = {
    errors: {}
  };

  validate(todoItem) {
    return {
      dueDate: todoItem.dueDate === "" && "Fecha requerida"
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const todoItem = {
      id: Date.now(),
      description: this.descriptionRef.current.value,
      done: false,
      dueDate: this.dateRef.current.value,
      urgent: this.urgencyRef.current.checked
    };

    const errors = this.validate(todoItem);
    //const invalid = Object.keys(errors).length > 0;
    const invalid = false;

    if (!invalid) {
      this.props.onCreateTodo(todoItem);
      event.target.reset();
    } else {
      alert(errors.dueDate);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.descriptionRef} />
        <input type="date" ref={this.dateRef} />
        <label>
          <input type="checkbox" ref={this.urgencyRef} />
          ¿Urgente?
        </label>
        <button>+</button>
      </form>
    );
  }
}
export default NewTodoForm;
