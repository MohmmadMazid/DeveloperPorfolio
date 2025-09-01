import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j57xgfi",
        "YOUR_TEMPLATE_ID",
        formData,
        "3fAUAGGBU8ei9N_Ra"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-12"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-2xl lg:max-w-6xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        <label className="block mb-2 font-medium text-sm sm:text-base">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 border rounded mb-4 text-sm sm:text-base"
          required
        />

        <label className="block mb-2 font-medium text-sm sm:text-base">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 border rounded mb-4 text-sm sm:text-base"
          required
        />

        <label className="block mb-2 font-medium text-sm sm:text-base">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 border rounded mb-4 text-sm sm:text-base"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
