import React from "react";

export default function ChangeScore(props) {
  function handleClick() {
    let amnt = props.action;
    let num;

    if (amnt === "less") {
      num = -1;
    } else if (amnt === "more") {
      num = 1;
    }
    props.countFunc(num);
  }

  function nameButton() {
    if (props.action === "less") {
      return "Decrease";
    } else if (props.action === "more") {
      return "Increase";
    } else return "nicetry";
  }

  return (
    <div className="text-center">
      <button className="btn btn-info my-1 bstyle" onClick={handleClick}>
        {nameButton()}
      </button>
    </div>
  );
}
