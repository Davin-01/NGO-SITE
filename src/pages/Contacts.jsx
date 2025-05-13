import React from "react";

const Contacts = () => (
  <section className="bg-gray-50 py-16 px-6 sm:px-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Contact Us</h2>
      <p className="text-center text-gray-700 mb-10">
        Have questions or want to reach out? We’d love to hear from you.
      </p>
      <form className="bg-white p-8 rounded-lg shadow-md grid gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contacts;
