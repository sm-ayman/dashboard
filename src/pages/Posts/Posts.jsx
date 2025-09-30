import React, { use } from "react";
import Post from "./Post";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  console.log("users 2 suspense");
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
