import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import uuid from "react-uuid";

export const ClassAdd = () => {
  const [isValid, setIsValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [valid, setValid] = useState(false);
  const [state, setState] = useState({
    classField: "",
    sectionField: "",
  });
  const array = ["one", "two", "three"];

  function handleSuccess(msg, success) {
    setSuccessMessage(msg, success);
    setShowSuccessMessage(true);

    // hide the message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const { classField, sectionField } = state;
    if (classField < 1 || !isValid || sectionField < 1) {
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

  const onChangeClassField = (e) => {
    const inputValue = e.target.value;
    setState({
      ...state,
      classField: inputValue,
    });
    const isValidInput =
      ["kg", "nursary", "KG", "NURSARY", "NUR"].includes(
        inputValue.toUpperCase()
      ) ||
      (!isNaN(Number(inputValue)) && inputValue >= 1 && inputValue <= 12);
    console.log("validInput", isValidInput);
    setIsValid(isValidInput);
  };

  const onChangeSectionField = (e) => {
    const inputValue = e.target.value;
    setState({
      ...state,
      sectionField: inputValue.toUpperCase(),
    });
  };

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
                  onChange={onChangeClassField}
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
                  onChange={onChangeSectionField}
                />
                {valid && state.sectionField === "" ? (
                  <span className="text-danger">Section is required</span>
                ) : null}
              </div>
              {!isValid && (
                <p className="text-danger">
                  Only numbers or letters like KG & Nursary allowed
                </p>
              )}
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
