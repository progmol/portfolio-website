import profilepic from '../assets/profilepic.png';
import './main.css';


function Main(){
    return (
        <div id='about' className="main">
            <div className="text-container">
                <div className="heading">Hi, I am <span className='span'>Muhammad Asad</span></div>
                <div className="desc">An Innovative Software Engineer</div>
                <div className="desc2">Focused on clean code and advanced solutions, 
                    constantly exploring new technologies to build next-gen applications.</div>
            </div>
            <div id='img'><img className='profilepic' src={profilepic} alt="profilepic" /></div>
        </div>
    )
}

export default Main