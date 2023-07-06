"use client";
import * as React from "react";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RoomIcon from "@mui/icons-material/Room";
import Link from "next/link";
import Image from "next/image";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
const GoogleExpert = () => {
  return (
    <div>
      <div className="my-[200px] mx-40">
        {/* heading */}
        <div class="flex flex-nowrap  align-middle">
          <div className="basis-1/4">
            <Button
              variant="contained"
              className="bg-[#0E713C] hover:bg-[#107b42]"
            >
              <FilterAltIcon /> Filter
            </Button>
          </div>
          <div className="basis-1/2 text-center ">
            <h1 className="text-[35px] font-semibold font-nunito">
              Choose your Job Expert
            </h1>
          </div>
          <div className="basis-1/4 text-right ">
            <Link
              href=""
              className="bg-white text-[#0E713C] font-semibold text-base align-middle"
            >
              <ArrowBackIcon /> Back
            </Link>
          </div>
        </div>
        {/* Heading */}
        <div class="flex flex-nowrap align-middle my-20  ">
          <div className={`${styles.border_box}  rounded-xl w-full p-5  `}>
            <div class="flex flex-nowrap space-x-7 space-y-5 align-middle">
              <div className={`${styles.logo_bg}  rounded-lg h-1/2 p-2 `}>
                <Image src="/Google.png" width={200} height={200} />
              </div>
              {/* First section */}
              <div className="basis-1/3 text-left  flex flex-col items-start">
                <div className="mb-1">
                  <h1 className="text-[22px] font-semibold font-inter text-[#3F3D56]">
                    UI / UX Designer
                  </h1>
                </div>
                <div className="mb-2">
                  <h1 className="text-[12px] font-semibold font-inter text-dark">
                    <RoomIcon /> Mumbai (Maharastra)
                  </h1>
                </div>
                <div
                  className={`${styles.price_button}  rounded-md  p-2  `}
                >
                  <h1 className="text-[15px] font-semibold font-inter text-[#3F3D56]">
                    Price: $50 for 30 min
                  </h1>
                </div>
              </div>
              {/* second section */}

              <div className="basis-1/3 text-left  flex flex-col mt-2 items-start">
                <div className="mb-2">
                  <h1 className="text-[18px] font-semibold font-inter text-dark">
                    Naruto2589
                  </h1>
                </div>
                <div className="mb-2">
                  <h1 className="text-[14px] font-semibold font-inter text-dark">
                    <WorkIcon /> 6 Years at Google
                  </h1>
                </div>
                <div className="flex flex-row mb-2">
                  <h1 className="text-[14px] font-semibold font-inter text-[#3F3D56]">
                    Reviews :
                  </h1>
                  <Image src="/reviews.png" width={71} height={71} />
                </div>
              </div>
              {/* Third section */}
              <div className="basis-1/3 text-left flex flex-col align-middle items-start">
                <div className="p-5"></div>
                <div className="mb-2">
                  <h1 className="text-[14px] font-semibold font-inter text-dark">
                    <WorkIcon /> Industry Experience: 6 Years
                  </h1>
                </div>
                <div className="mb-2">
                  <h1 className="text-[14px] font-semibold font-inter text-dark">
                    <PhoneIcon /> No. of calls completed: 12 Calls
                  </h1>
                </div>
              </div>
              {/* Buttons */}
              <div className="basis-1/2 text-left flex flex-col mt-2 items-end">
                <div className="mt-2 flex flex-col w-1/2 space-y-2  ">
                  <Button
                    variant="contained"
                    className="bg-[#0E713C] text-[13px] hover:bg-[#0E713C]  px-[2.2rem]"
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outlined"
                    className="border-[#0E713C] text-[13px] hover:bg-[#0E713C] text-[#0E713C] hover:text-white  px-[1.5rem]"
                  >
                    View Profile
                  </Button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleExpert;
