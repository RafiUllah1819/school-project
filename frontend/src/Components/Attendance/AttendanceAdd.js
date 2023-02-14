import React from "react";

export const AttendanceAdd = () => {
  return (
    <div className="page-wrapper">
      <div className="add-attendance container-fluid">
        <div className="page-header">
          <h1>Add Attendance</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-text">Attendance Information</h2>
            <div className="d-flex form-fields-wrap">
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Roll Number*
                </label>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input-field"
                />
              </div>

              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Class
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">1A</option>
                    <option value="">2A</option>
                    <option value="">3B</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Section
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select section</option>
                    <option value="">1A</option>
                    <option value="">2A</option>
                    <option value="">3B</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="Enter Phone number"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Date only
                </label>
                <input
                  type="date"
                  placeholder="Enter date"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Punch In
                </label>
                <input
                  type="time"
                  placeholder="Enter time"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Punch Out
                </label>
                <input
                  type="time"
                  placeholder="Enter time"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Status
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select status</option>
                    <option value="">Present</option>
                    <option value="">Absent</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div className="form-field">
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
