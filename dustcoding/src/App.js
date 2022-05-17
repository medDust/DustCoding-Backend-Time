import React, { useEffect } from "react";

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
import {
  ProtectedRouter,
  ProtectedRouterUser,
} from "./helpers/ProtectedRouter";
import { isAuthenticated } from "./helpers/auth";
import ProjectPage from "./Views/admin/pages/DetailsProject/ProjectPage";
import SettingsPage from "./Views/cLient/Components/profile/SettingsPage";
import UserForms from "./Views/admin/pages/Modals/UserForms";
import TasksDetails from "./Views/admin/pages/DetailsProject/TasksDetails";
//import ActiveComponent from "./Views/admin/pages/DashBoardComponents/ActiveComponent";
import EditTasks from "./Views/admin/pages/DetailsProject/EditTasks";
import { ArticleSection } from "./components";
import ModalsEmployer from "./Views/admin/pages/Modals/ModalsEmployer";
import ArticleList from "./Views/admin/pages/ArticleList";
import EditArticle from "./Views/admin/pages/EditeArticle";
import ArticleDetails from "./Views/admin/pages/DetailsProject/ArticleDetails";
import ServicesList from "./Views/admin/pages/ServiceList";
const App = () => {
  useEffect(() => {
    fetch("https://git.heroku.com/dustcoding-backend-server.git", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }, []);
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
            path="/Article/:id"
            element={
              <>
                <HeaderComponent />
                <ArticleSection />
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

          <Route path="/LogIn" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="*" element={<NotFoundPage />} />
          {/* client route */}
          <Route element={<ProtectedRouterUser isLogged={isAuthenticated()} />}>
            <Route
              path="/Client"
              element={
                <>
                  <NavBar />
                  <Profile />
                </>
              }
            />
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
              path="/Client/setting"
              element={
                <>
                  <NavBar />
                  <SettingsPage />
                </>
              }
            />
            <Route
              path="/Client/Projects/:id/Task/:_id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <TasksDetails />
                </div>
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
          </Route>
          {/* Admin Route */}
          <Route element={<ProtectedRouter isLogged={isAuthenticated()} />}>
            <Route
              exact
              path="/Admin"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <DashboardPage />
                </div>
              }
            />
            <Route
              path="/Admin/Dashboard"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <DashboardPage />
                </div>
              }
            />

            <Route
              path="/Admin/Articles/create-new-article"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ArticlesPage />
                </div>
              }
            />
            <Route
              path="/Admin/Articles"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ArticleList />
                </div>
              }
            />
            <Route
              path="/Admin/Articles/update-article/:id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <EditArticle />
                </div>
              }
            />
            <Route
              path="/Admin/Articles/view-article/:id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ArticleDetails />
                </div>
              }
            />
            <Route
              path="/Admin/Service/create"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ServicesPage />
                </div>
              }
            />
            <Route
              path="/Admin/Service"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ServicesList />
                </div>
              }
            />
            <Route
              path="/Admin/Employers"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <EmployersPages />
                </div>
              }
            />
            <Route
              path="/Admin/Employers/create-new-employer"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ModalsEmployer />
                </div>
              }
            />
            <Route
              path="/Admin/Mailing"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <MailingPage />
                </div>
              }
            />
            <Route
              path="/Admin/Partners"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <PartnersPages />
                </div>
              }
            />
            <Route
              path="/Admin/Projects"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ProjectsPages />
                </div>
              }
            />
            <Route
              path="/Admin/Projects/:id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ProjectPage />
                </div>
              }
            />
            <Route
              path="/Admin/Projects/:id/Task/:_id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <TasksDetails />
                </div>
              }
            />
            <Route
              path="/Admin/Projects/:id/Task/:_id/Edit"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <EditTasks />
                </div>
              }
            />
            <Route
              path="/Admin/Employers/update-user/:id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <UserForms />
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
