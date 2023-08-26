const AboutHero = () => {
  return (
    // <ScrollPage>
    <div
      id="profile"
      className="flex  font-Monserrat flex-col md:flex-row bg-stone-200 dark:bg-zinc-900 md:px-32 md:py-20 max-h-[800px] items-center justify-center z-0"
    >
      <div className="w-full md:w-1/2 md:pl-8 flex flex-col lg:flex-row items-center ">
        {/* Small screens */}
        <div className="w-full md:w-[640p] block relative md:hidden ">
          <img src="./images/aboutImage.jpg" alt="Simon" className="" />
          <div className="absolute inset-0 bg-black bg-opacity-40 md:hidden "></div>
        </div>
        {/* Large screens */}

        <div className="dark:text-stone-200 text-zinc-900 px-6 lg:px-0  lg:absolute  lg:left-20 md:left-10 sm:left-8 z-40 hidden md:block ">
          <p className=" flex flex-col gap-4 text-4xl md:text-6xl font-semibold mb-4 ">
            <span>Hello.</span>
            <span>
              {" "}
              I&apos;m Simon, a{" "}
              <span className="dark:text-lime-300 text-lime-500">
                software{" "}
              </span>
            </span>{" "}
            <span>
              <span className="dark:text-lime-300 text-lime-500">
                developer
              </span>{" "}
              with
            </span>
            <span>passion for building great</span>
            <span>digital experiences.</span>
          </p>
        </div>

        {/* Small screens */}
        <div className="dark:text-stone-200 text-zinc-900 px-6 relative -top-[130px]    md:hidden">
          <p className=" flex flex-col gap-1 text-4xl md:text-6xl font-semibold mb-4 ">
            <span>Hello.</span>
            <span>
              {" "}
              I&apos;m Simon, a{" "}
              <span className="dark:text-lime-300 text-lime-500">
                software{" "}
              </span>
            </span>{" "}
            <span>
              <span className="dark:text-lime-300 text-lime-500">
                developer
              </span>{" "}
              with
            </span>
            <span>passion for building great</span>
            <span>digital experiences.</span>
          </p>
        </div>
      </div>
      {/* Large screens */}
      <div className="w-full md:w-[640p] hidden md:block md:relative">
        <img src="./images/aboutImage.jpg" alt="Simon" className="" />
        <div className="md:absolute md:inset-0 md:bg-black md:bg-opacity-20 "></div>
      </div>
    </div>
    // </ScrollPage>
  );
};

export default AboutHero;
