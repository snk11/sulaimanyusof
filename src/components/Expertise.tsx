//import React from "react";
import '@fortawesome/free-regular-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
//import f1_ferrari from '../assets/images/f1_ferrari.png'


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
/*
const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];
*/

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>About me</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/*
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    */}
                    <p>Through my career, I have been working on building things using Science and Technology for the Industry, to teach people or for myself. I'm passionate about Technology and I'm a big fan of motorsport. Lately, I have been focusing on IT projects and I'm looking forward to our future partnership in this field, see you soon.</p>
                    <div className="flex-chips">
                        
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                {/*
                <div className="slideshow">
                    <img src={f1_ferrari} alt="f1_ferrari" />
                </div>
                */}
                {/*<div className="skill">
                    
                    
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                */}
            </div>
        </div>
    </div>
    );
}

export default Expertise;