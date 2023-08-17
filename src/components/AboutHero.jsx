const AboutHero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-zinc-900 px-32 py-20 max-h-[800px] items-center justify-center">
      <div className="w-full md:w-1/2 md:pl-8 flex items-center">
        <div className="text-stone-200 absolute md:left-[370px] z-40">
          <p className=" flex flex-col gap-4 text-2xl md:text-6xl font-semibold mb-4 leading-loose">
            <span>Hello.</span>
            <span>
              {" "}
              I&apos;m Simon, a <span className="text-lime-300">software </span>
            </span>{" "}
            <span>
              <span className="text-lime-300">developer</span> with
            </span>
            <span>passion for building great</span>
            <span>digital experiences.</span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-[640p] ">
        <img src="./images/aboutImage.png" alt="Simon" className="" />
        <div className="  bg-opacity-10 bg-black"></div>
      </div>
    </div>
  );
};

export default AboutHero;
