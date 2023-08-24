/* eslint-disable react/prop-types */

const Description = ({ description }) => {
  return (
    <div
      id="description"
      className="flex font-Monserrat px-4 md:px-0  py-16 md:py-32 w-full  text-center justify-center "
    >
      <p className="text-zinc-900 dark:text-stone-200 font-semibold text-sm md:text-xl md:w-1/2">
        {description}
      </p>
    </div>
  );
};

export default Description;
