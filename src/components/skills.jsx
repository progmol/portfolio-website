import './skills.css'
import html from '../assets/html-logo.png'
import css from '../assets/css-logo.png'
import js from '../assets/js-logo.png'
import python from '../assets/python-logo.png'
import react from '../assets/react-logo.png'
import git from '../assets/git-logo.png'
import github from '../assets/github-logo.png'
import django from '../assets/django-logo.png'
import tailwind from '../assets/tailwind-logo.png'
import cpp from '../assets/cpp-logo.png'

import postgre from '../assets/postgre.png'
import mongo from '../assets/mongodb.png'

function Skills() {

    return (
        <>
            <h1 id='skills' className='skills-heading'>Skills</h1>

            <div className='skills-parent'>
                <div className="skills">

                    <div id='languages' className="attribute">
                        <div className="att-text">Languages</div>
                        <div className="pics">
                            <div className="html" data-tooltip="HTML"><img width="60px" src={html} alt="html" /></div>
                            <div className="css" data-tooltip="CSS"><img width="60px" src={css} alt="css" /></div>
                            <div className="javascript" data-tooltip="JavaScript"><img id='js' width="55px" src={js} alt="js" /></div>
                            <div className="python" data-tooltip="Python"><img width="60px" src={python} alt="python" /></div>
                            <div className="cpp" data-tooltip="C++"><img width="60px" src={cpp} alt="cpp" /></div>
                        </div>

                    </div>

                    <div className="attribute">
                        <div className="att-text">Frameworks & Libraries</div>
                        <div className="pics">
                            <div data-tooltip="React" className="react"><img width="60px" src={react} alt="react" /></div>
                            <div data-tooltip="Django" className="django"><img width="60px" src={django} alt="django" /></div>
                            <div data-tooltip="Tailwind" className="tailwind"><img width="60px" src={tailwind} alt="tailwind" /></div>
                        </div>
                    </div>

                    <div className="attribute">
                        <div id='db-txt' className="att-text">Databases</div>
                        <div className="pics">
                            <div data-tooltip="PostgreSQL" className="postgre"><img width="50px" src={postgre} alt="postgre" /></div>
                            <div data-tooltip="MongoDB" className="mongo"><img width="70px" src={mongo} alt="mongo" /></div>
                        </div>
                    </div>

                    <div id='tools' className="attribute">
                        <div className="att-text">Tools</div>
                        <div className="pics">
                            <div data-tooltip="Git" className="git"><img width="60px" src={git} alt="git" /></div>
                            <div data-tooltip="GitHub" className="github"><img width="60px" src={github} alt="github" /></div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Skills