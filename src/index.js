import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Counter } from "./pages/counter";
import { Gallery } from "./pages/gallery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dashpage } from "./pages/dashpage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" href="#">
              <Link className="nav-link" to="/">
                Reacterer
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/counter">
                    Counter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Dashpage} />
          <Route path="/counter" component={Counter} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
