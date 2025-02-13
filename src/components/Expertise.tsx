import '@fortawesome/free-regular-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import f1_ferrari from '../assets/images/f1_ferrari.png'


const labelsFirst = [
    "C",
    "C++",
    "Embedded",
    "Python",
    "Tensorflow",
    "Machine Learning",
    "Linux",
    "Docker"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>About me</h1>
            <div className="skills-grid">
                <div className="skill">
                   
                    <p>Through my career, I have been working on building things using Science and Technology for the Industry, to teach people or for myself. I'm passionate about Technology and I'm a big fan of motorsport. Lately, I have been focusing on IT projects and I'm looking forward to our future partnership in this field, see you soon.</p>
                    <div className="flex-chips">
                        
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="slideshow">
                    <img src={f1_ferrari} alt="f1_ferrari" />
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Expertise;