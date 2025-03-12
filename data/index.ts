export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "A software Engineering honours graduate from the University of Waikato",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName:
      "lg:h-64 flex items-center justify-center mx-auto lg:mt-16 hidden lg:block",
    titleClassName: "justify-end",
    img: "waikato.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Check out the Repo for this site",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an RPG character builder",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's get in touch!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Demo Shopping Website",
    des: "A shopping website built with React and next.js",
    img: "cart.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/drizzle.svg"],
    link: "https://github.com/Jason-1/sprout-scribble",
  },
  {
    id: 2,
    title: "RPG Character builder",
    des: "A character builder for Pathfinder 2nd edition",
    img: "Pathfinder_RPG.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Jason-1/pathfinder-character-builder",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern",
    desc: "Assisted in development of a C++ application to stream video output to a VR headset for a flight simulator.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "IT Support Engineer",
    desc: "Provided L2 support to clients. Assited in the development of front end features to our React based SaaS platform.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Jason-1",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jason-cutts-1778651b9/",
  },
];
