import React, { useState } from "react";
import "./Contact.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <div className="contact">
        <h2
          className="contact-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </h2>
        <div className="contact-data">
          <form action="https://formspree.io/f/xzblnldw" method="post">
            <div className="fname">
              <label for="fname">
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
              <label for="email">
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
            <div className="mobile">
              <label for="mobile">
                <LocalPhoneRoundedIcon />
                &nbsp;Mobile
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                value={mobile}
                placeholder="Enter your Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="message">
              <label for="message">
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
            <button type="submit" className="sendBtn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
