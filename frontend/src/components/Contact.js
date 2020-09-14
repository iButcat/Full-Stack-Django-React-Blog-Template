import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

const backgroundImage = require("../images/blog_post.jpg")

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  message: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  messageError: "",
}

export default class Contact extends Component {
  constructor(props) {
    super (props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  onChangeFirstName(e) {
    this.setState({ first_name: e.target.value })
  }

  onChangeLastName(e) {
    this.setState({ last_name: e.target.value })
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeMessage(e) {
    this.setState({ message: e.target.value })
  }

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.firstName) {
      firstNameError = "First name can't be empty";
    }

    if (!this.state.lastName) {
      lastNameError = "Last name can't be empty";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.message) {
      messageError = "Message can't be empty";
    }

    if (firstNameError || lastNameError || emailError || messageError) {
      this.setState({ firstNameError, lastNameError, emailError, messageError })
      return false;
    }
    return true;
  };

  onSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
    const contactObject = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      message: this.state.message
    };
    axios.post(`${process.env.REACT_APP_API_URL}/api/contact/`, contactObject)
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
    this.setState({ first_name: "", last_name: "", email: "", message: "" })
  };

  render() {
    return (
  <div>
    <Header
      styling={{ backgroundImage: `url(${backgroundImage})`}}
      title="Contact"
      text=" Lorem Ipsum has been the industry's standard dummy"
      />
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <p>Want to get in touch? Fill out the form below to send me a message
          and I will get back to you as soon as possible!</p>
        <form name="sentMessage" id="contactForm" novalidate>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>First Name</label>
              <input
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                type="text"
                className="form-control"
                placeholder="First name"
                id="name"
                />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Last Name</label>
              <input
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                type="email"
                className="form-control"
                placeholder="Last Name"
                id="email"
                />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group col-xs-12 floating-label-form-group controls">
              <label>Email Address</label>
              <input
                value={this.state.email}
                onChange={this.onChangeEmail}
                type="email"
                class="form-control"
                placeholder="Email"
                id="phone"
                />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Message</label>
              <textarea
                value={this.state.message}
                onChange={this.onChangeMessage}
                rows="5"
                class="form-control"
                placeholder="Message"
                id="message"
                ></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div id="success"></div>
          <button
            onClick={this.onSubmit}
            type="submit"
            class="btn btn-primary"
            id="sendMessageButton">Send</button>
        </form>
      </div>
    </div>
  </div>
</div>
    )
  }
}
