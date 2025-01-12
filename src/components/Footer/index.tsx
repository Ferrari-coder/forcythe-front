import { useState } from "react";
import { companyLinks, socialLinks } from "../../data";

export function Footer() {
  // State to toggle the checkbox
  const [toggle, setToggle] = useState(false);

  return (
    <div className="px-7 lg:px-28 py-10 bg-[rgb(7,22,38)]">
      <div className="lg:grid lg:grid-cols-3 my-10">
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="w-full grid grid-cols-4">
            <input
              className="py-3 col-span-3 bg-transparent outline-none border text-white border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              placeholder="Your Email Address"
              type="text"
            />
            <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white rounded-e-full text-sm font-medium border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 mt-5 items-center">
            <div
              className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center "
              onClick={() => setToggle(!toggle)}
            >
              {/* conditional rendering to render the dot if the checkbox is clicked */}
              {toggle ? (
                <div className="bg-white rounded-full w-2 h-2"></div>
              ) : (
                ""
              )}
              <input className="hidden" type="checkbox" />
            </div>
            <label className="text-sm text-white cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <img
              alt="Forcythe logo"
              width="130"
              height="9"
              decoding="async"
              className="mb-5 md:mb-8"
              src="/images/forcythelogo.svg"
            />
            <p className="text-base text-[rgb(174,169,177)] leadin font-normal">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[rgb(96,166,231)] flex justify-center items-center"
                  href={social.href}
                  rel="noopener noreferrer"
                >
                  <img
                    alt={social.alt}
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    src={social.imgSrc}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:pl-10">
            <h3 className="mb-8 text-2xl font-bold text-white">Company</h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-base text-[rgb(179,208,242)] font-medium"
                >
                  <a href={link.href}>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[rgb(96,166,231)] flex justify-center items-center"
                  href={social.href}
                  rel="noopener noreferrer"
                >
                  <img
                    alt={social.alt}
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    src={social.imgSrc}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright border-t-[1px] border-[rgb(96,166,231)]">
        <p className="text-[rgb(179,208,242)] text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </div>
  );
}
