import React from "react";
import { NavLink } from "react-router-dom";

export const NavListMarvel = () => {
  const handle = ()=>{
    localStorage.clear();
  }
  return (
    <>
      <div className=" d-flex container-fluid  bg-dark justify-content-center mb-3 mt-3 ">
        <nav className="navbar navbar-expand-sm navbar-dark  p-2 nav-underline ">
          <div className="container-fuild ">
            <div className="navbar-nav ">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-3 text-nowrap text-md${
                    isActive ? " active color-button  py-2 px-5  rounded-3" : ""
                  }`
                }
                to="/marvel/characters"
              >
                Characters
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-3 text-nowrap text-md ${
                    isActive ? " active color-button  py-2 px-5 rounded-3" : ""
                  }`
                }
                to="/marvel/series"
                onClick={handle}
              >
                Series
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-3 text-nowrap text-md ${
                    isActive ? " active color-button  py-2 px-5 rounded-3" : ""
                  }`
                }
                to="/marvel/comics" 
                onClick={handle}

              >
                Comics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-3 text-nowrap text-md ${
                    isActive ? " active color-button  py-2 px-5 rounded-3" : ""
                  }`
                }
                to="/marvel/search"

              >
                Filter
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-3 text-nowrap text-md ${
                    isActive
                      ? "active color-button  py-2 px-5 border-success border rounded-3"
                      : ""
                  }`
                }
                to="/app"
                onClick={handle}

              >
                Exit
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
