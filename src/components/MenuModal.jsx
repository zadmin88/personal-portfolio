import Container from "./Container";
import useMenuModal from "../hooks/useMenuModal";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ToggleDarkmode from "./ToggleDarkmode";

const MenuModal = () => {
  const menuModal = useMenuModal();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(menuModal.isOpen);

  useEffect(() => {
    setShowMenu(menuModal.isOpen);
  }, [menuModal]);

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    setShowMenu("false");
    menuModal.onClose();

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed pt-14 font-Monserrat bg-stone-300 dark:bg-zinc-900 z-40 translate
      duration-300
      h-20
      ${showMenu ? "-translate-y-0" : "-translate-y-full"}
      ${showMenu ? "opacity-100" : "opacity-0"} `}
    >
      <div className="py-6">
        <Container>
          <div
            className="
              flex 
              items-center 
              justify-center
              md:gap-3
              md:hidden
              
            "
          >
            {location.pathname !== "/" ? (
              <ul className="flex gap-4 items-center justify-between text-xs dark:text-stone-200 text-zinc-900 py-4">
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("description")}
                >
                  DESCRIPTION
                </li>
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("approach")}
                >
                  APPROACH
                </li>
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("screenshots")}
                >
                  SCREENSHOTS
                </li>
                <li className="cursor-pointer pt-1">
                  <ToggleDarkmode />
                </li>
              </ul>
            ) : (
              <ul className="flex gap-4 items-center justify-between text-xs dark:text-stone-200 text-zinc-900 py-4">
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("work")}
                >
                  WORK
                </li>
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("profile")}
                >
                  ABOUT ME
                </li>
                <li
                  className="cursor-pointer tracking-widest"
                  onClick={() => handleClickScroll("contact")}
                >
                  CONTACT
                </li>
                <li className="cursor-pointer pt-1">
                  <ToggleDarkmode />
                </li>
              </ul>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MenuModal;
