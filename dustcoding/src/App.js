import React from "react";
//
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
//
import {
  SideBar,
  ArticlesPage,
  DashboardPage,
  EmployersPages,
  MailingPage,
  PartnersPages,
  ProjectsPages,
} from "./Views/admin";
import { Profile } from "./Views/admin/pages/user";
//
import { Meeting, Messaging, NavBar } from "./Views/cLient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ProtectedRouter,
  ProtectedRouterEmployer,
  ProtectedRouterUser,
} from "./helpers/ProtectedRouter";
import { isAuthenticated } from "./helpers/auth";
import { ArticleSection } from "./components";
import { EditeTasks, TasksDetails } from "./Views/admin/pages/DetailsProject";
import { ProjectPage } from "./Views/admin/pages/Project";
import { ModalsEmployer, UserForms } from "./Views/admin/pages/Modals";

import {
  EditeService,
  ServicesList,
  ServicesDetails,
  ServicesPage,
} from "./Views/admin/pages/service";

import {
  ArticleDetails,
  ArticleList,
  EditeArticle,
} from "./Views/admin/pages/articles";
import SettingsPage from "./Views/cLient/Components/profile/SettingsPage";
import EmpNavBar from "./Views/employer/EmpNavBar";

const App = () => {
  // useEffect(() => {
  //   fetch("https://git.heroku.com/dustcoding-backend-server.git", {
  //     method: "GET",
  //   })
  //     .then((data) => data.json())
  //     .then((json) => alert(JSON.stringify(json)));
  // }, []);
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
          <Route
            element={<ProtectedRouterEmployer isLogged={isAuthenticated()} />}
          >
            <Route
              path="/Employer/Profile/"
              element={
                <div className="flex justify-between">
                  <EmpNavBar />
                  <Profile />
                </div>
              }
            />
          </Route>
          {/* Admin Route */}
          <Route element={<ProtectedRouter isLogged={isAuthenticated()} />}>
            <Route
              path="/Admin"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <DashboardPage />
                </div>
              }
            />
            <Route
              path="/Admin/Profile/"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <Profile />
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
                  <EditeArticle />
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
              path="/Admin/Service/update-service/:id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <EditeService />
                </div>
              }
            />
            <Route
              path="/Admin/Service/view-service/:id"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <ServicesDetails />
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
              path="/Admin/Projects/:id/Task/:TaskId"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <TasksDetails />
                </div>
              }
            />
            <Route
              path="/Admin/Projects/:id/Task/:TaskId/Edit"
              element={
                <div className="flex justify-between">
                  <SideBar />
                  <EditeTasks />
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
