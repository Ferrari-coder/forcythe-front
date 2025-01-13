import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../../constants";

export function NavBar() {
  // State to toggle the mobile menu
  const [toggle, setToggle] = useState(false);
  // State to track if the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect to handle scroll events and update `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled more than 50px, set isScrolled to true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        // Otherwise, set it to false
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <nav
      className={`fixed left-0 top-0 z-30 flex w-full items-center justify-between gap-10  px-7 lg:px-28 py-7 text-white backdrop-blur ${
        isScrolled ? "backdrop-blur-md" : "bg-[#030516]"
      }`}
    >
      {/* Logo and navigation links */}
      <div className="flex items-center gap-20">
        <a href="/">
          <img
            alt="Forcythe logo"
            width="150"
            height="10"
            decoding="async"
            src="/images/forcythelogo.svg"
            className="h-[31px] w-[140px]"
          />
        </a>
        <div className=" items-center gap-4 text-base hidden md:flex">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/services#portfolio">Portfolio</a>
          <a href="/studio">Studio</a>
          <a href="/foundation">Foundation</a>
        </div>
      </div>
      <div className="bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer">
        <Menu
          className="h-[18px] w-[18px]"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Mobile menu container */}
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } px-6 py-10 absolute top-20 right-0 mx-4 my-2 min-w-[250px] z-10 rounded-[2rem]`}
        style={{
          background:
            "linear-gradient(0deg, rgb(3,5,22) 32%, rgb(7, 22, 38) 85%)",
        }}
      >
        <ul className="list-none flex justify-end items-start flex-col gap-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <div className="relative w-[132px]">
          <button className="relative z-10 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-[#064386] hover:text-white">
            Book a Call
          </button>
          <div className="absolute right-[6px] top-[6px] h-12 w-[132px] rounded-full border border-dashed border-gray-200 "></div>
        </div>
      </div>
    </nav>
  );
}
