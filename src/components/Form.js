import { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
  };
  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
    console.log(this.state.firstname);
  };
  render() {
    return (
      <div>
        Form
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="first name"
            value={this.state.firstname}
          />
        </form>
      </div>
    );
  }
}
export default Form;
