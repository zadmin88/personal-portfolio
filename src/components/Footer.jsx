import Container from "./Container";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [dateState, setDateState] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bottom-0 font-Monserrat bg-stone-200 text-zinc-900 dark:bg-zinc-900 dark:text-stone-200 h-20 w-full md:w-screen">
      <div className="py-6">
        <Container>
          <div
            className="
        flex 
        flex-row 
        items-center 
        justify-between
        gap-0
        md:gap-0
      "
          >
            <h1 className="  font-extralight text-lg md:text-lg hidden md:block">
              2023
            </h1>
            <p className="md:text-base text-sm">
              It&apos;s{" "}
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
              })}{" "}
              in Medellin, Colombia
            </p>
            <button
              onClick={() =>
                handleClickScroll(location.pathname === "/" ? "top" : "topWork")
              }
            >
              Back to top
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
