import React from "react";

const Todo = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <div
      className={`p-4 rounded-lg shadow border ${
        completed ? "bg-green-100 border-green-400" : "bg-red-100 border-red-400"
      }`}
    >
      <h3 className="font-medium text-gray-800">{title}</h3>
      <p
        className={`mt-2 text-sm font-semibold ${
          completed ? "text-green-600" : "text-red-600"
        }`}
      >
        {completed ? "✅ Completed" : "❌ Not Completed"}
      </p>
    </div>
  );
};

export default Todo;
