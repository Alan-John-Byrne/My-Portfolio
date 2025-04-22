import React from 'react';
import EducationSection from './myEducation/EducationSection.tsx';
import WorkExpierenceSection from './myWorkExpierence/WorkExpierenceSection.tsx';
import ProjectsSection from './ProjectsSection.tsx';
import HobbiesAndInterestsSection from './myHobbiesAndInterests/HobbiesAndInterestsSection.tsx';

interface MainContentProps {
  handleSectionInView: (sectionName: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ handleSectionInView }) => {
  return (
    <main>
      <EducationSection handleSectionInView={handleSectionInView} />
      <WorkExpierenceSection handleSectionInView={handleSectionInView} />
      {/* <ProjectsSection /> */}
      <HobbiesAndInterestsSection handleSectionInView={handleSectionInView} />
    </main >
  );
}

export default MainContent;
