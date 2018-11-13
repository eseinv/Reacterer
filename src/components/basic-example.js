import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Score } from "./score";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(props) {
  return (
    <div>
      <Score score="2" />
    </div>
  );
}

export { BasicExample };
