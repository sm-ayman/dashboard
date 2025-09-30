import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside class="w-56 bg-indigo-500 p-4 min-h-screen">
      <h2 class="text-xl text-white font-bold mb-4">Menu</h2>

      <nav class="flex flex-col gap-2">
        <Link
          to="/posts"
          class="text-white px-3 py-2 rounded hover:bg-indigo-600"
        >
          Posts
        </Link>
        <Link
          to="/users"
          class="text-white px-3 py-2 rounded hover:bg-indigo-600"
        >
          Users
        </Link>
        <Link
          to="/todos"
          class="text-white px-3 py-2 rounded hover:bg-indigo-600"
        >
          Todos
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
