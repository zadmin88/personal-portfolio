/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function WorkCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 font-Monserrat max-w-[600px]">
      <div className="relative">
        <img className="relative" src={project.cardUrl} alt="Work card" />
        <button
          onClick={() => navigate(`/work/${project.id}`)}
          className="dark:bg-lime-300 bg-lime-500 rounded-full py-3 px-4 font-semibold absolute bottom-6 right-6 hover:bg-lime-200"
        >
          Learn more
        </button>
      </div>
      <div className="flex justify-between dark:text-stone-200 text-zinc-900 items-center">
        <h2 className="text-xl md:text-3xl font-semibold w-1/2 place-self-start">
          {project?.name}
        </h2>
        <p className="font-extraligth text-sm md:text-base w-1/2 ">
          {project?.shortDescription}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
