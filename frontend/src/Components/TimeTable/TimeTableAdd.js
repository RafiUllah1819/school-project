import React from "react";

export const TimeTableAdd = () => {
  return (
    <div className="page-wrapper">
      <div className="time-table container-fluid">
        <div className="page-header">
          <h1>Add Time Table</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-text">Time Table Information</h2>
            <div className="d-flex form-fields-wrap">
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Teacher ID *
                </label>
                <input
                  type="text"
                  placeholder="Teacher ID"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Class*
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select Class</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Section*
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select Section</option>
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Subject*
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select Subject</option>
                    <option value="">English</option>
                    <option value="">Physics</option>
                    <option value="">Biology</option>
                    <option value="">Maths</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Date*
                </label>
                <input
                  type="date"
                  placeholder="DD-MM-YY"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Start Time*
                </label>
                <input
                  type="date"
                  placeholder="Enter Subject"
                  className="input-field"
                />
              </div>

              <div className="form-field">
                <label htmlFor="" className="form-label">
                  End Time *
                </label>
                <input
                  type="date"
                  placeholder="DD-MM-YY"
                  className="input-field"
                />
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
