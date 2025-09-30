import React from "react";

const Contact = () => {
  return (
    <div className="p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        Have questions, feedback, or just want to say hello? Fill out the form
        below or reach us through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* contact */}
        <div className="bg-indigo-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-4">
            You can also reach us directly through the following:
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              📧 <span className="font-medium">Email:</span>{" "}
              support@dashboard.com
            </li>
            <li>
              📞 <span className="font-medium">Phone:</span> +123 456 789
            </li>
            <li>
              📍 <span className="font-medium">Address:</span> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
