"use client";
import Menu from "@/app/homepage_sections/menu";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const Provider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
        <div>
          <Header setIsOpen={setIsOpen} isOpen={isOpen} />
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          <div>{children}</div>
          <Footer />
        </div>
    </>
  );
};

export default Provider;
