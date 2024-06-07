import HeroContainer from './components/HeroContainer'
import './App.css'
import DescriptionContainer from './components/DescriptionContainer'
import ProjectsContainer from './components/ProjectsContainer'
import SkillsContainer from './components/SkillsContainer'
import ContactsContainer from './components/ContactsContainer'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline h-[10vh]">
        Hello world!
      </h1>
      <HeroContainer/>
      <DescriptionContainer/>
      <SkillsContainer/>
      <ProjectsContainer/>
      <ContactsContainer/>
      <Footer/>
    </>
  )
}

export default App
