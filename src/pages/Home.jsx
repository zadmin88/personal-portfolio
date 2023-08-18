import AboutHero from "../components/AboutHero";
import Hero from "../components/Hero";
import WorkCardsGrid from "../components/WorkCardsGrid";
import Container from "../components/Container";
import Profile from "../components/Profile";
import Contact from "../components/Contact";

const Home = () => {
  const testProjects = [
    {
      name: "Montanera",
      shortDescription:
        "Hi. I'm Simon a software developer with a passion for building great digital experiences.",
    },
    {
      name: "MMyMoney Webapp",
      shortDescription:
        "Hi. I'm Simon a software developer with a passion for building great digital experiences.",
    },
    {
      name: "This portfolio",
      shortDescription:
        "Hi. I'm Simon a software developer with a passion for building great digital experiences.",
    },
    {
      name: "anything else",
      shortDescription:
        "Hi. I'm Simon a software developer with a passion for building great digital experiences.",
    },
  ];
  return (
    <Container>
      <Hero />
      <WorkCardsGrid projects={testProjects} />
      <AboutHero />
      <Profile />
      <Contact />
    </Container>
  );
};

export default Home;
