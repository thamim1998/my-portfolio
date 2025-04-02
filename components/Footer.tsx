import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from 'next/image'

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        As a driven Engineering student, I'll bring hustle, creativity, and up-to-date strategies to your project
        </h1>
        <p className="text-white-200 md:mt-10 my-5">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
        <a href="mailto:thamimdev4@gmail.com">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Thamim</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a href={profile.link}> 
              <img src={profile.img} alt={profile.img} width={20} height={20} />
             </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
