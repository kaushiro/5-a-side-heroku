import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children, subtitle }) => (
    <div className="page-header">
        <h1 className="page-title">
            <Link id="main-header" to="/">{ children }</Link>
            <br/>
            { subtitle ? <small>{ subtitle }</small> : null }
        </h1>
        
    </div>
);

export default Header;
