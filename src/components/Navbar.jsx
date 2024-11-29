import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0D1520]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#C2E6FF]">
            Portfolio Giarmo Damien
          </span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#C2E6FF] rounded-md md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-bold flex flex-col p-4 md:flex-row md:space-x-16">
            <li>
              <a
                href="#presentation"
                className="text-[#70B8FF] hover:text-[#0090FF]"
              >
                Moi
              </a>
            </li>
            <li>
              <a
                href="#competence"
                className="text-[#70B8FF] hover:text-[#0090FF]"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projet"
                className="text-[#70B8FF] hover:text-[#0090FF]"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#70B8FF] hover:text-[#0090FF]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
