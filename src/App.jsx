import About from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import AppContainer from "./components/Containers/AppContainer";
import Navigation from "./components/Navigation/Navigation";
import ProjectsSection from "./components/Projects/ProjectsSection";

function App() {
    return (
        <AppContainer>
            <Navigation />
            <About />
            <ProjectsSection />
            <ContactSection />
        </AppContainer>
    );
}

export default App;
