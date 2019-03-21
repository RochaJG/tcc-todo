import React, { Component } from "react";
import Header from "../../components/header/header";
import TodoItem from "../../components/todoItem/todoItem";
import NewTodo from "../../components/newTodo/newTodo";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem("listaTodos")) || []
    };
  }

  removeTodo(todo) {
    console.log("Remove:", todo);
  }

  editTodo(todo) {
    console.log("Edit:", todo);
  }

  doneTodo(todo) {
    console.log("Done:", todo);
  }

  NewTodo(todo) {
    console.log("Done:", todo);
  }

  render() {
    return (
      <div className="todos center-flex">
        <Header />
        <div className="todos center-flex">
          <h1> Lista de Tarefas </h1>
          <NewTodo newTodo={this.newTodo} />
          <ul>
            {this.state.todos.map((todo, idx) => {
              return (
                <TodoItem
                  key={idx}
                  todo={todo}
                  doneTodo={this.doneTodo}
                  editTodo={this.editTodo}
                  removeTodo={this.removeTodo}
                  editable
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
