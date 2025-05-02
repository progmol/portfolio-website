import './contact.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github-logo.png'
// import gmail from '../assets/gmail.jpg'

function Contact() {

    return (
        <>
            <h1 id='contact' className='cntct-title'>Contact Me</h1>
            <div className="platform">
                <div><a target='_blank' href="https://www.linkedin.com/in/codeczar00/">
                    <img className='plat-pic' width="45px" src={linkedin} alt="linkedin" /></a></div>
                <div><a target='_blank' href="https://github.com/codeczar00">
                    <img className='plat-pic' width="55px" src={github} alt="github" /></a></div>
            </div>
        </>
    )
}

export default Contact