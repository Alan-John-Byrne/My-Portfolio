import React from 'react';
import Navbar from './Navbar.tsx';
import HeroSection from './HeroSection.tsx';
import MainContent from './MainContent.tsx';
import ProjectsSection from './ProjectsSection.tsx';
import HobbiesAndInterestsSection from './HobbiesAndInterestsSection.tsx';

const Body: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainContent />
      <ProjectsSection />
      <HobbiesAndInterestsSection />
    </>
  );
}

export default Body;
