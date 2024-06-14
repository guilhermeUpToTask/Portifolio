import HeroContainer from './components/HeroContainer'
import './App.css'
import DescriptionContainer from './components/DescriptionContainer'
import ProjectsContainer from './components/ProjectsContainer'
import SkillsContainer from './components/SkillsContainer'
import ContactsContainer from './components/ContactsContainer'
import TopNavBar from './components/TopNavBar'

function App() {

  return (
    <>
      <TopNavBar/>
      <HeroContainer/>
      <DescriptionContainer/>
      <SkillsContainer/>
      <ProjectsContainer/>
      <ContactsContainer/>
    </>
  )
}

export default App
