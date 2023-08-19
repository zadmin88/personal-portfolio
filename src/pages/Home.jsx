import AboutHero from "../components/AboutHero";
import Hero from "../components/Hero";
import WorkCardsGrid from "../components/WorkCardsGrid";
import Container from "../components/Container";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import useWork from "../hooks/useWork";

const Home = () => {
  const { getAll } = useWork();
  return (
    <Container>
      <Hero />
      <WorkCardsGrid projects={getAll()} />
      <AboutHero />
      <Profile />
      <Contact />
    </Container>
  );
};

export default Home;
