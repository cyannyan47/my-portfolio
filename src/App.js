import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import AboutMe from './components/BodyComponents/AboutMe'
import WorkExperiences from './components/BodyComponents/WorkExperiences'
import Projects from './components/BodyComponents/Projects'

function App() {
    return (
        <div className="App">
            <Header />
            <Body />
            <AboutMe />
            <WorkExperiences />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
