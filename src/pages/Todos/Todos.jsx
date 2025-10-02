import React from "react";
import { useLoaderData } from "react-router";
import Todo from "./Todo";

const Todos = () => {
  const todos = useLoaderData() ?? [];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Todos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
