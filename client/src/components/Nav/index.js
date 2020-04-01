import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import "./index.css";
import Rlogo from "./rlogo.png"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <p className="navbar-brand" id="nav-title" href='/'>
        <span style={{color:'royalblue'}}>G</span>
        <span style={{color:'tomato'}}>o</span>
        <span style={{color:'goldenrod'}}>o</span>
        <span style={{color:'royalblue'}}>g</span>
        <span style={{color:'mediumseagreen'}}>l</span>
        <span style={{color:'tomato'}}>e</span><img id="logo" alt="" src={Rlogo} /> <span id="logo-span" className="lead">Book Search</span>
      </p>
      
      <div id="nav-a">
      <a id="nav-icon" href="/"><SearchIcon fontSize="large" style={{color:"#49b2ad"}} /></a>
      <a id="nav-icon" href="/"><BookmarksOutlinedIcon fontSize="large" style={{color:"#49b2ad"}} /></a>
    </div>
    </nav>
  );
}

export default Nav;
