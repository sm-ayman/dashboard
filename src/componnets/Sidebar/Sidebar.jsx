import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="md:w-56 bg-indigo-500 p-4 min-h-screen">
      <h2 className="text-xl text-white font-bold mb-4">Menu</h2>

      <nav className="flex flex-col gap-2">
        <Link
          to="/posts"
          className="text-white px-3 py-2 rounded hover:bg-indigo-600"
        >
          Posts
        </Link>
        <Link
          to="/users"
          className="text-white px-3 py-2 rounded hover:bg-indigo-600"
        >
          Users
        </Link>
        <Link
          to="/todos"
          className="text-white px-3 py-2 rounded hover:bg-indigo-600"
        >
          Todos
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
