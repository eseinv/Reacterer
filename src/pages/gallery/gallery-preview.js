import React from "react";
import PropTypes from "prop-types";

const GalleryPreview = props => (
  <div className="col-8 border rounded p-4">{props.currentItem}</div>
);

GalleryPreview.propTypes = {
  currentItem: PropTypes.string
};

export { GalleryPreview };
