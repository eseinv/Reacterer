import React, { Component } from "react";
import { GalleryItem } from "./gallery-item";

class GalleryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: ["Item 1", "Item 2", "Item 3"],
      currentItem: null
    };
  }

  selectItem = item => {
    this.setState({ currentItem: item });
  };

  render() {
    return (
      <div className="col-2">
        <ul className="list-group list-group-flush">
          <GalleryItem list={this.state.itemList} select={this.selectItem} />
        </ul>
      </div>
    );
  }
}

export { GalleryList };
