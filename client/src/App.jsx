import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

import MainPage from "./Pages/Student Side Pages/Main.Page";
import StudentPage from "./Pages/Auth/StudentPage";
import TeacherPage from "./Pages/Auth/TeacherPage";
import HodPage from "./Pages/Auth/HodPage";


import DashboardPage from "./Pages/Student Side Pages/Dashboard.page";
import TeacherDashboardPage from "./Pages/Teacher Side Pages/TeacherDashboard";
import HodDashboardPage from "./Pages/HOD Side Pages/HodDashboard";

import ProfilePage from "./Pages/Student Side Pages/Profile.page";

import TimeTablePage from "./Pages/Student Side Pages/TimeTable.page";
import TeacherTimeTablePage from "./Pages/Teacher Side Pages/TeacherTimeTable";
import HodTimeTablePage from './Pages/HOD Side Pages/HodTimeTable'

import ResourcesPage from "./Pages/Student Side Pages/Resources.page";
import TeacherResourcesPage from "./Pages/Teacher Side Pages/Resources.Teacher";
import HodResourcesPage from "./Pages/HOD Side Pages/Resources.hod";

import StudentListPage from "./Pages/Student Side Pages/StudentList.page";
import TeacherListPage from "./Pages/Teacher Side Pages/StudentList.Teacher";
import HodListPage from "./Pages/HOD Side Pages/StudentList.hod";

import CoursesPage from "./Pages/Student Side Pages/Courses.page";

import SettingsPage from "./Pages/Student Side Pages/Settings.page";
import TeacherSettingsPage from "./Pages/Teacher Side Pages/Teacher.Setting";
import HodSettingsPage from "./Pages/HOD Side Pages/Hod.Setting";

import ChatPage from "./Pages/Student Side Pages/Chat.page";
import TeacherChatPage from "./Pages/Teacher Side Pages/Teacher.chat";
import HodChatPage from "./Pages/HOD Side Pages/Hod.chat";

import NoticePage from "./Pages/Student Side Pages/Notice.page";

import AssessmentsPage from "./Pages/Student Side Pages/Assessments.page";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<StudentPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/hod" element={<HodPage />} />

          {
            localStorage.getItem('userType') == 'teacher' ?
              <>
                <Route path="/teacher/dashboard" element={<TeacherDashboardPage />} />
                <Route path="/teacher/timetable" element={< TeacherTimeTablePage />} />
                <Route path="/teacher/studentlist" element={< TeacherListPage />} />
                <Route path="/teacher/settings" element={< TeacherSettingsPage />} />
                <Route path="/teacher/chat" element={< TeacherChatPage />} />
                <Route path="/teacher/resources" element={< TeacherResourcesPage />} />
                <Route path="/teacher/notice" element={< NoticePage />} />
              </> :
              (
                localStorage.getItem('userType') == 'student' ?
                  <>
                    <Route path="/student/dashboard" element={<DashboardPage />} />
                    <Route path="/student/profile" element={< ProfilePage />} />
                    <Route path="/student/timetable" element={< TimeTablePage />} />
                    <Route path="/student/resources" element={< ResourcesPage />} />
                    <Route path="/student/studentlist" element={< StudentListPage />} />
                    <Route path="/student/chat" element={< ChatPage />} />
                    <Route path="/student/resources/assessments" element={< AssessmentsPage />} />
                    <Route path="/student/courses" element={< CoursesPage />} />
                    <Route path="/student/settings" element={< SettingsPage />} />
                  </>
                  : (
                    localStorage.getItem('userType') == 'hod' ?
                      <>
                        <Route path="/hod/dashboard" element={<HodDashboardPage />} />
                        <Route path="/hod/timetable" element={< HodTimeTablePage />} />
                        <Route path="/hod/resources" element={< HodResourcesPage />} />
                        <Route path="/hod/studentlist" element={< HodListPage />} />
                        <Route path="/hod/settings" element={< HodSettingsPage />} />
                        <Route path="/hod/chat" element={< HodChatPage />} />
                        <Route path="/hod/notice" element={< NoticePage />} />
                      </>
                      :
                      <>
                        <Route path="/" element={<MainPage />} />
                      </>
                  )
              )

          }

          <Route path="*" element={<h1>Page Not Found</h1>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
