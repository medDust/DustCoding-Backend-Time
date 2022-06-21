import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ProtectedRouter,
  ProtectedRouterEmployer,
  ProtectedRouterUser,
} from "./helpers/ProtectedRouter";
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

import {
  EditeTaskEmpComponent,
  EmployerProfile,
  ProjectEmpComponent,
  ProjectListEmp,
  TaskDetailsComponent,
  TaskEmpComponent,
} from "./Views/employer";
import { ClientProject, ClientTasksList, Profile } from "./Views/cLient";
import EmployerSettingPage from "./Views/employer/Employer/EmployerSettingPage";
import TableProjectEmployer from "./Views/employer/Employer/TableProjectEmployer";

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
                  <HeaderComponent />
                  <Profile />
                </>
              }
            />

            <Route
              path="/Client/Profile"
              element={
                <>
                  <HeaderComponent />
                  <Profile />
                </>
              }
            />

            <Route
              path="/Client/setting"
              element={
                <>
                  <HeaderComponent />
                  <SettingsPage />
                </>
              }
            />
            <Route
              path="/Client/Projects/"
              element={
                <div className="grid justify-between gap-16">
                  <HeaderComponent />
                  <ClientProject />
                </div>
              }
            />
            <Route
              path="/Client/Projects/:id/"
              element={
                <div className="grid justify-between">
                  <HeaderComponent />
                  <ClientTasksList />
                </div>
              }
            />
            <Route
              path="/Client/Projects/:ProjectId/Task/:TaskId"
              element={
                <div className="flex justify-between">
                  <HeaderComponent />
                  <ClientTasksList />
                </div>
              }
            />
          </Route>
          {/* employer route */}
          <Route
            element={<ProtectedRouterEmployer isLogged={isAuthenticated()} />}
          >
            <Route
              path="/Employer"
              element={
                <div className="grid">
                  <HeaderComponent />
                  <EmployerProfile />
                </div>
              }
            />
            <Route
              path="/Employer/update"
              element={
                <div className="grid">
                  <HeaderComponent />
                  <EmployerSettingPage />
                </div>
              }
            />
            <Route
              path="/Employer/Profile/"
              element={
                <div className="grid">
                  <HeaderComponent />
                  <EmployerProfile />
                </div>
              }
            />
            <Route
              path="/Employer/Projects"
              element={
                <div className="grid">
                  <HeaderComponent />
                  <TableProjectEmployer />
                </div>
              }
            />
            <Route
              path="/Employer/Projects/:ProjectId"
              element={
                <div className="grid">
                  <HeaderComponent />
                  <TaskEmpComponent />
                </div>
              }
            />
            <Route
              path="/Employer/Projects/:ProjectId/Tasks/:TaskId"
              element={
                <div className="grid">
                  <HeaderComponent />
                  <TaskDetailsComponent />
                </div>
              }
            />
            <Route
              path="/Employer/Projects/:ProjectId/Tasks/:TaskId/update"
              element={
                <div className="grid">
                  <HeaderComponent />
                  <EditeTaskEmpComponent />
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
