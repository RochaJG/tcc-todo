import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Todos from "./views/todos/todos";
import Concluidos from "./views/concluidos/concluidos";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Todos} />
      <Route path="/concluidos" component={Concluidos} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
