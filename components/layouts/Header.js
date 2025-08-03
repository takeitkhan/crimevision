"use client";


import React, { useState, useEffect } from "react";
import TopBar from "../Topbar";
import Menu from "@/app/homepage_sections/menu";
import Shironam from "../Shironam";
import ShironamSwipper from "../ShironamSwipper";

const Header = ({ menus,settings,shironamNews }) => {
  const [isOpen, setIsOpen] = useState(false);

  // console.log("isOpen--", isOpen)

  return (
    <>
      <TopBar setIsOpen={setIsOpen} isOpen={isOpen} settings={settings} />
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} menus={menus} />
      {/* <Shironam/> */}
      {shironamNews?.length>0 && <ShironamSwipper shironamNews={shironamNews}/> }
      
    </>
  );
};

export default Header;