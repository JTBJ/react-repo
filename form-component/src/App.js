import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmedPassword: "",
      email: "",
      errors: [],
    };
  }

  submitForm() {
    console.log("Submitting the form now...");
  }

  getForm() {
    return (
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" />
        <br />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="text" password="confirmPassword" />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" />
        <br />
        <button onClick={this.submitForm}>Sumbit</button>
      </form>
    );
  }

  render() {
    return (
      <div className="App">
        <h2>Create Account</h2>
        {this.getForm()}
      </div>
    );
  }
}

export default App;
