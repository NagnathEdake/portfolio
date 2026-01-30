import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const data = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ];
  return (
    <section className="section-nav ">
      <nav className="navbar navbar-expand-lg fixed-top  p-2 px-5 pb-2   ">
        <div className="container ">
          <Link
            to="/"
            className="navbar-brand d-flex justify-content-center align-items-center gap-2"
          >
            <div className="logo"></div>
            <div className="text-white fs-4">Nagnath Edake</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
              {data.map((data) => (
                <li className="nav-item  fw-bold " key={data.name}>
                  <Link
                    className="nav-link  "
                    aria-current="page"
                    to={data.path}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
