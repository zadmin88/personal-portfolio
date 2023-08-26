import Container from "./Container";
import { useNavigate, useLocation } from "react-router-dom";
// import TextSpan from "./animations/TextSpan";
// import WordAnimation from "./animations/WordAnimation";
import { IoMenuOutline } from "react-icons/io5";
import useMenuModal from "../hooks/useMenuModal";
import WavyText from "./animations/WavyText";
import ToggleDarkmode from "./ToggleDarkmode";

// import { useState } from "react";

// import IoMenu from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const menuModal = useMenuModal();
  const location = useLocation();

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHome = () => {
    navigate("/");
    handleClickScroll("top");
  };

  return (
    <div className=" fixed font-Monserrat h-20 bg-stone-200 dark:bg-zinc-900 z-50">
      <div className="py-6">
        <Container>
          {/* Large Screens */}
          <div
            className="
          hidden
          flex-row 
          items-center 
          justify-between
           md:gap-3
          md:flex
          bg-stone-200
          dark:bg-zinc-900
        "
          >
            <h1
              onClick={handleHome}
              className="text-zinc-900 dark:text-stone-200 tracking-widest   font-extralight text-2xl cursor-pointer"
            >
              Simón Franco
            </h1>
            {location.pathname === "/" ? (
              <ul className="flex gap-10 font-semibold text-base text-zinc-900 dark:text-stone-200">
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("work")}
                >
                  <WavyText text="WORK" />
                </li>

                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("profile")}
                >
                  <WavyText text="ABOUT ME" />
                </li>
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("contact")}
                >
                  <WavyText text="CONTACT" />
                  {/* <WordAnimation>CONTACT</WordAnimation> */}
                </li>
                <li className="pt-1">
                  <ToggleDarkmode />
                </li>
              </ul>
            ) : (
              <ul className="flex gap-10 font-semibold text-base text-zinc-900 dark:text-stone-200">
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => navigate(-1)}
                >
                  <WavyText text="HOME" />
                </li>
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("description")}
                >
                  <WavyText text="DESCRIPTION" />
                </li>

                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("approach")}
                >
                  <WavyText text="APPROACH" />
                </li>

                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("screenshots")}
                >
                  <WavyText text="SCREENSHOTS" />
                </li>

                <li className="pt-1">
                  <ToggleDarkmode />
                </li>
              </ul>
            )}
          </div>
          {/* Small screens */}
          <div
            className="
          flex
          flex-row 
          items-center 
          justify-between
          md:gap-3
          md:hidden
        "
          >
            <h1
              onClick={handleHome}
              className="dark:text-stone-200 text-zinc-900 tracking-widest   font-extralight text-2xl cursor-pointer"
            >
              Simón Franco
            </h1>

            <button
              className="dark:text-stone-200 text-zinc-900"
              onClick={() => menuModal.toggleMenu(menuModal.isOpen)}
            >
              <IoMenuOutline className="h-8 w-8" />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
