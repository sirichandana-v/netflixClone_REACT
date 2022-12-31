import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };

  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1280px-Logonfx.png"
        alt="logo"
      />

      <img
        className="navbar__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </div>
  );
};

export default Navbar;
