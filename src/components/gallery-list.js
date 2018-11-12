import React from "react";
import { GalleryItem } from "./gallery-item";

const GalleryList = props => (
  <div className="col-2">
    <div className="btn-group-vertical w-100">
      <GalleryItem
        list={props.itemList}
        select={props.selectItem}
        currentItem={props.currentItem}
      />
    </div>
  </div>
);

export { GalleryList };
