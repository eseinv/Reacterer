import React, { Component } from "react";

class ManualScore extends Component {
  constructor(props) {
    super(props);

    this.state = { inputTerm: "" };
  }

  handleChange = inputTerm => {
    this.setState({ inputTerm: inputTerm.replace(/\D/, "") });
  };

  applyCount = () => {
    var amnt = this.state.inputTerm;
    if (amnt === "") {
      amnt = this.props.realCount;
    }
    this.props.manualApply(amnt);
  };

  render() {
    return (
      <div className="text-center">
        <div className="input-group mb-3 w-25">
          <input
            className="form-control"
            type="text"
            placeholder="Enter count to preset..."
            value={this.state.inputTerm}
            onChange={event => this.handleChange(event.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={this.applyCount}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// ManualScore.propTypes = {
//   manualApply: PropTypes.func
// };

export { ManualScore };
