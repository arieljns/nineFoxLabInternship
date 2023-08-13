import React from "react";
import { Link } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight:500,
    fontFamily:"inherit",
  };
  return (
    <header>
      <h1>
        <EditNoteIcon />
        Todo App
      </h1>
      <div className="login">
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
        <Link to="/signup" style={linkStyle}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
