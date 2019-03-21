import React, { Component } from "react";
import Header from "../../components/header/header";
import TodoItem from "../../components/todoItem/todoItem";

const todo = {
  msg: "Teste"
};

class Todos extends Component {
  render() {
    return (
      <div className="todos center-flex">
        <Header />
        <div className="todos center-flex">
          <h1> Lista de Tarefas </h1>
          <ul>
            <TodoItem todo={todo} editable />
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
