import useWork from "../hooks/useWork";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import WorkHero from "../components/Work/WorkHero";
import Description from "../components/Work/Description";
import Summary from "../components/Work/Summary";
import Approach from "../components/Work/Approach";
import ImageCarousel from "../components/ImageCarousel";

const Work = () => {
  const { getById } = useWork();
  const params = useParams();
  const { id } = params;

  const project = getById(id);

  return (
    <Container>
      <WorkHero
        img={project.heroUrl}
        name={project.name}
        subtitle={project.subtitle}
      />
      <Description
        description={project.shortDescription}
        liveDemo={project.liveDemo}
      />
      <Summary
        objective={project.objective}
        whatWeDid={project.whatWeDid}
        stackUsed={project.stackUsed}
      />
      <Approach src={project.approachSrc} approach={project.approach} />
      <ImageCarousel images={project.sliderImages} />
    </Container>
  );
};

export default Work;
