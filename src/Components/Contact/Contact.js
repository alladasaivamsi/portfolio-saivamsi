import React, { useRef, useState } from "react";
import "./Contact.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2n0k8bp",
        "template_4zb6hfh",
        form.current,
        "s1-QnT8-60qrvGI2T"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    toast.success("Email Send Successfully!");
  };

  return (
    <div className="container">
      <div className="contact">
        <h2 className="contact-heading">Contact Me</h2>
        <div className="contact-data">
          <form ref={form} onSubmit={handleOnSubmit}>
            <div className="fname">
              <label htmlFor="name">
                <PersonRoundedIcon />
                &nbsp;Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="email">
              <label htmlFor="email">
                <EmailRoundedIcon />
                &nbsp;Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="message">
              <label htmlFor="message">
                <MessageRoundedIcon />
                &nbsp;Message
              </label>
              <textarea
                type="message"
                id="message"
                name="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="sendBtn" value="Send">
              Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
