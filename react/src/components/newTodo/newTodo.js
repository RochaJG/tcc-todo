import React, { Component } from "react";
import "./newTodo.css";

class NewTodo extends Component {
  newTodo = () => {
    this.props.newTodo(this.state.newTodo);
  };

  updateInputValue = evt => {
    this.setState({
      newTodo: evt.target.value
    });
  };

  render() {
    return (
      <form className="todo-input">
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.updateInputValue}
          placeholder="Digite um todo"
        />
        <button type="submit" className="btn btn-success" onClick="newTodo">
          Adicionar
        </button>
      </form>
    );
  }
}

export default NewTodo;
