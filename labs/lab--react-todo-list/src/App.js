import React, { Component } from "react";
import Header from "./components/Header";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";

class App extends Component {
  state = {
    todos: [
      {
        id: "1",
        description: "Primer todo",
        done: false,
        urgent: true
      },
      {
        id: "2",
        description: "Segundo todo",
        done: true,
        urgent: false
      }
    ]
  };

  handleCreateTodo = todoItem => {
    const updatedTodoList = [...this.state.todos, todoItem];

    this.setState({
      todos: updatedTodoList
    });
  };

  handleDeleteTodo = todoItemId => {
    const updatedTodoList = this.state.todos.filter(
      todoItem => todoItem.id !== todoItemId
    );

    this.setState({
      todos: updatedTodoList
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NewTodoForm onCreateTodo={this.handleCreateTodo} />
        <TodosList
          data={this.state.todos}
          onDeleteTodoItem={this.handleDeleteTodo}
        />
      </div>
    );
  }
}

export default App;
