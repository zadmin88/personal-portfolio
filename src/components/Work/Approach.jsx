/* eslint-disable react/prop-types */

const Approach = ({ src, approach }) => {
  return (
    <div className=" flex flex-col font-Monserrat  w-full h-full">
      <img src={src} alt="Hero" className=" md:inset-0 md:w-full md:h-full " />
      <div className="flex flex-col  gap-4 font-Monserrat text-zinc-900 dark:text-stone-200 px-4 md:px-0  py-16 md:py-32 w-full   ">
        <h2 className=" font-semibold text-base md:text-xl">APPROACH</h2>
        <p className=" text-base md:text-lg w-full">{approach}</p>
      </div>
    </div>
  );
};

export default Approach;
