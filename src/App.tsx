import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import M1 from "./components/M1.tsx";
import Expertise from "./components/Expertise.tsx";
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";


function App() {
  /*
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  */


{/*<div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
<div className = "main-container">
    <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
    <FadeIn transitionDuration={700}>
        <Main/>
        <Expertise/>
    </FadeIn>
    <Footer />
</div>*/}
const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }



return (
<div>
            <h1>fdgfgfgfg</h1>
          <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        
            <M1/>
            <Expertise/>
        
        <Footer />

</div>


);
}

export default App;