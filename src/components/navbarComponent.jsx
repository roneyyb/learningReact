import React from "react";

const NavBar = ({ counter }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                NavBar
                <span className="badge badge-pill badge-secondary">
                    {counter}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;

