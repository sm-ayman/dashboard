import React from "react";

const Post = ({ post }) => {
  const { title, body, id } = post;
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg p-4 flex flex-col">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-1">{body}</p>
      <span className="mt-4 text-sm text-gray-400">Post ID: {id}</span>
    </div>
  );
};

export default Post;
