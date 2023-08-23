/* eslint-disable react/prop-types */
import WorkCard from "./WorkCard";
// import {
//   Animator,
//   ScrollPage,
//   batch,
//   Fade,
//   FadeUp,
//   FadeIn,
//   FadeOut,
//   Move,
//   MoveIn,
//   MoveOut,
//   Sticky,
//   StickyIn,
//   StickyOut,
//   Zoom,
//   ZoomIn,
//   ZoomOut,
// } from "react-scroll-motion";

const WorkCardsGrid = ({ projects }) => {
  return (
    // <ScrollPage>
    //   <Animator animation={FadeUp}>
    <div
      id="work"
      className="bg-stone-200 dark:bg-zinc-900  grid grid-cols-1  md:grid-cols-2  md:px-6  place-items-center gap-8 py-24"
    >
      {projects.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
    //   </Animator>
    // </ScrollPage>
  );
};

export default WorkCardsGrid;
