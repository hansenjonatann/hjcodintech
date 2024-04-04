import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarLinks = [
    {
      label: "Beranda",
      url: "#",
    },
    {
      label: "Layanan",
      url: "#layanan",
    },
    {
      label: "FAQ",
      url: "#faq",
    },
  ];

  return (
    <nav className=" py-4 px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl text-primary font-bold ">HJ Codin Tech</div>
        <div className="lg:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-primary focus:outline-none "
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-4">
            {navbarLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="text-primary font-semibold 00 hover:underline transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className=" text-primary py-2 ">
            {navbarLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="block py-2 px-4 hover:bg-opacity-5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
