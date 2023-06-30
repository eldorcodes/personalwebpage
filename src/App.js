import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*-----pages-----*/
import { Home2 } from "./Home2";
import { NotFound } from "./404";
import BookSearchEngine from "./component/Portfolio/BookSearchEngine";
import TodoList from "./component/Portfolio/TodoList";
import './firebase';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home2} />
            <Route exact path="/book" component={BookSearchEngine} />
            <Route exact path="/todo" component={TodoList} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
