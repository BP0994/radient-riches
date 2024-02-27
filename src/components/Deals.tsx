/** @format */

"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import computer from "../assets/computer.png";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export function Deals() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-[412]:w-[10px] w-auto  h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="60" className=" w-full mt-4">
          <Image
            src={computer}
            className="h-60 w-60 object-contain align-middle mx-auto rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black font-bold text-md items-center justify-center text-center   mt-4  mx-32 dark:text-neutral-300">
          web builder 1
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-slate-700 items-center justify-center text-center text-sm  mt-2 dark:text-neutral-300">
          Computer Modern classic with wix support
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-md font-normal text-slate-800">
            $39.96
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl  dark:text-black  text-xs font-bold">
            <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
              View deals
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
