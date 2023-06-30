"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from  "./navbar.module.css"

const Navbar = () => {
  const[navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="bg-white w-full fixed top-0 left-0 right-0 z-10 py-2">
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" >
              <Image
                      src="/SeeThrucropped.png"
                      width={150}
                      height={102}
                      alt="logo"
                    />
              </Link>
              {/* Hamburger button for Mobile */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/Close.svg"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/hamburger menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className={`flex-l justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ navbar ? 'p-12 md:p-0 block' : 'hidden'}`}> 
          <ul className="h-screen md:h-auto items-center justify-center md:flex">
            <li className=" text-xl text-black py-2 md:px-6 text-base font-medium leading-5 text-center border-b-2 md:border-b-0 hover:text-green-950 md:hover:text-green-950">
           <Link href="/" onClick={() => setNavbar(!navbar)}>
            Home
           </Link>
            </li>
            <li className=" text-xl text-black py-2 md:px-6 text-base font-medium leading-5 text-center border-b-2 md:border-b-0 hover:text-green-950 md:hover:text-green-950">
            <Link href="/" onClick={() => setNavbar(!navbar)}>
            About
           </Link>
            </li>
            <li className="text-xl text-black py-2 md:px-6 text-base font-medium leading-5 text-center border-b-2 md:border-b-0 hover:text-green-950 md:hover:text-green-950">
            <Link href="/" onClick={() => setNavbar(!navbar)}>
            Join the Waitlist
           </Link>
            </li>
            <li className="py-2 md:px-6" >
            <Link href="/" onClick={() => setNavbar(!navbar)}>
            <button class={styles.btn_google}>Become a Google Expert & Start Earning</button>
           </Link>
            </li>
           
          </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
