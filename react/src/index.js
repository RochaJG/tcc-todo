import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Todos from "./views/todos/todos";
import Concluidos from "./views/concluidos/concluidos";

import dados from "./assets/dados.json";
localStorage.setItem("listaTodos", JSON.stringify(dados));
localStorage.setItem("listaTodosDone", "[]");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/todos" exact component={Todos} />
      <Route path="/concluidos" component={Concluidos} />
      <Redirect from="/" to="/todos" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
