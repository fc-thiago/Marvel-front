import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Characters from "./composants/Characters";
import "./App.css";
import Comics from "./composants/Comics";
import Marvel from "./composants/Marvel";

function App() {
  return (
    <Router>
      MARVEL
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/">
          <Marvel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
