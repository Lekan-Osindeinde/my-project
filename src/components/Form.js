import { Component } from "react";
import "../App.css";
class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    date: "",
  };
  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
    console.log(this.state.firstname);
  };
  handlelastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  handleDateChange = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fname: this.state.firstname,
      lname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      date: this.state.date,
    });
  };

  render() {
    return (
      <div>
        <h1>Personal Details</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="input"
              onChange={this.handleChange}
              type="text"
              placeholder="first name"
              value={this.state.firstname}
            />
          </div>
          <div>
            <input
              className="input"
              onChange={this.handlelastNameChange}
              type="text"
              placeholder="last name"
              value={this.state.lastname}
            />
          </div>
          <div>
            <input
              className="input"
              onChange={this.handleEmailChange}
              type="email"
              placeholder="Enter your Email"
              value={this.state.email}
            />
          </div>
          <div>
            <input
              className="input"
              onChange={this.handleAddressChange}
              type="text"
              placeholder="Enter your address"
              value={this.state.address}
            />
          </div>
          <div>
            <input
              className="input"
              onChange={this.handlePhoneChange}
              type="tel"
              placeholder="Pnone number"
              value={this.state.phone}
            />
          </div>
          <div>
            <input
              className="input"
              onChange={this.handleDateChange}
              type="date"
              placeholder="date of birth"
              value={this.state.date}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              width: "150px",
              height: "35px",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
