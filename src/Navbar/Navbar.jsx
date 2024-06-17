import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Logo from "../assets/Image/LOGO.png"

import translations from "../Lang/Lang.json";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [language, setLanguage] = useState("en");
  const [text, setText] = useState(translations.en);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setText(translations[language]);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [language]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleMode = () => {
    setDark(!dark);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <nav className="bg-[#151232] text-[#e7f9f9]">
      <div className="flex items-center container font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <NavLink to="/">
            <img src={Logo} alt="logo" className="md:cursor-pointer  h-[60px] object-cover w-[120px]" />
          </NavLink>
          {/* Mobile menu button */}
          <form>
            <label className="hamburger md:hidden">
              <input type="checkbox" onClick={toggleMenu} />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </form>
        </div>

        {/* Desktop navigation */}
        <ul className="md:flex hidden uppercase items-baseline gap-8  font-[Poppins]">
          <NavLinks />
          <NavLink to="/register">
            <h1>
              {user ? user.firstName : "Login"}
            </h1>
          </NavLink>
        </ul>
        <div className="pt-[5px] ">

          <select className="language-selector hidden md:block text-[black] w-[100px] h-[30px] rounded pb-[5px] border-none ">
            <option value="#" onClick={() => changeLanguage("en")}>English</option>
            <option value="#" onClick={() => changeLanguage("ru")}>Русский</option>
            <option value="#" onClick={() => changeLanguage("uz")}>Ozbek</option>
          </select>
        </div>

        {/* Mobile nav */}
        <ul
          className={`md:hidden rang fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 text-[#fff] ${
            open ? "left-0 bag" : "left-[-100%] bag "
          } cursor-pointer `}
        >
          <NavLinks />
          <div className="py-5"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
