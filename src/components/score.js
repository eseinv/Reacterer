import React from "react";

export default function Score(props) {
  function handleClick() {
    props.reset();
  }
  return (
    <div
      className="text-center text-primary h2 mb-3 hand"
      onClick={handleClick}
    >
      Current count is: {props.score}
    </div>
  );
}
