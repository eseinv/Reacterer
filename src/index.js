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

<<<<<<< HEAD
<<<<<<< HEAD
  function Home() {
=======
  // arrow functions don't have their own this by default. No need to use regular
  render() {
>>>>>>> parent of f0f1e34... Imported react-router
=======
  render() {
>>>>>>> parent of 6820f47... Updates
    return (
      <div>
        <div className="counter card p-3">
          <h1 className="display-5 text-capitalize"> counter </h1>
          <p>
            Use the buttons to count up or down. Click the text to reset count
            to 0. Use the input to preset a value.
          </p>
          <div className="card-body">
            <Score score={this.state.count} reset={this.resetCount} />
            <div className="row justify-content-around">
              <div className="col-6 text-center">
                <ChangeScore action="less" countFunc={this.changeCount}>
                  Decrease
                </ChangeScore>
                <ChangeScore action="more" countFunc={this.changeCount}>
                  Increase
                </ChangeScore>
              </div>
            </div>
            <ManualScore
              manualApply={this.manualCount}
              realCount={this.state.count}
            />
          </div>
        </div>

        <div className="gallery card p-3 mt-3">
          <h1 className="display-5 text-capitalize"> gallery browser </h1>
          <p>Select an item and it will appear in the gallery preview. </p>
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
