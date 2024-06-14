import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { BsMenuApp } from "react-icons/bs";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="pt-[3px] pb-[3px]">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group borders"
              onClick={() => {
                setHeading(heading !== link.name ? link.name : "");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid text-black grid-cols-1 gap-10">
                    {link.sublinks.map((mysublinks, item) => (
                      <div key={item}>
                        <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink, subIndex) => (
                          <li key={subIndex} className="text-sm text-gray-600 my-2.5">
                            <Link to={slink.link} className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks, subIndex) => (
              <div key={subIndex} className="text-[#fff]">
                <button
                  className="open-file mt-[20px] pl-[10px] gap-[10px]"
                  onClick={() => setSubHeading(subHeading !== slinks.Head ? slinks.Head : "")}
                >
                  <span className="file-wrapper flex items-center gap-[5px]">
                    <BsMenuApp />
                    Open
                  </span>
                </button>
                <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                  {slinks.sublink.map((slink, subSublinkIndex) => (
                    <li key={subSublinkIndex} className="py-3 pl-14 text-[#ffffff]">
                      <Link to={slink.link}>{slink.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
