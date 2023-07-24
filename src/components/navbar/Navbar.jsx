import React from "react";
import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
// BEN --> Block Element Modifier
const Menu = () => {
  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/wgpt3">What is GPT</Link>
      </p>
      <p>
        <Link to="/openAI">Open AI</Link>
      </p>
      <p>
        <Link to="/caseStudies">Case Studies</Link>
      </p>
      <p>
        <Link to="/library">Library</Link>
      </p>
    </>
  );
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={function () {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <OutsideClickHandler
                onOutsideClick={() => {
                  setToggleMenu(false);
                  console.log("clicked");
                }}
              >
                <Menu />
              </OutsideClickHandler>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
