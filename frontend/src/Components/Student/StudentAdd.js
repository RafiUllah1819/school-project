import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../Redux/Actions/ClassAction";
import { studentInfo, studentObj } from "../data";
import { Input } from "../Input";

export const StudentAdd = () => {
  const [student, setStudent] = useState(studentObj);
  const dispatch = useDispatch();
  const allClasses = useSelector(
    (state) => state.ReducerGetClass.getClasses.data
  );
  console.log("all classses", allClasses);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(typeof value);
    setStudent(Object.assign({}, student, { [name]: value }));
  }

  const selectRecord = (data) => {
    return console.log("val", data);
  };

  return (
    <div className="page-wrapper">
      <div className="add-student container-fluid">
        <div className="page-header">
          <h1>Add Information</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-text">Student Information</h2>
            <div className="d-flex form-fields-wrap">
              {studentInfo.map((info, index) => {
                console.log(info);
                if (info.status === "input") {
                  return (
                    <div key={index} className="form-field">
                      <label htmlFor="" className="form-label">
                        {info.label} *
                      </label>
                      <Input
                        type={info.type}
                        placeholder={info.placeholder}
                        name={info.name}
                        value={student[info.name]}
                        onChange={handleChange}
                        className={info.class}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="form-field">
                      <label htmlFor="" className="form-label">
                        {info.label}*
                      </label>
                      <div className="student-select">
                        <select name={info.name} onChange={handleChange}>
                          <option value="select">Select</option>
                          {info.value.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Class
                </label>
                <div className="student-select">
                  <select name="class" id="" onChange={handleChange}>
                    <option value="">Select Class</option>
                    {allClasses &&
                      allClasses.map((option) => {
                        return (
                          <option
                            key={option}
                            value={option}
                            onClick={selectRecord(option.classField)}
                          >
                            {option.classField}
                          </option>
                        );
                      })}
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Section
                </label>
                <div className="student-select">
                  <select name="section" id="">
                    <option value="">Select Section</option>
                    <option value="">A</option>
                    <option value="">2A</option>
                    <option value="">3B</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>

              {/* <div className="form-field">
                <label className="form-label">Enter First Name *</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Enter Last Name*
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Gender*
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="DD-MM-YY"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Roll
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Enter Roll Number</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Blood Group
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select your Blood Group</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Region
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Select Religion</option>
                    <option value="">Religion</option>
                    <option value="">Religion</option>
                    <option value="">Religion</option>
                    <option value="">Religion</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Enter Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
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
                  Admissin Id
                </label>
                <input
                  type="text"
                  placeholder="Enter Admission Id"
                  className="input-field"
                />
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
                  Upload Student Photo
                </label>
                <input type="file" className="file-field" />
              </div> */}
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
