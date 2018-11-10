import React from "react";

export default function Score(props) {
  return (
    <div className="text-center text-primary h2">
      {" "}
      Current count is: {props.score}{" "}
    </div>
  );
}
