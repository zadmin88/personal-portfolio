// eslint-disable-next-line react/prop-types
const WorkHero = ({ img, name, subtitle }) => {
  return (
    <div className="font-Monserrat relative  md:h-screen w-full h-full">
      <img
        src={img}
        alt="Hero"
        className=" aspect-square  md:inset-0 md:w-full md:h-full object-cover"
      />
      {/* <div className="bg-opacity-20 dark:bg-opacity-10 bg-black"></div> */}
      <div className="absolute z-40 top-2/3 md:top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="text-3xl md:text-7xl font-bold text-white tracking-widest">
          {name}
        </h1>
        <h3 className="text-base md:text-2xl text-lime-300 tracking-widest mt-2">
          {subtitle}
        </h3>
      </div>
      <div className="absolute inset-0 bg-black opacity-75"></div>
    </div>
  );
};

export default WorkHero;
