import { nanoid } from 'nanoid';
import PDF from '../images/resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Henry Cabral | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Henry',
  subtitle: "I'm a Software Engineer",
  cta: "Let's Talk!",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I'm looking for challenging new opportunities to create purposeful products related to web and software development.",
  paragraphTwo:
    "Currently, I'm an automation/mechanical engineer at Aprecia Pharmaceuticals focused on designing 3DP R&D Pharmaceutical Manufacturing Equipment.",
  paragraphThree:
    "My journey to web development has been rather untraditional, coming from a biomedical/mechanical engineering background. Nonetheless, what's attracted me to software engineering is the never-ending bustle of emerging technologies. There's always something new to learn!",
  resume: PDF, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'Facial Recognition Web Application',
    info:
      'Facial Recognition App built using React.js (Front-end) with a RESTful API server using Express. Deployed on Heroku.',
    info2:
      'Implemented session management with authenticated routes. Stored user information and hashed passwords on PostgreSQL.',
    url: 'https://facerecog-smartbrain-1.herokuapp.com/',
    repo: 'https://github.com/cabralh/facerecognition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'CloudSenseIO',
    info:
      'Weather Station that records temperature, humidity and air quality parameters which are displayed on a web application for data visualization and logging. Python scripts were written to interface with the sensors.',
    info2:
      'Raspberry Pi used the backend web server to send data to front-end app. Deployed on Heroku. Custom Mechanical Casing designed using Solidworks and 3d Printed in-house. Built Using: React, Node.js, Socket.io, Express, MongoDB, Python.',
    url: '',
    repo: 'https://github.com/cabralh/CloudSenseIO', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'Hype Clothing Ecommerce App',
    info:
      'An ecommerce web application with React, Redux, React Router, Firebase with payments (Stripe API).',
    info2:
      'Stores user information, routes between clothing item pages, and remembers user session (cart).',
    url: '',
    repo: 'https://github.com/cabralh/hype-clothing-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project4.png',
    title: 'Thought Space Blog',
    info: 'A thought space blog project built using Gatsby.js boilerplate.',
    info2: 'Technologies include: Gatsby.js, GraphQL, ES6, React, and React DOM.',
    url: 'https://friendly-albattani-b844ef.netlify.app/',
    repo: 'https://github.com/cabralh/overthnkme', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'm currently looking for any new opportunities, feel free to give me a shout on my email.",
  btn: 'Give a shout!',
  email: 'hjcbr19@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/cabralhjr',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://hjcbr19.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/henrycabral/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cabralh',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
