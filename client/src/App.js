import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
