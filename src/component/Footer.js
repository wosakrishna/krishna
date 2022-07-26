import React from "react";
import logo1 from "./pic/f_logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container text-center">
          <div className="img">
            <img src={logo1} alt="" />
          </div>
          <p>© 2021. All rights reserved by Krishna.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
