import React, { Component } from "react";
import Header from "../../components/header/header";
import TodoItem from "../../components/todoItem/todoItem";

class Concluidos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: JSON.parse(localStorage.getItem("listaTodosDone")) || []
    };
  }

  clearDoneTodos = () => {
    this.setState({
      todos: []
    });
    localStorage.setItem("listaTodosDone", JSON.stringify(this.state.todos));
  };

  render() {
    return (
      <div className="center-flex">
        <Header />
        <div className="todos center-flex">
          <h1>
            Tarefas Concluídas
            <button
              className="btn btn-outline-danger"
              onClick={this.clearDoneTodos}
            >
              Limpar
            </button>
          </h1>
          <ul className="item-done">
            {this.state.todos.map((todo, idx) => {
              return <TodoItem key={idx} todo={todo} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Concluidos;
