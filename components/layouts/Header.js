"use client";


import React, { useState, useEffect } from "react";
import TopBar from "../Topbar";
import Menu from "@/app/homepage_sections/menu";

const Header = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("isOpen--", isOpen)

  return (
    <>
      <TopBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} menus={menus} />
    </>
  );
};

export default Header;