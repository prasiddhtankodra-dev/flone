import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-between h-[600px] px-32 bg-sky-100">

        <div>

          <p className="text-2xl">Contact Us</p>

          <p className="text-6xl font-bold pt-2">
            We'd Love
          </p>

          <p className="text-6xl pt-2">
            To Hear From You
          </p>

          <p className="text-lg mt-10">
            Have questions or need help?
          </p>

          <p className="text-lg">
            Our team is always ready to assist you.
          </p>

        </div>

        <img
          src="man4.jpg"
          alt="contact"
          className="w-110 rounded-full shadow-2xl"
        />

      </div>

      <div className="flex justify-center py-16">

        <div className="shadow-2xl rounded-3xl p-10 w-[650px]">

          <h1 className="text-3xl font-bold text-center mb-8">
            Send Message
          </h1>

          <input
            type="text"
            placeholder="Your Name"
            className="border w-full p-3 rounded-xl mb-5 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border w-full p-3 rounded-xl mb-5 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="border w-full p-3 rounded-xl mb-5 outline-none"
          ></textarea>

          <button className="bg-blue-950 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition">
            Send Message
          </button>

        </div>

      </div>
    </>
  );
};

export default Contact;