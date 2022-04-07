import { Component } from "react";
class Message extends Component {
  render() {
    return (
      <h1>
        Message: {this.props.messageContent} {this.props.messageCode}
      </h1>
    );
  }
}

export default Message;
