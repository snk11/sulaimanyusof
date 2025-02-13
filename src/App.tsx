import { useState,useEffect } from 'react'
import M1 from "./components/M1.tsx";
import Expertise from "./components/Expertise.tsx";
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import FadeIn from './components/FadeIn';
import './assets/styles/Navigation.scss';


function App() {
 const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <M1/>
            <Expertise/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;