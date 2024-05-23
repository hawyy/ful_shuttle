import { useState } from "react";
import { NavLink } from "react-router-dom";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/login" },
  { name: "Services", href: "/register" },
  //   { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex flex-col">
      <div className="mx-auto w-full flex justify-between">
        <section className="logo ">
          <NavLink to={"/"}>
            <span className="text-4xl text-button-blue font-extrabold cursor-pointer">
              F.U.S
            </span>
          </NavLink>
        </section>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 mb-10`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400" />
    </nav>
  );
};

export default Navbar;
