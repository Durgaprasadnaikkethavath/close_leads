import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with <Link className="footer_link">Visily</Link>
      </p>
    </div>
  );
};

export default Footer;
