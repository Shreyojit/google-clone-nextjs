"use client"
// import React, { useState } from "react";
// import Link from "next/link";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { RiAccountBoxLine, RiMapPin2Line, RiYoutubeLine, RiSearchLine, RiMailLine, RiDriveLine } from "react-icons/ri";

// export default function HomeHeader() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="flex justify-end p-5 text-sm">
//       <div className="flex space-x-4 items-center relative">
//         <Link href="https://mail.google.com" className="hover:underline">
//           Gmail
//         </Link>
//         <Link href="https://image.google.com" className="hover:underline">
//           Images
//         </Link>
//         <div className="relative">
//           <BsThreeDotsVertical
//             onClick={toggleDropdown}
//             className="cursor-pointer bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"
//           />
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md">
//               <Link href="https://www.google.com/account/about/" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
//                 <RiAccountBoxLine className="mr-2" /> Account
//               </Link>
//               <Link href="https://www.google.com/maps" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
//                 <RiMapPin2Line className="mr-2" /> Maps
//               </Link>
//               <Link href="https://www.youtube.com" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
//                 <RiYoutubeLine className="mr-2" /> YouTube
//               </Link>
//               <Link href="https://www.google.com/search" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
//                 <RiSearchLine className="mr-2" /> Search
//               </Link>
//               <Link href="https://www.google.com/gmail/" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
//                 <RiMailLine className="mr-2" /> Gmail
//               </Link>
//               <Link href="https://www.google.com/drive/" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
//                 <RiDriveLine className="mr-2" /> Drive
//               </Link>
//             </div>
//           )}
//         </div>
//         <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
//       </div>
//     </header>
//   );
// }



import React, { useState } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiAccountBoxLine, RiMapPin2Line, RiYoutubeLine, RiSearchLine, RiMailLine, RiDriveLine } from "react-icons/ri";

export default function HomeHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center relative">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <div className="relative">
          <BsThreeDotsVertical
            onClick={toggleDropdown}
            className="cursor-pointer bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-96 md:h-64 bg-white shadow-lg rounded-md grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              <Link href="https://www.google.com/account/about/" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
                <RiAccountBoxLine className="mr-2 text-2xl md:text-6xl" /> <span className="inline-block">Account</span>
              </Link>
              <Link href="https://www.google.com/maps" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
                <RiMapPin2Line className="mr-2 text-2xl md:text-6xl" /> <span className="inline-block">Maps</span>
              </Link>
              <Link href="https://www.youtube.com" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
                <RiYoutubeLine className="mr-2 text-2xl md:text-6xl" /> <span className="inline-block">YouTube</span>
              </Link>
              <Link href="https://www.google.com/search" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
                <RiSearchLine className="mr-2 text-2xl md:text-6xl" /> <span className="inline-block">Search</span>
              </Link>
              <Link href="https://www.google.com/gmail/" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
                <RiMailLine className="mr-2 text-2xl md:text-6xl" /> <span className="inline-block">Gmail</span>
              </Link>
              <Link href="https://www.google.com/drive/" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-blue-500">
                <RiDriveLine className="mr-2 text-2xl md:text-6xl" /> <span className="inline-block">Drive</span>
              </Link>
            </div>
          )}
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
      </div>
    </header>
  );
}

