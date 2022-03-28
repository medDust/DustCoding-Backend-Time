import React, { Fragment } from "react";
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
import {
  SideBar,
  ArticlesPage,
  DashboardPage,
  EmployersPages,
  MailingPage,
  PartnersPages,
  ProjectsPages,
  ServicesPage,
} from "./Views/admin";
import { Meeting, Messaging, NavBar, Profile } from "./Views/cLient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { isAuthenticated } from "./helpers/auth";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/Service"
            element={
              <>
                <HeaderComponent />
                <Service />

                <FooterComponent />
              </>
            }
          />
          <Route
            path="/Article"
            element={
              <>
                <HeaderComponent />
                <Articles />
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <HeaderComponent />
                <Contact />
                <FooterComponent />
              </>
            }
          />
          {isAuthenticated() && isAuthenticated().role === 0 && (
            <Fragment>
              <Route
                path="/Client/meeting"
                element={
                  <>
                    <NavBar />
                    <Meeting />
                  </>
                }
              />
              <Route
                path="/Client/profile"
                element={
                  <>
                    <NavBar />
                    <Profile />
                  </>
                }
              />

              <Route
                path="/Client/messaging"
                element={
                  <>
                    <NavBar />
                    <Messaging />
                  </>
                }
              />
            </Fragment>
          )}
          {isAuthenticated() && isAuthenticated().role === 2 && (
            <Fragment>
              <Route
                path="/Admin/Dashboard"
                element={
                  <div className="flex">
                    <SideBar />
                    <DashboardPage />
                  </div>
                }
              />

              <Route
                path="/Admin/Articles"
                element={
                  <div className="flex">
                    <SideBar />
                    <ArticlesPage />
                  </div>
                }
              />
              <Route
                path="/Admin/Service"
                element={
                  <div className="flex">
                    <SideBar />
                    <ServicesPage />
                  </div>
                }
              />
              <Route
                path="/Admin/Employers"
                element={
                  <div className="flex">
                    <SideBar />
                    <EmployersPages />
                  </div>
                }
              />
              <Route
                path="/Admin/Mailing"
                element={
                  <div className="flex">
                    <SideBar />
                    <MailingPage />
                  </div>
                }
              />
              <Route
                path="/Admin/Partners"
                element={
                  <div className="flex">
                    <SideBar />
                    <PartnersPages />
                  </div>
                }
              />
              <Route
                path="/Admin/Projects"
                element={
                  <div className="flex">
                    <SideBar />
                    <ProjectsPages />
                  </div>
                }
              />
          
            </Fragment>
          )}
          <Route path="/LogIn" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
