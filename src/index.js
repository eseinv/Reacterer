import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Score } from "./components/score";
import { ChangeScore } from "./components/change-score";
import { ManualScore } from "./components/manual-score";
import { GalleryList } from "./components/gallery-list";
import { GalleryPreview } from "./components/gallery-preview";
import { GalleryItems } from "./jsonfile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      itemList: GalleryItems,
      currentItem: GalleryItems[1]
    };
  }

  selectItem = item => {
    this.setState({ currentItem: item });
  };

  changeCount = amnt => {
    this.setState({ count: this.state.count + amnt });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  manualCount = amnt => {
    this.setState({ count: parseInt(amnt, 10) });
  };

  // arrow functions don't have their own this by default. No need to use regular
  render() {
    return (
      <div>
        <div className="counter">
          <h1 className="display-5 text-capitalize"> counter </h1>
          <p>
            Use the buttons to count up or down. Click the text to reset count
            to 0. Use the input to preset a value.
          </p>
          <hr />
          <Score score={this.state.count} reset={this.resetCount} />
          <ChangeScore action="more" countFunc={this.changeCount} />
          <ChangeScore action="less" countFunc={this.changeCount} />
          <ManualScore
            manualApply={this.manualCount}
            realCount={this.state.count}
          />
          <hr />
        </div>

        <div className="gallery">
          <h1 className="display-5 mt-5 text-capitalize"> gallery browser </h1>
          <p>Select an item and it will appear in the gallery preview. </p>
          <hr />
          <div className="row">
            <GalleryList
              selectItem={this.selectItem}
              itemList={this.state.itemList}
              currentItem={this.state.currentItem}
            />
            <GalleryPreview currentItem={this.state.currentItem} />
          </div>
        </div>
      </div>
    );
  }
}
// you can use <React.Fragment> to wrap Score, ChangeScore, just in case you don't wanna render more DIVs.

ReactDOM.render(<App />, document.querySelector(".container"));
