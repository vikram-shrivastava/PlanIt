import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx"; // Import the custom Layout component
import Signup from "./components/Auth/Signup.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./components/Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/roles",
        element: <RoleSelection/>,
      },
      {
        path: "/organizersearchpage",
        element: <OrganizerSearchpage/>,
      },
      {
        path: "/organizer",
        element: <Organizer />,
      },
      {
        path: "/serviceproviders",
        element: <ServiceSelection />,
      },
      {
        path: "/services/caterers",
        element: <CaterersSearchPage />,
      },
      {
        path: "/services/decorators",
        element: <DecoratorsPage />,
      },
      {
        path: "/services/entertainment",
        element: <EntertainmentPage />,
      },
      {
        path: "/services/security",
        element: <SecurityPage/>,
      },
      {
        path: "/organizerdashboard",
        element: <OrganizerDashboard />,
      },
      {
        path: "/chat",
        element: <ChatInteractions/>,
      },
      {
        path:"/hostprofile",
        element:<HostProfile/>,
      },
      {
        path:"/admin",
        element:<AdminDashboard/>
      },
      {
        path:"/catererprofile/:catererId",
        element:<CatererProfile/>
      },
      {
        path:"/decoratorprofile/:decoratorId",
        element:<DecoratorProfile/>
      },
      {
        path:"/entertainmentprofile/:entertainmentId",
        element:<EntertainmentProfile/>
      },
      {
        path:"/securityprofile/:securityId",
        element:<SecurityProfile/>
      },
      {
      path:"/profile",
        element:<ParticipantProfile/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },{
    path:"/logout",
    element:<Logout/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
