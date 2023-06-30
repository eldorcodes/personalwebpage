import React from "react";
import emailjs from "emailjs-com";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      phone: "",
      email: "",
      message:""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name:event.target.value })
  };
  handleEmailChange(event) {
    this.setState({ email:event.target.value })
  };
  handlePhoneChange(event) {
    this.setState({ phone:event.target.value })
  };
  handleMessageChange(event) {
    this.setState({ message:event.target.value })
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const serviceID = 'service_1qm65xm';
   const templateID = 'template_8ljngfg';
   emailjs.init('O1G4OpkAXHj5Yp9S-')

   emailjs.sendForm(serviceID, templateID, e.target)
    .then(() => {
      this.setState({ name:'',email:'',phone:'',message:'' })
      alert('Sent!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)} className="form_class">
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="form-control"
              placeholder="Your Name*"
              onChange={this.handleNameChange}
              required
              value={this.state.name}
            />
          </div>
          <div className="col-lg-6">
            <input
              type="email"
              className="form-control"
              id="message"
              name="message"
              placeholder="Your Email*"
              onChange={this.handleEmailChange}
              required
              value={this.state.email}
            />
          </div>
         
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              id="message"
              name="message"
              placeholder="Phone*"
              onChange={this.handlePhoneChange}
              required
              value={this.state.phone}
            />
          </div>
        </div>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="6"
          placeholder="Your Message ..."
          onChange={this.handleMessageChange}
          required
          value={this.state.message}
        ></textarea>
        <button type="submit" className="btn send_btn theme_btn">
          Send Message
        </button>
      </form>
    );
  }
}

export default Form;
