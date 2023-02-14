import React, { useState } from "react";

export const ClassAdd = () => {
  const [classData, setClassData] = useState([]);

  const [state, setState] = useState({
    classField: "",
    sectionField: "",
  });

  //   const onChangeClass = (e) => {
  //     setState([...state.classField, e.target.value]);
  //   };

  const onChangeClass = (e) => {
    const copy = { ...state };
    copy.classField = e.target.value;
    console.log("class field", copy);
    setState(copy);
  };

  const onChangeSection = (e) => {
    const copy = { ...state };
    copy.sectionField = e.target.value;
    setState(copy);
  };

  const onSubmit = () => {
    // const updatedData = [...classData];
    // const { classField, sectionField } = state;
    // const obj = { classField, sectionField };
    // updatedData.push(obj);
    setClassData([...classData, state]);
    setState({
      classField: "",
      sectionField: "",
    });
  };
  console.log("class data", classData);

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
                <label htmlFor="" className="form-label">
                  Enter Class *
                </label>
                <input
                  type="text"
                  placeholder="Enter Class"
                  className="input-field"
                  value={state.classField}
                  onChange={(e) =>
                    setState({ ...state, classField: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Enter Section
                </label>
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
              </div>
            </div>
            <div className="form-field">
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
