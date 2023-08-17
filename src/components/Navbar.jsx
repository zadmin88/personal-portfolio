import Container from "./Container";

const Navbar = () => {
  return (
    <div className="fixed w-full font-Monserrat h-20 bg-zinc-900 z-50">
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
            <h1 className="text-stone-200 tracking-widest   font-extralight text-2xl">
              Simón Franco
            </h1>
            <ul className="flex gap-10 font-semibold text-base text-stone-200">
              <li className="cursor-pointer tracking-widest">WORK</li>
              <li className="cursor-pointer tracking-widest">ABOUT ME</li>
              <li className="cursor-pointer tracking-widest">CONTACT</li>
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

export default Navbar;
