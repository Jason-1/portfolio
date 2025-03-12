"use client";

import React from "react";
import { socialMedia } from "@/data";

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
      {socialMedia.map((profile) => (
        <div
          key={profile.id}
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <img
            src={profile.img}
            alt={profile.id.toString()}
            onClick={() => window.open(profile.link, "_blank")}
            width={20}
            height={20}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
