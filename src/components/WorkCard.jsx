/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Button } from "./Button";

function WorkCard({ project }) {
  const [imgSrc, setImgSrc] = useState(project.cardUrl[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleHover = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    if (project.cardUrl.length > 2) {
      setImageIndex((prevIndex) => (prevIndex + 1) % project.cardUrl.length);
    }

    const newIntervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % project.cardUrl.length);
    }, 600);

    setIntervalId(newIntervalId);
  }, [intervalId, project.cardUrl]);

  const handleMouseLeave = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  useEffect(() => {
    setImgSrc(project.cardUrl[imageIndex]);
  }, [imageIndex, project.cardUrl]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 font-Monserrat max-w-[600px]">
      <div
        className="relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[600px] overflow-hidden">
          <div className="max-w-[600px] max-h-[600px] overflow-hidden">
            <img
              className="relative hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={imgSrc}
              alt="Work card"
            />
            <div className="absolute bottom-6 right-6">
              {" "}
              <Button
                label={"Learn more"}
                color={"green"}
                action={() => navigate(`/work/${project.id}`)}
              />
            </div>
          </div>
        </div>
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
