"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import { navData } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

import { clsx } from "clsx";

const Navbar = () => {
  const [isActive, setActive] = useState(true);

  const handleActive = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <nav className="w-full bg-gray-50 h-[52px] md:h-fit lg:h-[91px] relative">
      {/* Container section */}
      <div
        className="nav-container flex justify-between items-center h-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:mx-auto lg:flex lg:items-center md:px-6 md:py-4 lg:py-0 lg:h-full lg:justify-between"
        role="section"
      >
        {/* Navbar content */}
        <div className="nav__logo px-8 md:px-0">
          <Image
            src="/imgs/svgs/logo.svg"
            width={76.6}
            height={34}
            alt="Infinite Solution logo"
          />
        </div>
        <div
          className={`${
            isActive ? "translate-x-[initial]" : "translate-x-[-100vw]"
          } lg:translate-x-initial nav__link-container lg:w-[75%] transition-all absolute md:relative md:bg-transparent md:h-[initial] md:top-[initial] md:w-[initial] h-screen lg:h-[inherit] lg:relative top-[0%] lg:top-[initial] z-10 lg:z-[initial] w-full bg-[#0210337a] lg:bg-transparent`}
        >
          <div className="nav__link--responsive flex h-full px-8 py-8 md:py-0 md:px-0 lg:py-0 lg:px-0 flex-col md:flex-row md:items-center md:justify-end lg:flex-row items-start lg:items-center gap-6 w-[78%] lg:w-full bg-white lg:bg-transparent md:w-full">
            <Image
              onClick={handleActive}
              src="/imgs/svgs/hambuger-close.svg"
              alt="hamburger close icon"
              width={28.75}
              height={27.83}
              className="lg:hidden md:hidden"
            />
            <div className="link text-gray-600 font-bold md:mt-0 flex flex-col md:flex-row lg:flex-row lg:justify-end lg:items-center gap-8 lg:gap-8 capitalize lg:w-full lg:h-full mt-[44px] lg:mt-0">
              {navData.map((data) => (
                <Link className="block" key={data.id} href={data.path}>
                  {data.linkName}
                </Link>
              ))}
            </div>
            <div className="nav__call-to-action md:m-0 w-full md:w-fit lg:w-[30%] mt-6 lg:mt-0">
              <Link
                href="./contact-nous"
                className="py-4 px-6 justify-center w-fit flex bg-green-500 rounded"
              >
                Contactez Nous
              </Link>
            </div>
          </div>
        </div>

        {/* navbar hamburger */}
        <div className="relative space-y-1 md:hidden  mr-8 h-[22px] w-[35.04px] lg:hidden">
          <button
            onClick={handleActive}
            className="space-y-1  mr-8 h-[22px] w-[35.04px]"
          >
            <span className={styles.hambugerBar}></span>
            <span className={`${styles.hambugerBar} w-[35px]`}></span>
            <span className={`${styles.hambugerBar} absolute right-0`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
