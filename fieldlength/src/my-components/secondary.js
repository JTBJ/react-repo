import React, { Component } from "react";

class Secondary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "",
      pass99: false,
    };
    this.countTextHandler = this.countTextHandler.bind(this);
  }

  countTextHandler(event) {
    this.words = event.target.value;
    this.setState();
    console.log(this.words.length);

    // while (this.pass99 && this.words.length < 99) {
    //   this.pass99 = true;
    //   this.activateButton(event);
    // }
  }

  activateButton(event) {
    if (this.words.length <= 99) {
      this.pass99 = false;
    } else {
      this.pass99 = true;
    }
    return this.pass99;
  }

  render() {
    return (
      <div className="App">
        <textarea className="textarea" onInput={this.countTextHandler}>
          {this.words}
        </textarea>
        <button disabled={this.activateButton()}>Submit</button>
      </div>
    );
  }
}

export default Secondary;
