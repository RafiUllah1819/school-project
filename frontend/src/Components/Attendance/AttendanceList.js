import React from "react";

export const AttendanceList = () => {
  return (
    <div className="page-wrapper ">
      <div className="attendance-list container-fluid">
        <div className="page-header">
          <h1>Attendance</h1>
        </div>
        <div className="attendance-list-form">
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
                    <i class="fa-solid fa-list"></i>
                  </span>
                  <span className="grip">
                    {" "}
                    <i class="fa-solid fa-grip"></i>
                  </span>
                  <span className="download">
                    <div className="download-icon">
                      <i class="fa-solid fa-download"></i>
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
                      <option value="" selected>
                        10
                      </option>
                    </select>
                    <i className="fa fa-angle-down"></i>
                  </span>
                  <span>entries</span>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Total</th>
                      <th>Present</th>
                      <th>Absent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>One</td>
                      <td>10</td>
                      <td>7</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Three</td>
                      <td>8</td>
                      <td>5</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Four</td>
                      <td>6</td>
                      <td>4</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Two</td>
                      <td>9</td>
                      <td>5</td>
                      <td>4</td>
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
