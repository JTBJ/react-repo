//Chapter two
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //dropping constructor to use another way to specify the state of this component
  constructor(props) {
    super(props);
    this.state = {
      // state = {
      username: "",
      password: "",
      confirmedPassword: "",
      email: "",
      errors: [],
    };
    //method using the constructor to bind state to this component == adding context to this baseline-component
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validatePasswordConfirmationBlur =
      this.validatePasswordConfirmationBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
  }

  //event handler
  submitForm(event) {
    event.preventDefault();
    console.log("Submitting the form now...");
    console.log(event);
  }

  validateUsernameOnBlur(event) {
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({ username, errors });
  }

  //alternative event handler -- used to bind the state to this component
  //the arrow function has the this keyword implicitly bound to the compoonet
  //there is no need to explicitly bind the this keyword
  //notice the removal of the inline and constructor binding techniques
  // validateUsernameOnBlur = (event) => {
  //   console.log("I should validate whatever is in ", event.target.value);
  //   this.setState();
  // };

  //event handler
  //using an alternative
  // validateUsernameOnBlur(event) {
  //   console.log("I should validate whatever is in ", event.target.value);
  //   //???attempting to bind the input to this component??? binding state to this component
  //   //must be used with one of the techniques-inline / constructor binding
  //   this.setState();
  // }

  validatePasswordOnBlur(event) {
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Password", password));
    this.setState({ password, errors });
  }

  validateEmailOnBlur(event) {
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validEmailFormat("Email", email));
    this.setState({ email, errors });
  }

  validateNotEmpty(fieldName, value) {
    return `${fieldName} 'must be filled out.`;
  }

  validEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split("@");
    lhs = lhs || "";
    rhs = rhs || "";
    if (lhs.length <= 0 || rhs.length <= 0) {
      return `${fieldName} must be in standard email format.`;
    }
  }

  validatePasswordConfirmationBlur(event) {
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;
    if (passwordConfirmation !== this.state.password) {
      errors.push("Passwords must match.");
    }
    this.setState({ passwordConfirmation, errors });
  }

  displayErrors() {
    return (
      <div className="errors">
        {this.state.errors.map((err, i) => (
          <p key={`err-${i}`}>{err}</p>
        ))}
      </div>
    );
  }

  //html that is rendered to screen
  getForm() {
    return (
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          //inline binding. Binding the component to the state??? simplest method to add context to baseline-component
          // onBlur={this.validateUsernameOnBlur.bind(this)}
          onBlur={this.validateUsernameOnBlur}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onBlur={this.validatePasswordOnBlur}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="text"
          password="confirmPassword"
          onBlur={this.validatePasswordConfirmationBlur}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onBlur={this.validateEmailOnBlur} />
        <br />
        <button onClick={this.submitForm}>Sumbit</button>
      </form>
    );
  }

  //Render JSX
  render() {
    return (
      <div className="App">
        <h2>Create Account</h2>
        {this.displayErrors()}
        <hr />
        {this.getForm()}
      </div>
    );
  }
}

export default App;
