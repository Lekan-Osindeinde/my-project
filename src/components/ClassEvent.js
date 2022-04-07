import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("Esther is my bae");
  }
  render() {
    return (
      <dvi>
        This is my story
        <button onClick={this.handleClick}>Clicked</button>
      </dvi>
    );
  }
}
export default ClassEvent;
