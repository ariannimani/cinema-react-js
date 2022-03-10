import React, { useState, useEffect } from "react";
import "./Contact.styles.css";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [errmessage, setErrMessage] = useState(false);

  const sendMessage = () => {
    if (errmessage === false) {
      setMessage(
        <label className="message success">"Message Sent Succesfully"</label>
      );
    } else {
      setMessage(
        <label className="message error">"Error Please Try Again"</label>
      );
      setErrMessage(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="contact-body">
      <div id="contact-form">
        <h3 class="contact-h3">Contact us</h3>

        <form
          id="contact-form-id"
          class="contact-form-class"
          onSubmit={() => sendMessage()}
        >
          <div class="contact-form-group">
            <label for="Name" class="contact-label">
              Your name
            </label>
            <div class="contact-input-group">
              <input
                placeholder="Name and Surname"
                type="text"
                id="Name"
                name="Name"
                class="contact-form-control"
                required
              />
            </div>
          </div>

          <div class="contact-form-group">
            <label for="Email" class="contact-label">
              Your email address
            </label>
            <div class="contact-input-group">
              <input
                placeholder="name@example.com"
                type="email"
                id="Email"
                name="Email"
                class="contact-form-control"
                required
              />
            </div>
          </div>

          <div class="contact-form-group">
            <label for="Message" class="contact-label">
              Your message
            </label>
            <div class="contact-input-group">
              <textarea
                placeholder="Your message here..."
                id="Message"
                name="Message"
                class="contact-form-control"
                rows="6"
                maxlength="3000"
                required
              ></textarea>
            </div>
          </div>

          <div class="contact-form-group">
            <button
              type="submit"
              id="contact-button"
              class="load-more contact-btn"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {message}
    </div>
  );
}
