/* eslint-disable no-undef */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import contact from "../assets/contact.svg";

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
        "service_7r1euib",
        // process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_aa2j6oe",
        // process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        "3fAUAGGBU8ei9N_Ra"
        // process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );

    // setFormData({ from_name: "", from_email: "", message: "" });
  };

  return (
    <div id="contact" className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-3xl font-semibold">Contact Me</h1>
        <div className="h-[2px] bg-gray-500 w-30 mx-auto mt-3"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className=" mr-20 flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={contact}
            className="w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto object-contain"
            alt="Contact Illustration"
          />
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-100 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-xl lg:max-w-2xl"
          >
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
              className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
