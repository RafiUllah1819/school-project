import React from "react";
import { Link } from "react-router-dom";

export const TimeTable = () => {
  return (
    <div className="page-wrapper ">
      <div className="teacher-list container-fluid">
        <div className="page-header">
          <h1>Time Table</h1>
        </div>
        <div className="teacher-form">
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
                placeholder="Search by Subject ..."
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
                <h2>Time Table</h2>
                <div className="table-grid">
                  <span className="download">
                    <div className="download-icon">
                      <i className="fa-solid fa-download"></i>
                    </div>
                    <button>Download</button>
                  </span>
                  <span className="plus-btn">
                    <Link to="/student-add" className="add">
                      +
                    </Link>
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
                      <th>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Subject</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                      <td>A12345</td>
                      <td>Alex</td>
                      <td>5B</td>
                      <td>Maths</td>
                      <td>8:00 AM</td>
                      <td>1:00 PM</td>
                      <td>02 June 2020</td>
                      <td>
                        <span className="show">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-pen-to-square"></i>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                      <td>A12345</td>
                      <td>Jhon</td>
                      <td>9th</td>
                      <td>Biology</td>
                      <td>8:00 AM</td>
                      <td>1:00 PM</td>
                      <td>02 June 2020</td>
                      <td>
                        <span className="show">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-pen-to-square"></i>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                      <td>A12345</td>
                      <td>Andrew</td>
                      <td>10th</td>
                      <td>English</td>
                      <td>8:00 AM</td>
                      <td>1:00 PM</td>
                      <td>02 June 2020</td>
                      <td>
                        <span className="show">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-pen-to-square"></i>
                        </span>
                      </td>
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
