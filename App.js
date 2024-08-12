import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import About from "./src/components/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import Contacts from "./src/components/Contacts";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";
import { lazy, Suspense } from "react";
import Shimmer from "./src/components/shimmer";
import Usercontext from "/utils/Usercontext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./src/components/Cart";

// const a = React.createElement("h1", { key: "h1" }, "Hello");
// const b = React.createElement("h2", { key: "h2" }, "Duniya kya haal chal ");
// const c = React.createElement("div", { id: "container" }, [a, b]);

const Instamart = lazy(() => import("./src/components/Instamart"));

const Applayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </Provider>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

let r = ReactDOM.createRoot(document.getElementById("root"));

r.render(<RouterProvider router={approuter} />);
