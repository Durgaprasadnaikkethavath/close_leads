import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeadset,
  faList,
  faShopSlash,
  faUser,
  faFile,
  faReceipt,
  faGear,
  faBars,
  faPhone,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import HeadingNav from "./components/navbar/HeadingNav";
import GroupStagePage from "./components/content/GroupStagePage";
import Footer from "./components/Footer";

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".sidebar");
      const menuToggle = document.querySelector(".menu_toggle");
      if (
        sidebar &&
        menuToggle &&
        !sidebar.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <section className="body">
      <section className={`sidebar ${isActive ? "active" : ""}`}>
        <header>
          <h1>AtoZeeVisas CRM</h1>
        </header>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} />
              <NavLink to="#">Dashboard</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeadset} />
              <NavLink to="#">Leads</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faList} />
              <NavLink to="#">Follow Ups</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faShopSlash} />
              <NavLink to="#">Close</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} />
              <NavLink to="#">Convert</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faFile} />
              <NavLink to="#">Task Management</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faReceipt} />
              <NavLink to="#">Invoice</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faGear} />
              <NavLink to="#">Settings</NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="dashboard_container">
        <header className="heading1">
          <button
            className="menu_toggle"
            onClick={toggleSidebar}
            aria-expanded={isActive}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="logo">
            <FontAwesomeIcon className="logo_name" icon={faPhone} />
            <FontAwesomeIcon className="logo_name" icon={faMessage} />
            <FontAwesomeIcon className="logo_name" icon={faBell} />
            <FontAwesomeIcon className="logo_name" icon={faUser} />
          </div>
        </header>
        <HeadingNav />
        <GroupStagePage />
        <Footer />
      </section>
    </section>
  );
};

export default Home;
