import React from "react";

export const ParentsView = () => {
  return (
    <div className="page-wrapper">
      <div className="parents-view container-fluid">
        <div className="page-header">
          <h1>Parents details</h1>
        </div>
        <div className="card">
          <div className="card-body d-flex">
            <div className="card-right">
              <h1>Parents Name: Bruce Wills</h1>
              <div className="parents-data d-flex">
                <ul>
                  <li>Phone: +12235354</li>
                  <li> </li>
                  <li>Email: abc@gmail.com</li>

                  <li>Home Address: xyz street 12, City, Country</li>
                  <li>Office Address: xyz street 12, City, Country</li>
                </ul>
                <ul>
                  <li>Gender: Male</li>
                  <li>Country:Country</li>
                  <li>Religion: Religion</li>
                  <li>123567-23453452-3</li>
                </ul>
              </div>
              <div className="parents-bio">
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
