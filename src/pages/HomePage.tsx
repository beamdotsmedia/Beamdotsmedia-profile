import {
  Hero,
  ProblemSection,
  StatsBar,
  Expertise,
  Portfolio,
  FounderTeaser,
  Contact
} from '../components/HomeSections';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <StatsBar />
      <Expertise />
      <Portfolio />
      <FounderTeaser />
      <Contact />
    </>
  );
};

export default HomePage;
