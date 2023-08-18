import Container from "./Container";
import useMenuModal from "../hooks/useMenuModal";
import { useState, useEffect } from "react";

const MenuModal = () => {
  const menuModal = useMenuModal();
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
      className={`fixed pt-14 font-Monserrat  bg-zinc-900 z-40 translate
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
              justify-between
              md:gap-3
              md:hidden
              
            "
          >
            <ul className="flex gap-4 items-center justify-between text-xs text-stone-200 py-4">
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
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MenuModal;
