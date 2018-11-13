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
  function Home() {
=======
  // arrow functions don't have their own this by default. No need to use regular
  render() {
>>>>>>> parent of f0f1e34... Imported react-router
    return (
      <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> parent of 82f051c... Style reworks & refactor
          <ManualScore
            manualApply={this.manualCount}
            realCount={this.state.count}
          />
<<<<<<< HEAD
=======
          <hr />
>>>>>>> parent of 82f051c... Style reworks & refactor
        </div>
      </div>
    );
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> parent of 82f051c... Style reworks & refactor
        </div>
      </div>
    );
  }

  // arrow functions don't have their own this by default. No need to use regular
  render() {
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
		  <div>

	hi

		  </div>
	    </Router>

    );
  }
}
// you can use <React.Fragment> to wrap Score, ChangeScore, just in case you don't wanna render more DIVs.

ReactDOM.render(<App />, document.querySelector(".container"));
