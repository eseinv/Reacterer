import React, { Component } from "react";
import ReactDOM from "react-dom";
import Score from "./components/score";
import ChangeScore from "./components/change-score";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.changeCount = this.changeCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  changeCount(actn) {
    this.setState({ count: this.state.count + actn });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <Score score={this.state.count} reset={this.resetCount} />
        <ChangeScore action="more" countFunc={this.changeCount} />
        <ChangeScore action="less" countFunc={this.changeCount} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
