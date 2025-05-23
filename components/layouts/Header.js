"use client";

import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";

// ==== image ====
import Logo from "../../public/img/logo.jpg";

const Header = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  const [currentTime, setCurrentTime] = useState('');

  const banglaMonths = [
    'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
    'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর',
  ];

  const banglaDays = [
    'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'
  ];

  const convertToBanglaNumber = (num) => {
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(n => banglaNumbers[n]).join('');
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const year = convertToBanglaNumber(now.getFullYear());
      const month = banglaMonths[now.getMonth()];
      const date = convertToBanglaNumber(now.getDate());
      const day = banglaDays[now.getDay()];
      const hours = convertToBanglaNumber(now.getHours());
      const minutes = convertToBanglaNumber(now.getMinutes());
      const seconds = convertToBanglaNumber(now.getSeconds());

      const formattedTime = `${day}, ${date} ${month}, ${year}, ${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  return (
    <header>
      <div className="border-b-2 py-1">
        <div className="container mx-auto">
          <div className="grid text-center sm:text-center lg:text-left lg:grid-cols-2 lg:justify-evenly lg:grid-flow-col">
            <div>{currentTime}</div>
            {/* <div className="lg:text-right hidden md:block">
              <button className="rounded-md border-2 border-gray-100 px-3">
                কনভার্টার
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="basis-1/2">
            <Link href="/">
              <Image
                src={Logo}
                className="w-70"
                alt="Daily Sabuj Nishan Logo"
                width={250}
                height={200}
              />
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            id="menu-toggle"
            className="block sm:hidden"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:block basis-1/2">
            <img src="/img/ads_1.jpg" alt="Ads One" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;