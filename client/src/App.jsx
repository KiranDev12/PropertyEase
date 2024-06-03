import "./routes/layout/layout.scss";

import HomePage from "./routes/homePage/HomePage.jsx";
import { Layout, RequireAuth } from "./routes/layout/Layout.jsx";
import ListPage from "./routes/listPage/ListPage.jsx";
import SinglePage from "./routes/SinglePage/SinglePage.jsx";
import Login from "./routes/Login/Login.jsx";
import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
import Register from "./routes/register/Register.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage.jsx";
import NewPostPage from "./routes/newPostPage/NewPostPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders.js";
import About from "./routes/About/About.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import Agents from "./routes/Agents/Agents.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/agents",
          element: <Agents />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
          loader: profilePageLoader,
        },
        {
          path: "/add",
          element: <NewPostPage />,
          loader: profilePageLoader,
        },
      ],
    },
  ]);
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
