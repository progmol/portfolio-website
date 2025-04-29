import './App.css'
import Navbar from './components/navbar'
import About from './components/main'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'

function App() {

    return (
        <>
            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </>
    )
}

export default App