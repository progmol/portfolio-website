import './projects.css'
import projectData from '../projectsdata'

function Projects() {
    
    return (
        <>
            <h1 id='projectsid' className='projects-title'>Projects</h1>

            <div className="projects">

                {projectData.map((obj, index) => (
                    <div key={index} className="proj-name" data-tilt data-tilt-max="15" data-tilt-scale="1.05">
                        <div className="proj-img">
                            <a href={obj.picLink} target='_blank' >
                                <img src={obj.source} alt={obj.Name} />
                            </a>
                        </div>
                        <div className='txt-cont'>
                            <div className="proj-title">{obj.Name}</div>
                            <div className="github-link">
                                <a href={obj.github} target='_blank' rel="noreferrer">Visit GitHub Repo 🔗</a>
                            </div>
                        </div>
                        <div className="proj-desc">{obj.description}</div>
                        <div className="proj-skills">
                            {obj.skills.join(', ')}
                        </div>
                    </div>
                ))}



            </div>
        </>
    )
}

export default Projects