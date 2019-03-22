import React, { Component } from "react";
import "./newTodo.css";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  newTodo = () => {
    this.props.newTodo({ msg: this.state.newTodo });
    this.setState({
      newTodo: ""
    });
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
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.newTodo}
        >
          Adicionar
        </button>
      </form>
    );
  }
}

export default NewTodo;
