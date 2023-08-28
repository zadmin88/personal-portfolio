import LoopingTextAnimation from "./animations/LoopingTextAnimation";

const Hero = () => {
  return (
    <div
      id="top"
      className="h-[600px] md:h-[800px]  font-Monserrat bg-stone-200 dark:bg-zinc-900 flex flex-col  justify-center"
    >
      <div>
        <h1 className=" text-5xl md:text-9xl text-zinc-900 dark:text-white font-semibold tracking-normal mb-6">
          SOFTWARE <br />
          DEVELOPER
        </h1>

        <LoopingTextAnimation
          text={`\u00A0FRONTEND - FULL STACK CAPABLE - FRONTEND - FULL STACK CAPABLE - FRONTEND - FULL STACK CAPABLE - FRONTEND - FULL STACK CAPABLE - FRONTEND - FULL STACK CAPABLE -`}
          speed={13}
        />
      </div>
    </div>
  );
};

export default Hero;
