import React, { Component } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";

class App extends Component {
  state = {
    selectedSection: "All tasks",
    todos: [
      {
        id: "1",
        description: "Primer todo",
        done: false,
        urgent: true,
        dueDate: "2018-09-28"
      },
      {
        id: "2",
        description: "Segundo todo",
        done: true,
        urgent: false,
        dueDate: "2018-09-21"
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

  handleCompleteTodo = todoItemId => {
    const updatedTodoList = this.state.todos.map(todoItem => {
      if (todoItem.id === todoItemId) {
        todoItem.done = !todoItem.done;
      }
      return todoItem;
    });

    this.setState({
      todos: updatedTodoList
    });
  };

  handleSelectSection = selectedSection => {
    this.setState({
      selectedSection
    });
  };

  filterTodos() {
    return this.state.todos.filter(todo => {
      if (this.state.selectedSection === "All tasks") {
        return true;
      } else if (this.state.selectedSection === "Complete") {
        return todo.done === true;
      } else if (this.state.selectedSection === "Incomplete") {
        return todo.done === false;
      }
    });
  }

  render() {
    const todos = this.filterTodos();

    return (
      <div className="App">
        <Header />
        <NavBar onSectionSelection={this.handleSelectSection} />
        <NewTodoForm onCreateTodo={this.handleCreateTodo} />
        <TodosList
          data={todos}
          onDeleteTodoItem={this.handleDeleteTodo}
          onCompletedTodoItem={this.handleCompleteTodo}
        />
      </div>
    );
  }
}

export default App;
