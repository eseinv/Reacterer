import React from "react";
import { GalleryItem } from "./gallery-item";

const GalleryList = props => (
  <div className="col-2">
    <ul className="list-group list-group-flush">
      <GalleryItem
        list={props.itemList}
        select={props.selectItem}
        currentItem={props.currentItem}
      />
    </ul>
  </div>
);

export { GalleryList };
