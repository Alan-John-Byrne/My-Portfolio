import Navbar from '../../components/navbar/Navbar.tsx'
import HeroSection from '../../components/hero_section/HeroSection.tsx'
import MainContent from '../../components/main_content/MainContent.tsx'

function body() {
  return (
    <>
      <body className="body-background" data-spy="scroll" data-target="#navbar-main">
        <Navbar />
        <HeroSection />
        <MainContent />
      </body>
    </>
  );
}

export default body
