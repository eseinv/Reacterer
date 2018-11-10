import React from "react";
import PropTypes from "prop-types";

// cleaner way to write functional components
const Score = props => (
  <div
    className="text-center text-primary h2 mb-3 hand"
    onClick={() => props.reset()}
  >
    Current count is: {props.score}
  </div>
);

// always define props if you pass them like this. When you mess up, it'll warn you in console
Score.propTypes = {
  score: PropTypes.number,
  reset: PropTypes.func
};

// export func. components like this
export { Score };
