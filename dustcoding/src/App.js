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

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/Home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/About"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            exact
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
            exact
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
            exact
            path="/Contact"
            element={
              <>
                <HeaderComponent />
                <Contact />
                <FooterComponent />
              </>
            }
          />
          {/* client route */}
          <Route
            exact
            path="/Client"
            element={
              <>
                <NavBar />
                <Profile />
              </>
            }
          />
          <Route
            exact
            path="/Client/meeting"
            element={
              <>
                <NavBar />
                <Meeting />
              </>
            }
          />
          <Route
            exact
            path="/Client/profile"
            element={
              <>
                <NavBar />
                <Profile />
              </>
            }
          />

          <Route
            exact
            path="/Client/messaging"
            element={
              <>
                <NavBar />
                <Messaging />
              </>
            }
          />
          {/* Admin Route */}
          <Route
            exact
            path="/Admin/Dashboard"
            element={
              <div className="flex">
                <SideBar />
                <DashboardPage />
              </div>
            }
          />

          <Route
            exact
            path="/Admin/Articles"
            element={
              <div className="flex">
                <SideBar />
                <ArticlesPage />
              </div>
            }
          />
          <Route
            exact
            path="/Admin/Service"
            element={
              <div className="flex">
                <SideBar />
                <ServicesPage />
              </div>
            }
          />
          <Route
            exact
            path="/Admin/Employers"
            element={
              <div className="flex">
                <SideBar />
                <EmployersPages />
              </div>
            }
          />
          <Route
            exact
            path="/Admin/Mailing"
            element={
              <div className="flex">
                <SideBar />
                <MailingPage />
              </div>
            }
          />
          <Route
            exact
            path="/Admin/Partners"
            element={
              <div className="flex">
                <SideBar />
                <PartnersPages />
              </div>
            }
          />
          <Route
            exact
            path="/Admin/Projects"
            element={
              <div className="flex">
                <SideBar />
                <ProjectsPages />
              </div>
            }
          />

          <Route exact path="/LogIn" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
