import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Score } from "./components/score";
import { ChangeScore } from "./components/change-score";
import { ManualScore } from "./components/manual-score";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  changeCount = amnt => {
    this.setState({ count: this.state.count + amnt });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  manualCount = amnt => {
    this.setState({ count: parseInt(amnt, 10) });
  };

  // arrow functions don't have their own this by default. No need to use regular
  render() {
    return (
      <div>
        <Score score={this.state.count} reset={this.resetCount} />
        <ChangeScore action="more" countFunc={this.changeCount} />
        <ChangeScore action="less" countFunc={this.changeCount} />
        <ManualScore
          manualApply={this.manualCount}
          realCount={this.state.count}
        />
      </div>
    );
  }
}
// you can use <React.Fragment> to wrap Score, ChangeScore, just in case you don't wanna render more DIVs.

ReactDOM.render(<App />, document.querySelector(".container"));
