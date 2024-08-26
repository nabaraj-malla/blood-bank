import React from "react";
import { BiDonateBlood, BiSolidUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  //Logout handler
  const handleLogout = () => {
    localStorage.clear();
    // alert("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <BiDonateBlood color="red" />
            Blood Bank
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <span className="user-icon">
                  <BiSolidUserCircle />
                </span>
                {/* user.name is throwing error */}
                Welcome &nbsp;
                {user?.name ||
                  user?.hospitalName ||
                  user?.organisationName}{" "}
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {
              // location.pathname === "/"  It is commented to hide analytics from donar page
              location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname === "/hospital" ? (
                <li className="nav-item mx-3">
                  <Link to="/analytics" className="nav-link">
                    Analytics
                  </Link>
                </li>
              ) : (
                <li className="nav-item mx-3">
                  <Link to="/" className="nav-link home-logout">
                    Home
                  </Link>
                </li>
              )
            }
            <li className="nav-item mx-3">
              <button
                className="btn btn-danger home-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
