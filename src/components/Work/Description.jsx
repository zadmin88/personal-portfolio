/* eslint-disable react/prop-types */
import { Button } from "../Button";

const Description = ({ description, liveDemo }) => {
  return (
    <div
      id="description"
      className="flex flex-col  gap-16 font-Monserrat px-4 md:px-0  py-16 md:py-32 w-full  text-center justify-center  "
    >
      <p className="text-zinc-900 dark:text-stone-200 font-semibold text-sm md:text-2xl ">
        {description}
      </p>

      <a href={liveDemo} target="_blank" rel="noreferrer">
        <Button label={"Live demo"} color={"green"} action={() => {}} />
      </a>
    </div>
  );
};

export default Description;
