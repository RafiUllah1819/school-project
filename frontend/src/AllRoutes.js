import React from "react";
import { Routes, Route } from "react-router-dom";
import { StudentList } from "./Components/Student/StudentList";
import { StudentAdd } from "./Components/Student/StudentAdd";
import { StudentView } from "./Components/Student/StudentView";
import { Layout } from "./Layout";
import { Dashboard } from "./pages/Dashboard";
import { StudentEdit } from "./Components/Student/StudentEdit";
import { TeacherAdd } from "./Components/Teacher/TeacherAdd";
import { TeacherList } from "./Components/Teacher/TeacherList";
import { TeacherView } from "./Components/Teacher/TeacherView";
import { TeacherEdit } from "./Components/Teacher/TeacherEdit";
import { AttendanceList } from "./Components/Attendance/AttendanceList";
import { AttendanceView } from "./Components/Attendance/AttendanceView";
import { AttendanceAdd } from "./Components/Attendance/AttendanceAdd";
import { ParentsAdd } from "./Components/Parents/ParentsAdd";
import { ParentsView } from "./Components/Parents/ParentsView";
import { ParentsList } from "./Components/Parents/ParentsList";
import { TimeTable } from "./Components/TimeTable/TimeTableList";
import { ClassAdd } from "./Components/ClassCom/ClassAdd";
import { TimeTableAdd } from "./Components/TimeTable/TimeTableAdd";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/student-add" element={<StudentAdd />} />
          <Route path="/student-view" element={<StudentView />} />
          <Route path="/student-edit" element={<StudentEdit />} />
          <Route path="/teacher-add" element={<TeacherAdd />} />
          <Route path="/teacher-list" element={<TeacherList />} />
          <Route path="/teacher-view" element={<TeacherView />} />
          <Route path="/teacher-edit" element={<TeacherEdit />} />
          <Route path="/attendance-list" element={<AttendanceList />} />
          <Route path="/attendance-view" element={<AttendanceView />} />
          <Route path="/attendance-add" element={<AttendanceAdd />} />
          <Route path="/parents-add" element={<ParentsAdd />} />
          <Route path="/parents-view" element={<ParentsView />} />
          <Route path="/parents-list" element={<ParentsList />} />
          <Route path="/add-class" element={<ClassAdd />} />
          <Route path="/time-table-list" element={<TimeTable />} />
          <Route path="/time-table-add" element={<TimeTableAdd />} />
        </Route>
      </Routes>
    </div>
  );
};
