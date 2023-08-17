import Container from "./Container";
import { useState, useEffect } from "react";

const Footer = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className=" w-full font-Monserrat h-20 bg-zinc-900 z-50 text-stone-200">
      <div className="py-6">
        <Container>
          <div
            className="
        flex 
        flex-row 
        items-center 
        justify-between
        gap-3
        md:gap-0
      "
          >
            <h1 className="  font-extralight text-2xl">2023</h1>
            <p>
              It&apos;s{" "}
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
              })}{" "}
              in Medellin, Colombia
            </p>
            <button>Back to top</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
