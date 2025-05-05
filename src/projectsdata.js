import streamlit from './assets/streamlit.png'
import gptpic from './assets/gpt-clone.jpg'
import portfolio from './assets/portfolio-pic.jpg'
import todolist from './assets/todolist.jpg'
import weather from './assets/weather.jpg'
import askus from './assets/askus.jpg'

const projectData = [
  {
    Name: 'Portfolio Website',
    source: portfolio,
    picLink: 'https://codeczar00.vercel.app/',
    github: 'https://github.com/codeczar00/portfolio-website',
    description: 'Designed and Developed responsive personal portfolio website using React and CSS.',
    skills: ['React', 'CSS']
  },
  {
    Name: 'ChatGPT Clone',
    source: gptpic,
    picLink: 'https://chat-gpt-clone-gamma-wine.vercel.app/',
    github: 'https://github.com/codeczar00/ChatGPT-clone',
    description: 'Designed and Developed a ChatGPT clone using React and OpenAI API without Mobile Responsiveness!',
    skills: ['React', 'OpenAI API', 'CSS']
  },
  {
    Name: 'Weather Update App',
    source: weather,  
    github: 'https://github.com/codeczar00/weather-update-app',
    description: 'Developed a dynamic Weather Update app in React that fetches real-time weather data via API.',
    skills: ['React', 'REST API']
  },
  {
    Name: 'To Do List App',
    source: todolist,  
    github: 'https://github.com/codeczar00/to-do-list',
    description: 'Built a feature-rich To-Do List application in Django with task creation, updating, and deletion functionalities.',
    skills: ['Django', 'Python']
  },
  {
    Name: 'AskUs Solutions',
    source: askus,
    picLink: 'https://ask-us-solutions.vercel.app/',
    github: 'https://github.com/codeczar00/AskUs-Solutions',
    description: 'Designed and developed a professional website for a software house to showcase services and projects.',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    Name: 'Schedule Generator',
    source: streamlit,
    picLink: 'https://dps-app.streamlit.app/',
    github: 'https://github.com/mrcreamio/dps-usama',
    description: 'A Streamlit app that processes an uploaded Excel file to generate class-wise and teacher-wise schedules using Pandas.',
    skills: ['Python', 'Pandas']
  }
]

export default projectData
