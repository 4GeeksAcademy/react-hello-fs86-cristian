import React from "react";
import "/workspaces/react-hello-fs86-cristian/src/styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Mi sitio</a>
          <form className="nav__form d-flex" role="search">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </form>
        </div>
      </nav>
    );
};

export default Navbar;
