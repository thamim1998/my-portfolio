"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dcard";
import Link from 'next/link';

export function ThreeDCardDemo({id, title, img, des, iconLists, link} : {
  id: number;
  title: string;
  img: string;
  des: string;
  iconLists: string[];
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#161a31] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-purple dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-purple text-sm max-w-sm mt-2 dark:text-neutral-50"
        >
         {des}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            translateX={-30}
            as="button"
            className="px-4 py-2 flex justify-between rounded-xl text-xs font-normal dark:text-white cursor-default"
          >
           {iconLists.map((icon) => (
            <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
             <img src={icon} alt={icon} className="p-2" />
            </div>
           ))}
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href={link}>
           GitHub
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
