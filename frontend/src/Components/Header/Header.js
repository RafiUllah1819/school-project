import React from "react";
import logo from "../../assets/images/logo.png";
import profileImage from "../../assets/images/profile-image.png";

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrap">
          <div className="header-logo">
            <img src={logo} alt="school logo" />
          </div>
          <div className="header-right">
            <div className="header-search-field">
              <span>
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <input type="text" className="input-field" placeholder="Search" />
            </div>
            <div className="profile">
              <img src={profileImage} alt="" />
              <div className="profile-description">
                <h2>Adam Smith</h2>
                <h3>Administrator</h3>
              </div>
              <span>
                <i class="fa fa-angle-down"></i>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
