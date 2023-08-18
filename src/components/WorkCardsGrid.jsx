/* eslint-disable react/prop-types */
import WorkCard from "./WorkCard";
const WorkCardsGrid = ({ projects }) => {
  return (
    <div
      id="work"
      className="bg-stone-200 dark:bg-zinc-900 grid grid-cols-1  md:grid-cols-2  md:px-6  place-items-center gap-8 py-24"
    >
      {projects.map((project) => (
        <WorkCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default WorkCardsGrid;
