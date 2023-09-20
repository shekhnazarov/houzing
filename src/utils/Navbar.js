import React from "react";
import UseId from "../hooks/useId/useId";
import SigninPage from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddHouse from "../components/AddHouse";
const HomePage = React.lazy(() => import("../pages/Home"));
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HouseItem = React.lazy(() => import("../components/HouseItem"));
const Favourite = React.lazy(() => import("../components/Favourite"));
const MyPropertiesPage = React.lazy(() => import("../pages/MyPropertiesPage"));

const NavbarList = [
  {
    id: UseId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    isPrivate: false,
    hidden: false,
  },
  {
    id: UseId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    isPrivate: false,
    hidden: false,
  },
  {
    id: UseId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItem />
      </React.Suspense>
    ),
    title: "Single House Card",
    path: "/properties/:id",
    isPrivate: false,
    hidden: true,
  },
  {
    id: UseId,
    element: <SigninPage />,
    title: "Sign In",
    path: "/signin",
    isPrivate: false,
    hidden: true,
  },
  {
    id: UseId,
    element: <SignUp />,
    title: "Sign Up",
    path: "/signUp",
    isPrivate: false,
    hidden: true,
  },
  {
    id: UseId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Favourite />
      </React.Suspense>
    ),
    title: "My favourite",
    path: "/my-favourite",
    isPrivate: true,
    hidden: true,
  },
  {
    id: UseId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <MyPropertiesPage />
      </React.Suspense>
    ),
    title: "My profile",
    path: "/my-properties",
    isPrivate: true,
    hidden: true,
  },
  {
    id: UseId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <AddHouse />
      </React.Suspense>
    ),
    title: "Add New House",
    path: "/my-properties/newhouse",
    isPrivate: true,
    hidden: true,
  },
  {
    id: UseId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <AddHouse />
      </React.Suspense>
    ),
    title: "Edit House",
    path: "/my-properties/edithouse/:id",
    isPrivate: true,
    hidden: true,
  },
];

export { NavbarList };
