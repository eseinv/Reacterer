import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Score } from "./components/score";
import { ChangeScore } from "./components/change-score";
import { ManualScore } from "./components/manual-score";
import { GalleryList } from "./components/gallery-list";
import { GalleryPreview } from "./components/gallery-preview";
import { GalleryItems } from "./jsonfile";
import { BasicExample } from "./components/basic-example";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/gallery" component={Gallery} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Counter() {
  return (
    <div className="counter card p-3 d-none">
      <h1 className="display-5 text-capitalize"> counter </h1>
      <p>
        Use the buttons to count up or down. Click the text to reset count to 0.
        Use the input to preset a value.
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
  );
}
function Gallery() {
  return (
    <div className="gallery card p-3 mt-3 d-none">
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
  );
}

export { BasicExample };
