"use client";
import { UserCircleIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState, useEffect } from "react";
import BasicMenu from "./BasicMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${isScrolled && "bg-[#000]"}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link href="/">
            <img
              src="/nav-logo.svg"
              alt="KFLIX"
              width={100}
              height={100}
              className="cursor-pointer object-contain"
            />
          </Link>

          <BasicMenu />

          <ul className="hidden space-x-4 md:flex">
            <li className="navbarLink">
              <Link href="/">Home</Link>
            </li>
            <li className="navbarLink">
              <Link href="/movies">TV Shows</Link>
            </li>
            <li className="navbarLink">
              <Link href="/movies">Movies</Link>
            </li>
            {/* <li className="navbarLink">
              <Link href="/">My Lists</Link>
            </li> */}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <SearchIcon className="h-6 w-6" />
          <Link href="/account">
            <UserCircleIcon className="cursor-pointer h-6 w-6" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
