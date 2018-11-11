import React from "react";
import PropTypes from "prop-types";

const ChangeScore = props => {
  const handleClick = () => {
    const amnt = props.action;
    let num;

    if (amnt === "less") {
      num = -1;
    } else if (amnt === "more") {
      num = 1;
    }
    props.countFunc(num);
  };

  const nameButton = () => {
    return props.action === "less" ? "Decrease" : "Increase";
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
