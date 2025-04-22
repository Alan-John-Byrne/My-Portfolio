import React, { useState } from 'react';
import Navbar from './myNavBar/Navbar.tsx';
import HeroSection from './HeroSection.tsx';
import MainContent from './MainContent.tsx';

const Body: React.FC = () => {

  // NOTE: Tracking which section is currently being viewed.
  // Helps with highlighting appropriate navbar links.
  const [activeSection, setActiveSection] = useState<string>("");
  const handleSectionInView = (sectionName: string) => {
    setActiveSection(sectionName);
  }

  return (
    <>
      <Navbar activeSection={activeSection} />
      <HeroSection handleSectionInView={handleSectionInView} />
      <MainContent handleSectionInView={handleSectionInView} />
    </>
  );
}

export default Body;
