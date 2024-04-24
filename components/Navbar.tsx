"use client"

import { useState } from "react";
import styles from "../public/styles/style";
import { close, logo, menu } from "../public/assets";
import { navLinks } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return ( 
    <>
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={logo} alt="hoobank" className="w-[12%] h-[10%]" />
          <SignedOut>
          <button type="button" className={`py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          <Link href={'/home'}>
            Login
            </Link>
          </button>
          </SignedOut>
        <SignedIn>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link href={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        <li className="font-poppins font-normal ml-10 cursor-pointer text-[16px]">
              <UserButton afterSignOutUrl="/"  />
          </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </SignedIn>
    </nav>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Navbar;
