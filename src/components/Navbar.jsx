import Container from "./Container";
import { useNavigate } from "react-router-dom";
// import TextSpan from "./animations/TextSpan";
import WordAnimation from "./animations/WordAnimation";
import { IoMenuOutline } from "react-icons/io5";
import useMenuModal from "../hooks/useMenuModal";
import useDarkMode from "../hooks/useDarkMode";
import WavyText from "./animations/WavyText";
import { useState } from "react";

// import IoMenu from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const menuModal = useMenuModal();
  const { toggleDarkMode, isDark } = useDarkMode((state) => state);
  const [replay, setReplay] = useState(true);

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

  const onHover = () => {
    console.log(replay);
    setReplay(!replay);
    setTimeout(() => setReplay(true), 200);
  };

  <WavyText text="Awesome Wavy Text!" replay={replay} />;

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
            <ul className="flex gap-10 font-semibold text-base text-zinc-900 dark:text-stone-200">
              <li
                className="cursor-pointer tracking-widest"
                onClick={() => handleClickScroll("work")}
              >
                <WavyText
                  text="WORK"

                  // onHover={() => setReplay(!replay)}
                />
                {/* <WordAnimation>WORK</WordAnimation> */}
              </li>
              <li
                className="cursor-pointer tracking-widest"
                onClick={() => handleClickScroll("profile")}
              >
                <WavyText text="ABOUT ME" />
                {/* <WordAnimation>ABOUT ME</WordAnimation> */}
              </li>
              <li
                className="cursor-pointer tracking-widest"
                onClick={() => handleClickScroll("contact")}
              >
                <WavyText text="CONTACT" />
                {/* <WordAnimation>CONTACT</WordAnimation> */}
              </li>
              <li
                onClick={() => toggleDarkMode(isDark)}
                className="cursor-pointer pt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7.75"
                    fill="#E7E5E4"
                    stroke="#18181B"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="24"
                    cy="8"
                    r="7.75"
                    stroke="#E8E8E8"
                    fill="#18181B"
                    strokeWidth="0.5"
                  />
                </svg>
              </li>
              <li className="cursor-pointer tracking-widest ">EN/ES</li>
            </ul>
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
            {/* <ul className="flex gap-10 font-semibold text-base text-stone-200">
              <li
                className="cursor-pointer tracking-widest"
                onClick={() => handleClickScroll("work")}
              >
                {wordToSpan("WORK").map((letter, idx) => (
                  <TextSpan key={idx}>{letter}</TextSpan>
                ))}
              </li>
              <li
                className="cursor-pointer tracking-widest"
                onClick={() => handleClickScroll("profile")}
              >
                {wordToSpan("ABOUT ME").map((letter, idx) => (
                  <TextSpan key={idx}>{letter}</TextSpan>
                ))}
              </li>
              <li
                className="cursor-pointer tracking-widest"
                onClick={() => handleClickScroll("contact")}
              >
                {wordToSpan("CONTACT").map((letter, idx) => (
                  <TextSpan key={idx}>{letter}</TextSpan>
                ))}
              </li>
              <li className="cursor-pointer pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7.75"
                    fill="#E8E8E8"
                    stroke="#E8E8E8"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="24"
                    cy="8"
                    r="7.75"
                    stroke="#E8E8E8"
                    strokeWidth="0.5"
                  />
                </svg>
              </li>
              <li className="cursor-pointer tracking-widest ">EN/ES</li>
            </ul> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
