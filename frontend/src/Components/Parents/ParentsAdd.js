import React from "react";

export const ParentsAdd = () => {
  return (
    <div className="page-wrapper">
      <div className="add-parents container-fluid">
        <div className="page-header">
          <h1>Add Parents</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-text">Parents Information</h2>
            <div className="d-flex form-fields-wrap">
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Parents ID *
                </label>
                <input
                  type="text"
                  placeholder="Enter Parents ID"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Last Name*
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
                  Phone*
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  CNIC*
                </label>
                <input
                  type="text"
                  placeholder="Enter CNIC"
                  className="input-field"
                />
              </div>

              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Religion
                </label>
                <input
                  type="text"
                  placeholder="Enter Religion"
                  className="input-field"
                />
              </div>
              <h2 className="address-heading">Address</h2>
              <div className="form-field address">
                <label htmlFor="" className="form-label">
                  Home Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="input-field"
                />
              </div>
              <div className="form-field address">
                <label htmlFor="" className="form-label">
                  Office Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Country*
                </label>
                <div className="student-select">
                  <select name="" id="">
                    <option value="">Country</option>
                    <option value="">Pakistan</option>
                    <option value="">China</option>
                    <option value="">India</option>
                    <option value="">USA</option>
                    <option value="">UAE</option>
                  </select>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  State*
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  City*
                </label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Zip Code*
                </label>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  className="input-field"
                />
              </div>
              <h2 className="parents-heading">Child Information</h2>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Child Registration ID*
                </label>
                <input
                  type="text"
                  placeholder="Enter Child Registration ID"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Child Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Child Name"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  First Child*
                </label>
                <input
                  type="number"
                  placeholder="Enter Number of Child"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Child Registration ID*
                </label>
                <input
                  type="text"
                  placeholder="Enter Child Registration ID"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Child Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Child Name"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  2nd Child*
                </label>
                <input
                  type="number"
                  placeholder="Enter Number of Child"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Child Registration ID*
                </label>
                <input
                  type="text"
                  placeholder="Enter Child Registration ID"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Child Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Child Name"
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <label htmlFor="" className="form-label">
                  Third Child*
                </label>
                <input
                  type="number"
                  placeholder="Enter Number of Child"
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
