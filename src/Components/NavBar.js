import { useState } from "react";
import SideBar from "./SideBar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Link, useLocation }from "react-router-dom"

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation(); 

  const links = [
    {
      name: "Home",
      path: "/home",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
    {
      name: "Logout",
      path: "/signin",
      icon: "",
    },
  ];


  function closeSideBar() {
    setShowSideBar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link className="logo" to= "/home">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link 
            className={
            location.pathname === link.path
              ? "active"
              : ""
              
          }
            to = {link.path} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(showSideBar ? false : true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <SideBar close = {closeSideBar} links={links} />}
    </>
  );
}
