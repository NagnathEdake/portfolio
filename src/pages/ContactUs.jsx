import React, { useEffect, useState } from "react";
import Orb from "../components/Orb";
import axios from "axios";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/contact/send", form);
      alert("message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error Sending message!");
    }
  };

  return (
    <div className="section-contact text-white contact-wrapper">
      <div className="container">
        <div className="row   d-flex align-items-center justify-content-around ">
          <div className="section-orb col-lg-6 col-md-4 col-sm-12">
            <div
              className="orb-bg  d-flex justify-content-center align-items-center "
              style={{ width: "100%", height: "600px" }}
            >
              <Orb
                hoverIntensity={1.31}
                rotateOnHover
                hue={29}
                forceHoverState={false}
                backgroundColor="#000000"
              />
              <h1 className="contact-heading position-absolute ">Contact Us</h1>
            </div>
          </div>
          <div className="contact-form col-lg-6 col-md-8 col-sm-12">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 ">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                className="input"
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="input"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn btn-outline-light">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
