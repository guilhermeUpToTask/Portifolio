import HeroContainer from './components/HeroContainer'
import './App.css'
import DescriptionContainer from './components/DescriptionContainer'
import ProjectsContainer from './components/ProjectsContainer'
import SkillsContainer from './components/SkillsContainer'
import ContactsContainer from './components/ContactsContainer'
import Footer from './components/Footer'
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
      <Footer/>
    </>
  )
}

export default App
