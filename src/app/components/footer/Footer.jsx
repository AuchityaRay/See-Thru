"use client"
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1E1D23] py-8">
        <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 ml-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/white_logo.png"
                  width={200}
                  height={309}
                  className="h-12 mr-3"
                  alt="Seethru Logo"
                />
              </Link>
              <p className="text-lg py-3 mr-3 ml-2 text-[#D1D0D0]  font-nunito font-medium leading-6">
                Book verified professionals at <br /> Google for anonymous
                1-on-1 voice <br />
                calls
              </p>
              <button className="bg-[#0E713C]  text-white text-[17px]  font-nunito font-semibold  py-3 px-4 rounded my-3 ml-2">
                Find a Google Expert
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="mx-10">
                <h2 className="mb-8 text-[24px] font-medium text-gray-900 dark:text-white">
                  Company
                </h2>
                <ul classNameName="text-white text-base dark:text-gray-400 font-medium  font-nunito">
                  <li className="mb-8 ">
                    <Link href="/" className="text-[#D1D0D0] hover:underline" >
                      About
                    </Link>
                  </li>
                  <li className="mb-8">
                    <Link href="/" className=" text-[#D1D0D0] hover:underline">
                      FAQ
                    </Link>
                  </li>
                  <li className="mb-8">
                    <Link href="/" className=" text-[#D1D0D0] hover:underline">
                      Job Expert
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-10">
                <h2 className="mb-8 text-[24px] font-medium text-gray-900 dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-600 text-base dark:text-gray-400 font-medium font-nunito">
                  <li className="mb-8">
                    <Link href="/" className="text-[#D1D0D0] hover:underline ">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-8">
                    <Link href="/" className="text-[#D1D0D0] hover:underline">
                      Give Us Feedback
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mx-10">
                <h2 className="mb-8 text-[24px] font-medium text-gray-900 dark:text-white">
                  Follow Us
                </h2>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  {/* Linkedin */}
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none">
                      <g clip-path="url(#clip0_32_13)">
                        <path
                          d="M11.4759 0.774292C5.13789 0.774292 0 5.97351 0 12.3872C0 18.8008 5.13789 24.0001 11.4759 24.0001C17.8139 24.0001 22.9518 18.8008 22.9518 12.3872C22.9518 5.97351 17.8138 0.774292 11.4759 0.774292ZM8.41409 18.0015H5.89445V9.76403H8.41409V18.0015ZM7.14226 8.68528C6.31937 8.68528 5.65228 8.00471 5.65228 7.16533C5.65228 6.32585 6.31947 5.64533 7.14226 5.64533C7.96506 5.64533 8.63216 6.32585 8.63216 7.16533C8.6322 8.00476 7.96511 8.68528 7.14226 8.68528ZM17.8565 18.0015H15.349V13.6775C15.349 12.4916 14.9039 11.8296 13.9772 11.8296C12.9686 11.8296 12.4417 12.519 12.4417 13.6775V18.0015H10.0251V9.76403H12.4417V10.8735C12.4417 10.8735 13.1687 9.51276 14.8947 9.51276C16.6209 9.51276 17.8565 10.5793 17.8565 12.7856L17.8565 18.0015Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_32_13">
                          <rect
                            width="22.9518"
                            height="23.2258"
                            fill="white"
                            transform="translate(0 0.77417)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  {/* Linkedin */}
                  {/* Twitter */}
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg width="23" height="24" viewBox="0 0 22 19" fill="none">
                      <path
                        d="M21.8658 2.92274C21.0814 3.2818 20.2358 3.51776 19.3597 3.6306C20.2562 3.08689 20.9489 2.22514 21.2749 1.189C20.4294 1.70194 19.4922 2.061 18.504 2.26618C17.6992 1.38391 16.5684 0.870972 15.2849 0.870972C12.8909 0.870972 10.9349 2.84067 10.9349 5.27202C10.9349 5.62082 10.9757 5.95937 11.047 6.27739C7.42038 6.09273 4.19105 4.33847 2.04156 1.68142C1.66463 2.32773 1.4507 3.08689 1.4507 3.88708C1.4507 5.41565 2.21474 6.76981 3.39645 7.53923C2.67316 7.53923 2.00081 7.33405 1.40995 7.02629C1.40995 7.02629 1.40995 7.02629 1.40995 7.05706C1.40995 9.19091 2.91765 10.9759 4.91434 11.376C4.5476 11.4786 4.16049 11.5299 3.76319 11.5299C3.48813 11.5299 3.21308 11.4991 2.94821 11.4479C3.49832 13.1816 5.0977 14.4742 7.02308 14.505C5.53575 15.695 3.65113 16.3926 1.59332 16.3926C1.24696 16.3926 0.900593 16.3721 0.55423 16.3311C2.48979 17.5827 4.79209 18.311 7.25738 18.311C15.2849 18.311 19.6959 11.6017 19.6959 5.78496C19.6959 5.59005 19.6959 5.40539 19.6857 5.21047C20.5414 4.59494 21.2749 3.81526 21.8658 2.92274Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  {/* Twitter */}

                  {/* Instagram */}
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg width="23" height="24" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M7.01758 0.383423H15.8804C19.2567 0.383423 22 3.14377 22 6.54112V15.4592C22 17.0923 21.3552 18.6585 20.2076 19.8133C19.06 20.9681 17.5034 21.6169 15.8804 21.6169H7.01758C3.64127 21.6169 0.89801 18.8565 0.89801 15.4592V6.54112C0.89801 4.908 1.54275 3.34176 2.69039 2.18697C3.83803 1.03218 5.39457 0.383423 7.01758 0.383423ZM6.80656 2.50677C5.79918 2.50677 4.83305 2.90944 4.12072 3.62621C3.40839 4.34298 3.00821 5.31513 3.00821 6.32879V15.6715C3.00821 17.7842 4.70692 19.4935 6.80656 19.4935H16.0914C17.0988 19.4935 18.0649 19.0909 18.7773 18.3741C19.4896 17.6573 19.8898 16.6852 19.8898 15.6715V6.32879C19.8898 4.21606 18.1911 2.50677 16.0914 2.50677H6.80656ZM16.9883 4.09928C17.3381 4.09928 17.6735 4.23909 17.9209 4.48797C18.1682 4.73685 18.3071 5.0744 18.3071 5.42637C18.3071 5.77833 18.1682 6.11588 17.9209 6.36476C17.6735 6.61364 17.3381 6.75346 16.9883 6.75346C16.6385 6.75346 16.303 6.61364 16.0557 6.36476C15.8083 6.11588 15.6694 5.77833 15.6694 5.42637C15.6694 5.0744 15.8083 4.73685 16.0557 4.48797C16.303 4.23909 16.6385 4.09928 16.9883 4.09928ZM11.449 5.69178C12.8481 5.69179 14.19 6.25106 15.1793 7.24657C16.1687 8.24208 16.7245 9.59228 16.7245 11.0001C16.7245 12.408 16.1687 13.7582 15.1793 14.7537C14.19 15.7492 12.8481 16.3085 11.449 16.3085C10.0499 16.3085 8.70801 15.7492 7.71866 14.7537C6.72931 13.7582 6.1735 12.408 6.1735 11.0001C6.1735 9.59228 6.72931 8.24208 7.71866 7.24657C8.70801 6.25106 10.0499 5.69179 11.449 5.69178ZM11.449 7.81513C10.6095 7.81513 9.8044 8.15069 9.2108 8.748C8.61719 9.34531 8.2837 10.1554 8.2837 11.0001C8.2837 11.8449 8.61719 12.655 9.2108 13.2523C9.8044 13.8496 10.6095 14.1852 11.449 14.1852C12.2885 14.1852 13.0936 13.8496 13.6872 13.2523C14.2808 12.655 14.6143 11.8449 14.6143 11.0001C14.6143 10.1554 14.2808 9.34531 13.6872 8.748C13.0936 8.15069 12.2885 7.81513 11.449 7.81513Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  {/* Instagram */}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
       
          <div className="sm:flex sm:items-center sm:justify-center  sm:flex-row flex-col ">
            
            <div className="basis-4/4 sm:mb-0 mb-[-50px] ">
            <span className="text-[16px] text-gray-500 sm:text-center   dark:text-gray-400">
              <Link href="" className="hover:underline text-[#D1D0D0] font-nunito">
                Copyright
              </Link>
            </span>
            </div>
            <span className="mx-10 lg:visible invisible">
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="white" />
              </svg>
              </span>
            <div className="basis-4/4 sm:mb-0 mb-[-50px] sm:ml-0 ml-2">
            <span className="text-[16px] text-gray-500 sm:text-center  dark:text-gray-400">
              <Link href="" className="hover:underline text-[#D1D0D0] font-nunito">
               Policy
              </Link>
            </span>
            </div>
            <span className="mx-10 lg:visible invisible">
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="white" />
              </svg>
              </span>
            <div className="basis-4/4 sm:mb-0 mb-[-50px] sm:ml-0 ml-2">
            <span className="text-[16px] text-gray-500 sm:text-center dark:text-gray-400">
              <Link href="" className="hover:underline text-[#D1D0D0] font-nunito">
               Terms
              </Link>
            </span>
            </div>
            
            <span className="mx-10 lg:visible invisible">
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="white" />
              </svg>
            </span>
            <div className="basis-4/4 sm:ml-0 ml-2">
            <span className="text-[16px] text-gray-500 sm:text-center dark:text-gray-400">
              <Link href="" className="hover:underline text-[#D1D0D0] font-nunito">
              Our Mission
              </Link>
            </span>
            </div>
           
          </div>
        
        </div>
      </footer>
    </div>
  );
};

export default Footer;
