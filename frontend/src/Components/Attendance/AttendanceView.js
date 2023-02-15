import React from "react";

export const AttendanceView = () => {
  return (
    <div className="page-wrapper ">
      <div className="attendance-view container-fluid">
        <div className="page-header">
          <h1>Attendance</h1>
        </div>
        <div className="attendance-view-form">
          <div className="search-wrap d-flex">
            <div className="search-fields">
              <input
                type="text"
                className="input-field"
                placeholder="Search by ID ..."
              />
            </div>
            <div className="search-fields">
              <input
                type="text"
                className="input-field"
                placeholder="Search by Name ..."
              />
            </div>
            <div className="search-fields">
              <input
                type="text"
                className="input-field"
                placeholder="Search by Phone ..."
              />
            </div>
            <div className="search-btn">
              <button className="btn">Search</button>
            </div>
          </div>
        </div>

        <div className="table-section">
          <div className="card">
            <div className="card-body">
              <div className="table-header d-flex">
                <h2>Attendance sheet</h2>
                <div className="table-grid">
                  <span className="list">
                    <i className="fa-solid fa-list"></i>
                  </span>
                  <span className="grip">
                    {" "}
                    <i className="fa-solid fa-grip"></i>
                  </span>
                  <span className="download">
                    <div className="download-icon">
                      <i className="fa-solid fa-download"></i>
                    </div>
                    <button>Download</button>
                  </span>
                  <span className="plus-btn">
                    <button className="add">+</button>
                  </span>
                </div>
              </div>
              <div className="table-responsive">
                <div className="table-entries">
                  <span>Show</span>{" "}
                  <span className="select-option">
                    <select name="" id="">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                      <option value="">9</option>
                      <option value="">10</option>
                    </select>
                    <i className="fa fa-angle-down"></i>
                  </span>
                  <span>entries</span>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Roll Number</th>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Section</th>
                      <th>Phone</th>
                      <th>Date only</th>
                      <th>Punch In</th>
                      <th>Punch Out</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10001</td>
                      <td>Jhon</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td>8:00</td>
                      <td>1:00</td>
                      <td>Present</td>
                    </tr>
                    <tr>
                      <td>10002</td>
                      <td>Jhon</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td>8:00</td>
                      <td>1:00</td>
                      <td>Present</td>
                    </tr>
                    <tr>
                      <td>10003</td>
                      <td>Anderson</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td></td>
                      <td></td>
                      <td>Absent</td>
                    </tr>
                    <tr>
                      <td>10004</td>
                      <td>Jhon</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td>8:00</td>
                      <td>1:00</td>
                      <td>Present</td>
                    </tr>
                    <tr>
                      <td>10005</td>
                      <td>Jhon</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td>8:00</td>
                      <td>1:00</td>
                      <td>Present</td>
                    </tr>
                    <tr>
                      <td>10006</td>
                      <td>Jhon</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td>8:00</td>
                      <td>1:00</td>
                      <td>Present</td>
                    </tr>
                    <tr>
                      <td>10007</td>
                      <td>Andrew</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td></td>
                      <td></td>
                      <td>Absent</td>
                    </tr>
                    <tr>
                      <td>10008</td>
                      <td>Jhon</td>
                      <td>One</td>
                      <td>A</td>
                      <td>+1323453332</td>
                      <td>01/11/2020</td>
                      <td></td>
                      <td></td>
                      <td>Absent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
