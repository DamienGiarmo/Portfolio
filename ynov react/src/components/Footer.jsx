import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D1520]">
      <div className="max-w-screen-xl mx-auto md:py-4">
        <div>
          <ul className="flex flex-wrap text-sm font-medium dark:text-gray-400">
            <li>
              <a href="#presentation" className="dark:text-[#70B8FF] md:dark:hover:text-[#0090FF] md:me-6">
                Moi
              </a>
            </li>
            <li>
              <a href="#competence" className="dark:text-[#70B8FF] md:dark:hover:text-[#0090FF] md:me-6">
                Compétences 
              </a>
            </li>
            <li>
              <a href="#projet" className="dark:text-[#70B8FF] md:dark:hover:text-[#0090FF] md:me-6">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="dark:text-[#70B8FF] md:dark:hover:text-[#0090FF] md:me-6">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center dark:text-white">
          2024 BY Giarmo Damien
        </span>
      </div>
    </footer>
  );
};

export default Footer;
