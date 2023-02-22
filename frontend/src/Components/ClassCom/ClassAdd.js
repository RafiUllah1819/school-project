import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const ClassAdd = () => {
  const [successMessage, setSuccessMessage] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [valid, setValid] = useState(false);
  const [state, setState] = useState({
    classField: "",
    sectionField: "",
  });

  function handleSuccess(msg, success) {
    setSuccessMessage(msg, success);
    setShowSuccessMessage(true);

    // hide the message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  }
  // console.log("success msg", successMessage);
  // console.log("success condition", showSuccessMessage);
  const onSubmit = async (e) => {
    e.preventDefault();
    const { classField, sectionField } = state;
    if (classField < 1 || sectionField < 1) {
      setValid(true);
    } else {
      setValid(false);
      try {
        const response = await axios.post(
          "http://localhost:5000/classRoute/add-class",
          state
        );
        console.log("resonse", response);
        handleSuccess({
          msg: response.data.message,
          success: response.data.success,
        });

        setState({
          classField: "",
          sectionField: "",
        });
      } catch (error) {
        toast.dismiss();
        toast.error("Something went wrong");
        console.log("errr");
      }
    }
  };
  console.log("class data", state);

  return (
    <div className="page-wrapper">
      <div className="add-class container-fluid">
        <div className="page-header">
          <h1>Add New Class</h1>
        </div>

        <div className="card">
          <div className="card-body">
            <h2 className="card-text">Class Information</h2>

            <div className="d-flex form-fields-wrap">
              <div className="form-field">
                <label className="form-label">Enter Class *</label>
                <input
                  type="text"
                  placeholder="Enter Class"
                  className="input-field"
                  value={state.classField}
                  onChange={(e) =>
                    setState({ ...state, classField: e.target.value })
                  }
                />
                {valid && state.classField === "" ? (
                  <span className="text-danger">Class is required</span>
                ) : null}
              </div>
              <div className="form-field">
                <label className="form-label">Enter Section</label>
                <input
                  type="text"
                  placeholder="Enter section"
                  className="input-field"
                  value={state.sectionField}
                  onChange={(e) =>
                    setState({
                      ...state,
                      sectionField: e.target.value,
                    })
                  }
                />
                {valid && state.sectionField === "" ? (
                  <span className="text-danger">Section is required</span>
                ) : null}
              </div>
            </div>
            <div className="form-field">
              <div className="show-message">
                {successMessage.success ? (
                  <span className="success">
                    {showSuccessMessage && successMessage.msg}
                  </span>
                ) : (
                  <span style={{ color: "red" }}>
                    {showSuccessMessage && successMessage.msg}
                  </span>
                )}{" "}
              </div>
              <button onClick={onSubmit} className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
