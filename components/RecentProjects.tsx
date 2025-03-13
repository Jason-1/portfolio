import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, repoLink }) => (
          <div
            key={id}
            className=" h-auto flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <div className="border border-white/[0.1] rounded-2xl px-4 py-4">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg: rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg.img" />
                </div>

                {link ? (
                  <a className="z-10 absolute" href={link}>
                    <img src={img} alt={title} />
                  </a>
                ) : (
                  <img src={img} alt={title} className="z-10 absolute" />
                )}
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center px-4 mt-4">
                <div className="flex items-center">
                  <a
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                    href={repoLink}
                  >
                    Check Repo
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                <div className="flex items-center">
                  {link ? (
                    <>
                      <a
                        className="flex lg:text-xl md:text-xs text-sm text-purple"
                        href={link}
                      >
                        Visit Site
                      </a>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </>
                  ) : (
                    <a className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Coming Soon
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
