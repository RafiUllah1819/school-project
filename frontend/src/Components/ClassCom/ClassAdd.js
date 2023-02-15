import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { get_AllClasses } from "../../Redux/Actions/ClassAction";

export const ClassAdd = () => {
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const [state, setState] = useState({
    classField: "",
    sectionField: "",
  });

  // useEffect(() => {
  //   dispatch(get_AllClasses());
  // }, []);

  const onSubmit = () => {
    axios
      .post("http://localhost:5000/classRoute/add-class", state)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error", err));
    setState({
      classField: "",
      sectionField: "",
    });
  };
  // console.log("class data", classData);

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
