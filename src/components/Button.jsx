import React from "react";
import { Link } from "react-router-dom";

function Button({ path, name, target }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-light p-3 mt-2 fw-bolder"
      >
        <Link className="nav-link" target={target} to={path}>
          {name}
        </Link>
      </button>
    </div>
  );
}

export default Button;
