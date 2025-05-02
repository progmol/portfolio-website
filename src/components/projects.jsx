import './projects.css'
import gptpic from '../assets/gpt-clone.jpg'
import portfolio from '../assets/portfolio-pic.jpg'
import todolist from '../assets/todolist.jpg'
import weather from '../assets/weather.jpg'
import askus from '../assets/askus.jpg'

function Projects() {
    return (
        <>
            <h1 id='projectsid' className='projects-title'>Projects</h1>

            <div className="projects">

                <div className="proj-name">
                    <div className="proj-img"><a href="https://codeczar00.vercel.app/" target='_blank'><img src={portfolio} alt="portfolio-img" /></a></div>
                    <div className='txt-cont'>
                        <div className="proj-title">Portfolio Website</div>
                        <div className="github-link"><a href="https://github.com/codeczar00/portfolio-website" target='_blank'>Visit GitHub Repo 🔗</a></div>
                    </div>
                    <div className="proj-desc">
                        Designed and Developed responsive personal portfolio website using React and CSS.
                    </div>
                </div>

                <div className="proj-name">
                    <div className="proj-img"><a href="https://chat-gpt-clone-gamma-wine.vercel.app/" target='_blank'><img src={gptpic} alt="gpt-logo" /></a></div>
                    <div className='txt-cont'>
                        <div className="proj-title">ChatGPT Clone</div>
                        <div className="github-link"><a href="https://github.com/codeczar00/ChatGPT-clone" target='_blank'>Visit GitHub Repo 🔗</a></div>
                    </div>
                    <div className="proj-desc">
                        Designed and Developed a ChatGPT clone using React and OpenAI API without Mobile Responsiveness!
                    </div>
                </div>

                <div className="proj-name">
                    <div className="proj-img"><a target='_blank'><img src={weather} alt="weather-logo" /></a></div>
                    <div className='txt-cont'>
                        <div className="proj-title">Weather Update App</div>
                        <div className="github-link"><a href="https://github.com/codeczar00/weather-update-app" target='_blank'>Visit GitHub Repo 🔗</a></div>
                    </div>
                    <div className="proj-desc">
                        Developed a dynamic Weather Update app in React that fetches real-time weather data via API.</div>
                </div>

                <div className="proj-name">
                    <div id='todolist' className="proj-img"><a target='_blank'><img src={todolist} alt="todolist-logo" /></a></div>
                    <div className='txt-cont'>
                        <div className="proj-title">To Do List</div>
                        <div className="github-link"><a href="https://github.com/codeczar00/to-do-list" target='_blank'>Visit GitHub Repo 🔗</a></div>
                    </div>
                    <div className="proj-desc">
                        Built a feature-rich To-Do List application in Django with task creation, updating, and deletion functionalities.</div>
                </div>

                <div className="proj-name">
                    <div id='todolist' className="proj-img"><a href="https://ask-us-solutions.vercel.app/" target='_blank'><img src={askus} alt="todolist-logo" /></a></div>
                    <div className='txt-cont'>
                        <div className="proj-title">AskUs Solutions</div>
                        <div className="github-link"><a href="https://github.com/codeczar00/AskUs-Solutions" target='_blank'>Visit GitHub Repo 🔗</a></div>
                    </div>
                    <div className="proj-desc">
                        Designed and developed a professional website for a software house to showcase services and projects.</div>
                </div>


            </div>
        </>
    )
}

export default Projects





