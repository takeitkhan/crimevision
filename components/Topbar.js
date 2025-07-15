"use client";

import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";

// ==== image ====
import Logo from "../public/img/logo.jpg";
import { getMetaValueByMetaName } from "@/helpers/metaHelpers";

const TopBar = ({ setIsOpen, isOpen,settings }) => {
   const [currentTime, setCurrentTime] = useState('');
  const handleClick = () => {
    setIsOpen(!isOpen);

  };
 

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




    // const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  // const twitter = getMetaValueByMetaName(settings, "twitter_url") || "#";
  //  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
   

  return (
    <header>
      <div className="border-b-2 py-1 px-1">
        <div className="container mx-auto">
          <div className="grid text-center gap-2 sm:text-center lg:text-left lg:grid-cols-2 lg:justify-evenly lg:grid-flow-col">
            <span>{currentTime}</span>
            <div className="lg:text-right ">
              <Link 
              href={facebookLink}
              target="blank"
              className="rounded-md border-2 border-gray-100 px-3 text-blue-600">
               আমাদের ফেসবুক পেইজ ভিজিট করতে ক্লিক করুন
              </Link>
            </div>
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
                alt=" Logo"
                width={250}
                height={200}
              />
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            id="menu-toggle"
            className="block md:hidden"
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

export default TopBar;