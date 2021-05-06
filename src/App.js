import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import AboutMe from './components/BodyComponents/AboutMe'
import WorkExperiences from './components/BodyComponents/WorkExperiences'
import Projects from './components/BodyComponents/Projects'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Body />
                <AboutMe />
                <WorkExperiences />
                <Projects />
                <Footer />
            </div>
        </Router>
        
    );
}

export default App;
