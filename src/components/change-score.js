import React from "react";
import PropTypes from "prop-types";

const ChangeScore = props => {
  // no need to write function in this case
  const handleClick = () => {
    const amnt = props.action; // you don't change this
    let num;

    if (amnt === "less") {
      num = -1;
    } else if (amnt === "more") {
      num = 1;
    }
    props.countFunc(num);
  };

  const nameButton = () => {
    if (props.action === "less") {
      return "Decrease";
    } else if (props.action === "more") {
      return "Increase";
    } else return "nicetry";
    // you can do a ternary here for two conditions.
    // return props.action === "less" ? "Decrease" : "Increase";
    // not sure what you wanted to cover with the 'nicetry' one.
  };

  return (
    <div className="text-center">
      <button className="btn btn-info my-1 bstyle" onClick={handleClick}>
        {nameButton()}
      </button>
    </div>
  );
};

ChangeScore.propTypes = {
  action: PropTypes.string,
  countFunc: PropTypes.func
};

export { ChangeScore };
