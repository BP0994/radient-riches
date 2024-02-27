/** @format */

"use client";
import React from "react";
import computer from "../assets/computer.png";
import Image from "next/image";
import { Rating } from "./Rating";
import { Button } from "@nextui-org/react";

const Middle = () => {
  return (
    <div className="m-4 rounded-lg">
      <div className="hero flex flex-col sm:flex-row p-2 rounded-lg bg-[#FBFCFD] ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex">
            <Image
              src={computer}
              className="max-w-sm rounded-lg "
              alt="main section"
            />
            <div className="max-[500px]:hidden md:hidden ml-4 mt-8">
              <Rating />
            </div>
          </div>
          <div>
            <p className="text-slate-800 font-normal my-2">
              <span className="text-black font-semibold">
                {" "}
                WixPro 72-Inch Responsive Website Builder-
              </span>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <p className="text-slate-800 font-normal flex flex-col my-2">
              <span className="text-black font-semibold"> Main highlights</span>
              <span>
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
              </span>
            </p>
            <Button className="my-2" color="primary" variant="shadow">
              View
            </Button>
          </div>
        </div>
        <div className="hidden md:flex">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default Middle;
