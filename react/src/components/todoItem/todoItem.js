import React, { Component } from "react";

class TodoItem extends Component {
  removeTodo = () => {
    this.props.removeTodo(this.props.todo);
  };

  editTodo = () => {
    this.props.editTodo(this.props.todo);
  };

  doneTodo = () => {
    this.props.doneTodo(this.props.todo);
  };

  render() {
    if (this.props.editable) {
      return (
        <li>
          <button className="btn btn-danger" onClick={this.removeTodo}>
            X
          </button>
          <button className="btn btn-warning" onClick={this.editTodo}>
            Edit
          </button>
          <span className="todo-text">{this.props.todo.msg}</span>
          <button className="btn btn-success" onClick={this.doneTodo}>
            OK
          </button>
        </li>
      );
    } else {
      return (
        <li>
          <span className="todo-text">{this.props.todo.msg}</span>
        </li>
      );
    }
  }
}

export default TodoItem;
