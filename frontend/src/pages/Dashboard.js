import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="dashboard d-flex">
          <div className="left d-flex">
            <div className="card">
              <div className="card-body">
                <h2>Students</h2>
                <h1>1300</h1>
                <h3>Total numbers of students</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h2>Teachers</h2>
                <h1>10</h1>
                <h3>Total numbers of students</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h2>Parents</h2>
                <h1>10</h1>
                <h3>Total numbers of parents</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h2>Staff</h2>
                <h1>10</h1>
                <h3>Total numbers of Staff</h3>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="card">
              <div className="card-body">
                <h2>Todays Attendance</h2>
                <h1>1230</h1>
                <h3>1230 students are attending today</h3>
                <Link to="#">Go To Attendance</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
