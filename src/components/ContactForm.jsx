import React, { Component } from "react";
// import "../styles/Contact.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "", email: "", success: false };
  }

  render() {
    return (
      <div id="contact">
        <h2>Reach Out</h2>
        <div className="email">
          {/* <a href={`mailto:${process.env.REACT_APP_MY_EMAIL}`}>
            <svg
              className="large-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
            </svg>
          </a> */}
        </div>

      
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSewQMiL0vwES4QHbkBqNT0ms7xPWkeAUKDp6AjiwIbBgwyHPQ/viewform?embedded=true" width="640" height="923" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */}

        {this.state.success ? '' : <form
          className='form'
          method="POST"
          data-email="example@email.net"
          // action="https://script.google.com/macros/s/AKfycbwJ9FsJRw1n-iWkoXAndHKqarrx_ycl0ZMWKCcW96tXceflsAU/exec"
          onSubmit={async (e) => {
            e.preventDefault();
            let formData = new FormData();
            formData.append("name", this.state.name);
            formData.append("message", this.state.message);
            formData.append("email", this.state.email);

            const resp = await fetch(
              "https://script.google.com/macros/s/AKfycbwJ9FsJRw1n-iWkoXAndHKqarrx_ycl0ZMWKCcW96tXceflsAU/exec",
              {
                mode: "no-cors",
                method: "post",
                body: formData,
              }
            );

            this.setState({
              success: true,
              resp: resp
            });
          }}
        >

            <fieldset>
              <input
                id="name"
                name="name"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              placeholder='Your Name'
              />
            </fieldset>

            <fieldset>
              <textarea
                id="message"
                name="message"
                rows="10"
                onChange={(e) => {
                  this.setState({ message: e.target.value });
                }}
              placeholder="Your Message..."
              ></textarea>
            </fieldset>

            <fieldset>
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              placeholder='Your Email'
              />
            </fieldset>

            <button id='submit'>Submit</button>
  

      
        </form>
        }
            {!this.state.success ? (
              ""
            ) : (
              <div>
                <h2>
                  Thank you for reaching out! I will get back to you as soon as I can!
                </h2>
              </div>
            )}
      </div>
    );
  }
}

export default ContactForm;
