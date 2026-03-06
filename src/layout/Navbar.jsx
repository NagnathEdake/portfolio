import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { isSignedIn } = useUser();

  const data = [
    // {
    //   name: "Github",
    //   path: "https://github.com/NagnathEdake",
    //   icon: "bi bi-github",
    //   loggedIn: true,
    // },
    // { name: "Home", path: "/", loggedIn: false },
    { name: "About", path: "/about", loggedIn: true },
    { name: "Portfolio", path: "/portfolio", loggedIn: true },
    { name: "Contact", path: "/contact", loggedIn: true },
  ];
  return (
    <section className="section-nav ">
      <nav className="navbar navbar-expand-lg fixed-top  p-2 px-5 pb-2   ">
        <div className="container ">
          <Link
            to="/"
            className="navbar-brand d-flex justify-content-center align-items-center gap-2"
          >
            {/* <div className="logo"></div> */}
            <div className="text-white fs-4 py-2">Nagnath Edake</div>
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
              {data.map((data) => {
                if (data.loggedIn && !isSignedIn) {
                  return null; // hide if not logged in
                }
                return (
                  <li className="nav-item  fw-bold " key={data.name}>
                    <Link
                      className="nav-link  "
                      aria-current="page"
                      to={data.path}
                    >
                      {data.icon && <i className={`me-2 ${data.icon}`}></i>}
                      {data.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <SignedIn>
              <div className="ms-3">
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="btn btn-outline-light ms-2">Login</button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
