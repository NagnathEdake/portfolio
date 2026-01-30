import React from "react";
import { Link } from "react-router-dom";

function LinkIcon({ path, iconName }) {
  return (
    <Link
      to={path}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white fs-3 mx-2"
    >
      <i className={`bi bi-${iconName}`}></i>
    </Link>
  );
}

export default LinkIcon;
