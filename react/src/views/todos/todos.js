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

  removeTodo = todo => {
    const todoList = this.state.todos;
    todoList.splice(todoList.indexOf(todo), 1);
    this.setState({
      todos: todoList
    });
    localStorage.setItem("listaTodos", JSON.stringify(todoList));
  };

  editTodo = todo => {
    const todoList = this.state.todos;
    const newTodo = {
      msg: prompt("Informe o novo texto do item:", todo.msg) || todo.msg
    };
    todoList.splice(todoList.indexOf(todo), 1, newTodo);
    this.setState({
      todos: todoList
    });
    localStorage.setItem("listaTodos", JSON.stringify(todoList));
  };

  doneTodo = todo => {
    const todoList = this.state.todos;
    const doneTodos = JSON.parse(localStorage.getItem("listaTodosDone")) || [];
    todoList.splice(todoList.indexOf(todo), 1);

    this.setState({
      todos: todoList
    });
    localStorage.setItem("listaTodos", JSON.stringify(todoList));

    doneTodos.push(todo);
    localStorage.setItem("listaTodosDone", JSON.stringify(doneTodos));
  };

  newTodo = newTodo => {
    const todoList = this.state.todos;
    todoList.unshift(newTodo);
    this.setState({
      todos: todoList
    });
    localStorage.setItem("listaTodos", JSON.stringify(todoList));
  };

  render() {
    return (
      <div className="center-flex">
        <Header />
        <div className="todos center-flex">
          <h1> Lista de Tarefas </h1> <NewTodo newTodo={this.newTodo} />
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
