const Hero = () => {
  return (
    <div
      id="top"
      className="h-[600px] md:h-[800px]  font-Monserrat bg-stone-200 dark:bg-zinc-900 flex flex-col justify-center"
    >
      <div>
        <h1 className=" text-5xl md:text-9xl text-zinc-900 dark:text-white font-semibold tracking-normal">
          SOFTWARE <br />
          DEVELOPER
        </h1>
        <p className="dark:text-lime-300 text-lime-500 text-xl md:text-2xl tracking-widest">
          FRONTEND - FULL STACK CAPABLE
        </p>
      </div>
    </div>
  );
};

export default Hero;
