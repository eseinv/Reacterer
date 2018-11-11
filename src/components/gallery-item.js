import React from "react";

const GalleryItem = props => {
  const listItems = props.list.map(listItem => (
    <li
      key={listItem}
      className="list-group-item"
      onClick={() => props.select(listItem)}
    >
      {listItem}
    </li>
  ));

  return listItems;
};

export { GalleryItem };
