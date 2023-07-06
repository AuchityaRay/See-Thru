"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./navbar.module.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  marginTop: 1,
  marginBottom: 2,
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: 4,
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid",
    borderColor: "#0E713C",
    borderRadius: 8,
    fontSize: 16,
    padding: "10px 8px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="bg-white w-full fixed top-0 left-0 right-0 z-10 py-2">
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
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
                    <Image src="/Close.svg" width={30} height={30} alt="logo" />
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
          <div
            className={`flex-l justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex">
              <li className=" text-xl text-black py-5 md:px-6 text-base font-medium leading-5 text-center border-b-2 md:border-b-0 hover:text-green-950 md:hover:text-green-950">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className=" text-xl text-black py-5 md:px-6 text-base font-medium leading-5 text-center border-b-2 md:border-b-0 hover:text-green-950 md:hover:text-green-950">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
            
              <li className="text-xl text-black py-6 md:px-6 text-base font-medium  leading-5 text-center border-b-2 md:border-b-0 hover:text-green-950 md:hover:text-green-950">
                <Link href="" onClick={() => setNavbar(!navbar)}>
                  <button className={styles.btn_register} onClick={handleOpen}>
                    Login/Signup
                  </button>
                </Link>
              </li>
              <li className="text-xl text-black py-5 md:px-6 text-base font-medium leading-5 text-center border-b-2 md:border-b-0 hover:text-green-950 md:hover:text-green-950">
                <Link href="" onClick={() => setNavbar(!navbar)}>
                  <button className={styles.btn_google} onClick={handleOpen}>
                    Job Seeker
                  </button>
                </Link>
              </li>
              {/* <li className="py-2 md:px-6" >
            <Link href="" onClick={() => setNavbar(!navbar)}>
            <button className={styles.btn_register}  onClick={handleOpen}>Login/Signup</button>
           </Link>
            </li> */}
              {/* <li className="py-2 md:px-6" >
            <Link href="" onClick={() => setNavbar(!navbar)}>
            <button className={styles.btn_google}  onClick={handleOpen}>Job Seeker</button>
           </Link>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sm:w-2/5 w-4/5">
          <h2 className="text-center font-nunito text-[25px] mb-3 font-semibold">
            Create your Account
          </h2>
          <hr />
          <p className="text-center font-[inter] sm:text-[14px] text-[10px] my-1.5 font-normal italic">
            Your personal information will not be displayed on SeeThru. All
            interactions are completely anonymous.
          </p>

          <div className="grid  place-content-center ">
            <FormControl variant="standard" className="justify-center">
              <label
                shrink
                htmlFor="Work Email"
                className="font-normal my-1  text-[13px]   font-[inter] text-black"
              >
                Work Email
              </label>
              <BootstrapInput id="Work Email" />
            </FormControl>
            <FormControl variant="standard" className="justify-center  ">
              <label
                shrink
                htmlFor="First Name"
                className="font-normal my-1  text-[13px]  font-[inter] text-black"
              >
                First Name
              </label>
              <BootstrapInput id="First Name" />
            </FormControl>
            <FormControl variant="standard" className="justify-center ">
              <label
                shrink
                htmlFor="Last Name"
                className="font-normal my-1  text-[13px]   font-[inter] text-black"
              >
                Last Name
              </label>
              <BootstrapInput id="Last Name" />
            </FormControl>

            <FormControl variant="standard" className="justify-center ">
              <label
                shrink
                htmlFor="Phone Number"
                className="font-normal my-1  text-[13px]   font-[inter] text-black"
              >
                Phone Number
              </label>
              <BootstrapInput id="phonenumber" />
            </FormControl>

            <FormControl variant="standard" className="justify-center ">
              <label
                shrink
                htmlFor="Linkedin"
                className="font-normal my-1  text-[13px]   font-[inter] text-black"
              >
                Linkedin
              </label>
              <BootstrapInput id="Linkedin" />
            </FormControl>
            <FormControl variant="standard" className="justify-center ">
              <label
                shrink
                htmlFor="create_password"
                className="font-normal my-1  text-[13px]   font-[inter] text-black"
              >
                Create Password
              </label>
              <BootstrapInput id="create_password" />
            </FormControl>
            <div className="flex flex-row ">
              <div className=" sm:mt-0 mb-0">
              <FormControlLabel
              control={<Checkbox defaultChecked color="success" />}  id="checked"
            />
              </div>
              <div className="align-middle mt-2 mb-0 ml-[-10px]">
              <label htmlFor="checked" className="text-[11px] sm:leading-none  sm:text-[15px] font-normal italic">I acknowledge that the information I provided is accurate</label>
              </div>
            </div>

            <p className="text-center font-[inter] sm:text-[11px] text-[10px]  my-1.5 font-normal italic">
              By clicking below and creating an account, I agree to
              <span className="text-[#0E713C]">SeeThru</span> Terms of Service
              and Privacy Policy
            </p>
            <button className="bg-[#0E713C] capitalize rounded-lg mt-2 text-white opacity-75 h-12 hover:bg-[#086131]">
              Create Account
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
