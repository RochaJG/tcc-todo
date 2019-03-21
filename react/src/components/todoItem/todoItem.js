import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    if (this.props.editable) {
      return (
        <li>
          <button class="btn btn-danger" onClick="{removeTodo}">
            X
          </button>
          <button class="btn btn-warning" onClick="{editTodo}">
            {" "}
            Edit
          </button>
          <span class="todo-text">{this.props.todo.msg}</span>
          <button class="btn btn-success" onClick="{doneTodo}">
            {" "}
            OK
          </button>
        </li>
      );
    } else {
      return (
        <li>
          <span class="todo-text">{this.props.todo.msg}</span>
        </li>
      );
    }
  }
}

export default TodoItem;
