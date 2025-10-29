import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_icxhvqd",     
        "template_tyhzoqz",   
        formRef.current,
        "9Yoow2Np7Y7x1uQAI"     
      )
      .then(
        () => {
          setIsSending(false);
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setIsSending(false);
          setStatus("❌ Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <Reveal>
        <h2>Contact Me</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          
          <button type="submit" className="btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status-msg">{status}</p>}
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
