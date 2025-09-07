import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactBg1 from "../assets/Images/Contact-bg1.jpg";
import ContactBg2 from "../assets/Images/Contact-bg2.jpg";
import ContactBg3 from "../assets/Images/Contact-bg3.jpg";
import { sendForm } from "emailjs-com";

function Contact() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_2tw97p7",
  //       "template_lumpw1i",
  //       form.current,
  //       "Qng7D-nvLnXuYz-b7"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("SUCCESS!", result.text);
  //         alert("Message sent successfully!");
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //         alert("Failed to send message. Please try again.");
  //       }
  //     );
  // };

  const Form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm (
      "service_2tw97p7",
        "template_lumpw1i",
      Form.current,
      "Qng7D-nvLnXuYz-b7"
    )
    .then ((result) => {
      console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset();
    }, (error) => {
      console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
    })
  };

  return (
    <div
      className="bg-no-repeat bg-cover bg-center justify-center w-screen text-white items-center mt-7 rounded-2xl rounded-b-none flex flex-col"
      style={{ backgroundImage: `url(${ContactBg3})` }}
    >
      <p className="justify-self-center font-story-script text-2xl  ">
        - Contact -
      </p>

      <div class="container px-4 mx-auto p-20">
        <div class="mx-auto">
          <div class="max-w-md mx-auto px-8 py-6 bg-black rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-cyan-600 mb-4">
              Contact Us
            </h2>
            <form ref={Form} onSubmit={sendEmail}>
              <div class="mb-4">
                <label class="block text-cyan-800 mb-1" for="name">
                  Your Name
                </label>
                <input
                  class="w-full px-4 py-2 bg-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  name="user_name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-cyan-800 mb-1" for="email">
                  Your Email
                </label>
                <input
                  class="w-full px-4 py-2 bg-neutral-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-300"
                  placeholder="Enter your email"
                  name="user_email"
                  id="email"
                  type="email"
                />
              </div>

              <div class="mb-4">
                <label class="block text-cyan-800 mb-1" for="name">
                  Job title
                </label>
                <input
                  class="w-full px-4 py-2 bg-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-300"
                  placeholder="Enter job title"
                  type="text"
                  name="subject"
                />
              </div>
              <div class="mb-4">
                <label class="block text-cyan-800 mb-1" for="message">
                  Your Message
                </label>
                <textarea
                  class="w-full px-4 py-2 bg-neutral-900  rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition duration-300"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button
                class="w-full bg-cyan-600 text-gray-800 py-2 px-4 rounded-lg hover:bg-cyan-900 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
              <div className="flex items-center justify-center mt-4">
                <a href="https://wa.me/2349137929760?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice
                className="inline-flex items-center text-cyan-600 hover:text-cyan-400 transition-colors duration-300 font-mono"> <span>You can also contact me on <span className="text-white hover:text-cyan-900">Whatsapp</span></span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
