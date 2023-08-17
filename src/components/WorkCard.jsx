/* eslint-disable react/prop-types */
function WorkCard({ project }) {
  return (
    <div className="flex flex-col gap-8 font-Monserrat max-w-[600px]">
      <div className="relative">
        <img
          className="relative"
          src="./images/testWorkCard.png"
          alt="Work card"
        />
        <button className="bg-lime-300 rounded-full py-3 px-4 font-semibold absolute bottom-6 right-6 hover:bg-lime-200">
          Learn more
        </button>
      </div>
      <div className="flex justify-between text-stone-200 items-center">
        <h2 className="text-3xl font-semibold w-1/2 ">{project?.name}</h2>
        <p className="font-extraligth text-base w-1/2 ">
          {project?.shortDescription}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
