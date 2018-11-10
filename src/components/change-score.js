import React, { Component } from "react";

export default function ChangeScore(props) {
  function handleClick() {
    let actn = props.action;
    if (actn == "less") {
      var num = -1;
    } else if (actn == "more") {
      var num = 1;
    }
    props.countFunc(num);
  }
  return <button onClick={handleClick}>Button</button>;
}
