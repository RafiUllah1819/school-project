import React from "react";
import studentview from "../../assets/images/student-view-image.png";

export const StudentView = () => {
  return (
    <div className="page-wrapper">
      <div className="student-view container-fluid">
        <div className="page-header">
          <h1>Student details</h1>
        </div>
        <div className="card">
          <div className="card-body d-flex">
            <div className="card-left">
              <img src={studentview} alt="" />
            </div>
            <div className="card-right">
              <h1>
                Bruce Wills <span>(Computer Science)</span>
              </h1>
              <div className="student-data d-flex">
                <ul>
                  <li>Father Name: Bruce Wills</li>
                  <li>Date of Birth: 18 Feb 1997</li>
                  <li>Roll No: 111222 </li>
                  <li>Email: abc@gmail.com</li>
                  <li>Section: F</li>
                  <li>Address: xyz street 12, City, Country</li>
                </ul>
                <ul>
                  <li>Gender: Female</li>
                  <li>Blood Group: A+</li>
                  <li>Religion: Religion</li>
                  <li>Class: 8th</li>
                  <li>Language: English</li>
                </ul>
              </div>
              <div className="student-bio">
                <h3>Bio</h3>
                <p>
                  Lörem ipsum laliga radiotos i bev, mynat än friva. Ölig giren
                  teposs. Autoposkap virade tesk utan nejorKronijybelt savis.
                  Kombucha vasm sedan bena. Mise gudat men klimatlarm och depana
                  bilig. Lörem ipsum laliga radiotos i bev, mynat än friva. Ölig
                  giren teposs Lörem ipsum laliga radiotos i bev, mynat än
                  friva. Ölig giren teposs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
