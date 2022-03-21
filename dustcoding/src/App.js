import React from "react";
import {
  Home,
  About,
  Articles,
  Contact,
  NotFoundPage,
  Service,
  HeaderComponent,
  FooterComponent,
  Login,
  SignUp,
} from "./contents";
import { Meeting, Messaging, NavBar, Profile } from "./Views/cLient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const tabs = [
    {
      id: 0,
      path: "/",
      name: (
        <>
          <Home />
        </>
      ),
    },
    {
      id: 1,
      path: "Home",
      name: (
        <>
          <Home />
        </>
      ),
    },
    {
      id: 2,
      path: "About",
      name: (
        <>
          <About />
        </>
      ),
    },
    {
      id: 3,
      path: "Service",
      name: (
        <>
          <HeaderComponent />
          <Service />

          <FooterComponent />
        </>
      ),
    },
    {
      id: 4,
      path: "Article",
      name: (
        <>
          <HeaderComponent />
          <Articles />
          <FooterComponent />
        </>
      ),
    },
    {
      id: 5,
      path: "Contact",
      name: (
        <>
          <HeaderComponent />
          <Contact />
          <FooterComponent />
        </>
      ),
    },

    { id: 6, path: "/LogIn", name: <Login /> },
    { id: 7, path: "/SignUp", name: <SignUp /> },
    {
      id: 8,
      path: "/Client/meeting",
      name: (
        <>
          <NavBar />
          <Meeting />
        </>
      ),
    },
    {
      id: 9,
      path: "/Client/profile",
      name: (
        <>
          <NavBar />
          <Profile />
        </>
      ),
    },
    {
      id: 10,
      path: "/Client/messaging",
      name: (
        <>
          <NavBar />
          <Messaging />
        </>
      ),
    },
    { id: 0, path: "*", name: <NotFoundPage /> },
  ];
  return (
    <div>
      <Router>
        <Routes>
          {tabs.map((route) => (
            <Route key={route.id} path={route.path} element={route.name} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
