import EducationSection from '../../components/education_section/EducationSection.tsx'

function MainContent() {
  return (
    <>
      <div
        data-spy="scroll"
        data-target="#navbar-main"
        data-offset="0"
        className="main_container"
      >
        <main>
          < EducationSection />
        </main>
      </div>
    </>
  );
}

export default MainContent
