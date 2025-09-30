import React from "react";

const About = () => {
  return (
    <div className="p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

      {/* Intro Paragraph */}
      <p className="text-gray-600 mb-8 max-w-2xl">
        Welcome to our Dashboard! This project is built with
        <span className="font-semibold text-indigo-600"> React </span> and
        <span className="font-semibold text-indigo-600"> Tailwind CSS</span>. It
        demonstrates how to create a modern single-page application (SPA) with
        routing, reusable layouts, and API data.
      </p>

      {/* Highlighted Mission Section */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 shadow-sm mb-10">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-700">
          To help developers learn and practice modern frontend development by
          building lightweight, clean, and responsive dashboards that integrate
          real-world APIs.
        </p>
      </div>

      {/* Extra Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast</h3>
          <p className="text-gray-600">
            Built with performance in mind using React and Tailwind CSS.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern</h3>
          <p className="text-gray-600">
            Implements the latest React Router features and layout design.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Scalable</h3>
          <p className="text-gray-600">
            A foundation you can extend into a real project or admin dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
