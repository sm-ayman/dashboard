import React from "react";

const Home = () => {
  const stats = [
    { id: 1, title: "Posts", count: 100, color: "bg-blue-500" },
    { id: 2, title: "Users", count: 10, color: "bg-green-500" },
    { id: 3, title: "Todos", count: 200, color: "bg-orange-500" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`p-6 rounded-lg shadow hover:shadow-lg ${stat.color} text-white flex flex-col justify-between`}
          >
            <h2 className="text-xl font-semibold">{stat.title}</h2>
            <p className="text-4xl font-bold mt-4">{stat.count}</p>
            <p className="mt-2 text-sm">Updated just now</p>
          </div>
        ))}
      </div>

      {/* quick-links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-indigo-500 font-semibold cursor-pointer text-white px-4 py-2 rounded hover:bg-indigo-600">
            View Posts
          </button>
          <button className="bg-green-500 font-semibold cursor-pointer text-white px-4 py-2 rounded hover:bg-green-600">
            View Users
          </button>
          <button className="bg-yellow-500 font-semibold cursor-pointer text-white px-4 py-2 rounded hover:bg-yellow-600">
            View Todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
