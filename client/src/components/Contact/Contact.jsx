import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const response = await fetch("https://portfolio-api-908235041403.us-central1.run.app/api/contact_message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error("Error:", err);
    setStatus("error");
  }
};

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>
          Have a question, collaboration idea, or just want to connect?  
          Fill out the form below — I’d love to hear from you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
          {status === "success" && (
            <div className="form-status success">Message sent! I'll get back to you soon.</div>
          )}

          {status === "error" && (
            <div className="form-status error">Something went wrong. Try again.</div>
          )}

          {status === "loading" && (
            <div className="form-status loading">Sending...</div>
          )}
        </form>
      </div>
    </section>
  );
}
