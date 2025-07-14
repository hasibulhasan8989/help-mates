import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Login from "./Pages/Login.jsx";

import Register from "./Pages/Register.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import AddVolunteer from "./Pages/AddVolunteer.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import NeedVolunteer from "./Pages/NeedVolunteer/NeedVolunteer.jsx";
import ViewDetails from "./Pages/ViewDetails/ViewDetails.jsx";
import BeVolunteer from "./Pages/BeVolunteer.jsx";
import ManageMyPost from "./Pages/Home/ManageMyPost/ManageMyPost.jsx";
import UpdatePost from "./Pages/UpdatePost/UpdatePost.jsx";
import MyVolunteerRequest from "./Pages/MyVolunteerRequest/MyVolunteerRequest.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-volunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/need-volunteer",
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://help-mates-server.vercel.app/volunteer/${params.id}`),
      },
      {
        path: "/be-volunteer/:id",
        element: <PrivateRoute><BeVolunteer></BeVolunteer></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://help-mates-server.vercel.app/volunteer/${params.id}`),
      },
      {
        path: "/my-post/:email",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://help-mates-server.vercel.app/my-post/${params.email}`),
      },
      {
        path: "/my-request/:email",
        element: <PrivateRoute><MyVolunteerRequest></MyVolunteerRequest></PrivateRoute> ,
      },
      
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePost></UpdatePost>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://help-mates-server.vercel.app/volunteer/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={1000}></ToastContainer>
    </AuthProvider>
    </HelmetProvider>
   
  </StrictMode>
);
