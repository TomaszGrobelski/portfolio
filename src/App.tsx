import About from "./components/About/AboutSection";
import Contact from "./components/Contact/Contact";
import AppContainer from "./components/Containers/AppContainer";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <AppContainer>
            <Navigation />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </AppContainer>
    );
}

export default App;
