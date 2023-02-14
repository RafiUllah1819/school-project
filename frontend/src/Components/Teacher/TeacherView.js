import React from "react";
import teacherimg from "../../assets/images/teacher-img.png";

export const TeacherView = () => {
  return (
    <div className="page-wrapper">
      <div className="teacher-view container-fluid">
        <div className="page-header">
          <h1>Teacher details</h1>
        </div>
        <div className="card">
          <div className="card-body d-flex">
            <div className="card-left">
              <img src={teacherimg} alt="" />
            </div>
            <div className="card-right">
              <h1>
                Bruce Wills <span>(Maths)</span>
              </h1>
              <div className="teacher-data d-flex">
                <ul>
                  <li>Subject:Physics</li>
                  <li> </li>
                  <li>Email: abc@gmail.com</li>
                  <li>Section: F</li>
                  <li>Address: xyz street 12, City, Country</li>
                </ul>
                <ul>
                  <li>Gender: Male</li>
                  <li>Blood Group: A+</li>
                  <li>Religion: Religion</li>
                  <li>Class: 8th</li>
                  <li>Language: English</li>
                </ul>
              </div>
              <div className="teacher-bio">
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
