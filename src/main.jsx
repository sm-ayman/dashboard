import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import Users from "./pages/Users/Users.jsx";
import Todos from "./pages/Todos/Todos.jsx";

const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        loader: async () => {
          const [posts, users, todos] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
              res.json()
            ),
            fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
              res.json()
            ),
            fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
              res.json()
            ),
          ]);

          return {
            postsCount: posts.length,
            usersCount: users.length,
            todosCount: todos.length,
          };
        },
        element: <Home></Home>,
      },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      {
        path: "/posts",
        element: (
          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <Posts postsPromise={postsPromise}></Posts>
          </Suspense>
        ),
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/todos",
        element: <Todos></Todos>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
