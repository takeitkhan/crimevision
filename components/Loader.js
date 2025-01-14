import Image from "next/image";

import logo from './../public/img/logo.jpg'
export default function Loader() {
    return (
        <div className="flex justify-center items-center fixed inset-0 bg-white z-50">
        <div className="relative">
          <Image
          src={logo}
          width={200}
          height={200}
            alt="Loading"
            className="w-32 h-32 animate-bounce"
          />
        </div>
      </div>
    );
  }
  