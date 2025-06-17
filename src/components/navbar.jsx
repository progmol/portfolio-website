import './navbar.css'
import logo from '../assets/logo.png'
import '../App.css'
import { useEffect, useRef, useState } from 'react'


function Navbar(){

    const [isopen, setIsOpen] = useState(false)
    
    const handleMenu = () => {
        setIsOpen(!isopen)
    }

    const listref = useRef(null)
    const btnref = useRef(null)

    useEffect(() => {
        const handleDropDown = (event) => {
            if (listref.current && !listref.current.contains(event.target) && 
            btnref.current && !btnref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        const events = ['mousedown', 'touchstart', 'scroll']
        events.forEach((event) => {
            document.addEventListener(event, handleDropDown);
        })
        
        return () => {
            events.forEach((event) => {
                document.removeEventListener(event, handleDropDown);
            })
        }
    }, [])

    return (
        <>
            <nav>
                <div className="logo"><a href="#about"><img src={logo} alt="logo" /></a></div>
                <ul ref={listref} className={isopen ? 'dropdown-content-mobile' : 'dropdown-content'}>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projectsid">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="/Muhammad%20Asad.pdf" target='_blank'>Resume</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
                <button ref={btnref} onClick={handleMenu}>{isopen ? '✖' : '☰'}</button>
            </nav>
        </>
    )
}

export default Navbar
