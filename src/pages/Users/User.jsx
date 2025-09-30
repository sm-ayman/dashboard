import React from "react";

const User = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg p-4 flex flex-col">
      <h3 className="font-semibold text-xl text-gray-800 mb-2">{user.name}</h3>
      <p className="text-gray-600 mb-1">@{user.username}</p>
      <p className="text-gray-600 mb-2">{user.email}</p>

      <div className="text-gray-500 text-sm mt-auto">
        {user.address?.city ?? "Unknown City"},{" "}
        {user.address?.street ?? "Unknown Street"}
      </div>
    </div>
  );
};

export default User;
