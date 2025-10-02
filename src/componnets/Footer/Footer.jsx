import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      <p className="text-md">
        &copy; {new Date().getFullYear()} My Dashboard. All rights reserved |
        Developed by{" "}
        <a href="https://sm-ayman.netlify.app/" className="text-indigo-400">
          sm_ayman
        </a>
      </p>
    </footer>
  );
};

export default Footer;
