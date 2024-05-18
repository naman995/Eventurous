"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lmn5tqr",
        "template_ywlslmb",
        formRef.current,
        "SUSK_WzUCO52GxQkr"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    e.target.reset(); // Reset form fields after submission
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="max-w-lg m-10 p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-4">
        Talk to our Training Consultants and get an insider view of the events
      </p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 mb-4 border rounded-md placeholder:bg-gray-100 bg-gray-100"
        required
      />
      <div className="flex space-x-3">
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          className="w-full p-2 mb-4 border rounded-md placeholder:bg-gray-100 bg-gray-100"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          className="w-full p-2 mb-4 border rounded-md placeholder:bg-gray-100 bg-gray-100"
          required
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 mb-4 border rounded-md placeholder:bg-gray-100 bg-gray-100"
        required
      />
      <div className="mb-4">
        <label className="block mb-2">Select Activity Type</label>
        <select
          name="activityType"
          className="w-full p-2 border rounded-md placeholder:bg-gray-100 bg-gray-100"
        >
          <option value="In Person">In Person</option>
          <option value="Virtual">Virtual</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Headcount</label>
        <select
          name="headcount"
          className="w-full p-2 border rounded-md placeholder:bg-gray-100 bg-gray-100"
        >
          <option value="<200">200 PAX</option>
          <option value="200 - 1000">200 - 1000 PAX</option>
          <option value="1000+">1000+ PAX</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-[#001629] text-white rounded-md"
      >
        Submit Quote
      </button>
    </form>
  );
};

export default ContactForm;
