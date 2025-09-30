import React from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  // Ensure we always have an array to map over
  const users = useLoaderData() ?? [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
