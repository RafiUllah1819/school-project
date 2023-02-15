import React from "react";

export const TeacherList = () => {
  return (
    <div className="page-wrapper ">
      <div className="teacher-list container-fluid">
        <div className="page-header">
          <h1>Teachers</h1>
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
                <h2>Teachers</h2>
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
                      <th>Section</th>
                      <th>Mobile Number</th>
                      <th>Address</th>
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
                      <td>A</td>
                      <td>+13015924551</td>
                      <td>Bacardi Rd P.O. Box N-4880, New Providence</td>
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
                      <td>Alex</td>
                      <td>5B</td>
                      <td>Physics</td>
                      <td>B</td>
                      <td>+13015924551</td>
                      <td>Bacardi Rd P.O. Box N-4880, New Providence</td>
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
                      <td>Alex</td>
                      <td>5B</td>
                      <td>English</td>
                      <td>C</td>
                      <td>+13015924551</td>
                      <td>Bacardi Rd P.O. Box N-4880, New Providence</td>
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
