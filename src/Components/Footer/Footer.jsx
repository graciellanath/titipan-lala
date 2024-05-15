import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div class="bg-[#12372A] p-4 pb-8 w-full mt-10">
      <div class="mt-5 flex flex-col md:items-center md:flex-row md:justify-around md:text-left md:space-y-0  xl:flex-row xl:items-center justify-between mx-auto">
        <div class="mb-4 px-4 md:px-0 md:mb-0">
          <img src={logo} alt="logo" class="h-48 w-full object-cover mt-1 mx-auto invert" />
          <div class="mt-2 hidden md:block lg:hidden">
            <p class="text-[#ffffff] text-sm md:text-base text-center">
              Jalan Scientia Boulevard
            </p>
            <p class="text-[#ffffff] text-sm md:text-base text-center">
              Universitas Multimedia Nusantara, Gedung B lt. 6
            </p>
            <p class="text-[#ffffff] text-sm md:text-base text-center">
              Tangerang, Banten 15811, ID
            </p>
          </div>
        </div>

        <div class="mb-4 px-4 md:px-0 md:mb-0 md:hidden lg:block">
          <div class="mb-4">
            <p class="text-[#ffffff] text-sm md:text-base">
              Jalan Scientia Boulevard
            </p>
            <p class="text-[#ffffff] text-sm md:text-base">
              Universitas Multimedia Nusantara, Gedung B lt. 6
            </p>
            <p class="text-[#ffffff] text-sm md:text-base">
              Tangerang, Banten 15811, ID
            </p>
          </div>
        </div>

        <div class="mb-4 px-4 md:px-0 md:mb-0 md:flex md:flex-col gap-4 md:gap-0">
          <h5 class="font-bold text-[#ffffff] text-lg md:text-xl">
            Menu
          </h5>
          <div className="flex justify-center flex-wrap md:flex-col gap-3 md:gap-1">
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              class="text-[#ffffff] text-sm md:text-base hover:text-[#a0a0a0]"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-165}
              duration={500}
              class="text-[#ffffff] text-sm md:text-base hover:text-[#a0a0a0]"
            >
              About
            </Link>
            <Link
              to="title1"
              smooth={true}
              offset={-150}
              duration={500}
              class="text-[#ffffff] text-sm md:text-base hover:text-[#a0a0a0]"
            >
              Destination
            </Link>
            <Link
              to="title3"
              smooth={true}
              offset={-150}
              duration={500}
              class="text-[#ffffff] text-sm md:text-base hover:text-[#a0a0a0]"
            >
              Culinary
            </Link>
            <Link
              to="members"
              smooth={true}
              offset={-150}
              duration={500}
              class="text-[#ffffff] text-sm md:text-base hover:text-[#a0a0a0]"
            >
              Our Team
            </Link>
          </div>
        </div>

        <div class="mb-4 px-4 md:px-0 md:mb-0">
          <p class="mb-1 font-bold text-[#ffffff] text-lg md:text-xl">
            Contact Us
          </p>
          <div class="">
            <a
              target="_"
              href="https://www.instagram.com/"
              class="text-black no-underline"
            >
              <div class="flex">
                <p class="text-[#ffffff] no-underline hover:text-[#a0a0a0]  text-base">
                  Instagram
                </p>
              </div>
            </a>

            <a
              target="_"
              href="https://twitter.com/"
              class="text-black no-underline"
            >
              <div class="flex">
                <p class="text-[#ffffff] no-underline hover:text-[#a0a0a0] text-base">
                  Twitter
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
