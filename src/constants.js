// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import epsLogo from './assets/education_logo/emerald.png';
import singajiLogo from './assets/education_logo/singajii.png';


// Project Section Logo's
import joPortalLogo from './assets/work_logo/job-portall.png';
import eccomerceLogo from './assets/work_logo/ecommerce-website.png';
 import rockLogo from './assets/work_logo/rockgame.png';
 import qrLogo from './assets/work_logo/QR-code.png';
 import tictacLogo from './assets/work_logo/tic-tac.png';
 import travelLogo from './assets/work_logo/travel-tour.png';
import weatherLogo from './assets/work_logo/weather.png';
 import gptLogo from './assets/work_logo/gpt.png';
 import digitalclockLogo from './assets/work_logo/digitalclock.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
    
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 
  
  export const education = [
    
    {
      id: 1,
      img: singajiLogo,
      school: "Sant Singaji institute of Science and Management, Sandalpur",
      date: "August 2023 - June 2026",
      grade: "76%",
      desc: "I completed my Bachelor of Computer Applications (B.C.A) from ssism College, sandalpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology.  I gained practical insights into the world of software development. .",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 2,
      img: epsLogo,
      school: "Emerald Public School, Khategaon",
      date: "june 2022 - March 2023",
      grade: "82.6%",
      desc: "I completed my class 12 education from Emerald  Public School, Khategaon, under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "MPBoard(XII) - PCM ",
    },
    {
      id: 3,
      img: epsLogo,
      school: "Emerald Public School, Khategaon",
      date: "june 2020 - March 2021",
      grade: "74%",
      desc: "I completed my class 10 education from Emerald Public School, Khategaon, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
     {
      id: 0,
      title: "Job-portal-App",
      description:"Job Portal App is a platform that connects job seekers with employers. Users can browse job listings, upload resumes, apply for jobs, and receive notifications about new opportunities. Employers can post job openings, manage applications, and find suitable candidates efficiently."  ,
      image: joPortalLogo,
      tags: [ "React JS","Tailwindcss", "MongoDb","expressjs", "nodejs","jwt"],
      github: "https://github.com/saloni-khadav/Jobportalapp.git",
    },
    {
      id: 1,
      title: "Weather-App",
      description:"A sleek and responsive weather application built using ReactJS and Tailwind CSS, powered by a real-time Weather Forecast API. The app allows users to search for any city worldwide and view the current weather conditions along with detailed forecasts."  ,
      image: weatherLogo,
      tags: [ "React JS","Tailwindcss", "API"],
      github: "https://github.com/saloni-khadav/Weather-App.git",
    },
    {
      id: 2,
      title: "Chat-Bot",
      description:
        "An interactive and stylish chatbot application built using ReactJS and Tailwind CSS. Designed to simulate real-time conversations and assist users through a sleek, responsive UI. Ideal for customer support, onboarding assistants, or just exploring chatbot UI/UX!",
      image: gptLogo,
      tags: ["React JS","Tailwindcss", "API"],
      github: "https://github.com/saloni-khadav/Chat-bot.git",
    },
    {
      id: 3,
      title: "Ecommerce Website",
      description:
        "A fully responsive eCommerce website built using HTML, CSS, and JavaScript. This project showcases a modern, user-friendly online store layout designed with a clean UI/UX and optimized for both desktop and mobile devices.",
      image: eccomerceLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/saloni-khadav/eommerce-website.git",
    },
    {
      id: 4,
      title: "Travel-Tour-website",
      description:
        "  About Travel Tour Website is a responsive, user-friendly travel tour website using HTML, CSS, and JavaScript. Provided seamless booking",
      image: travelLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saloni-khadav/Travel-Tour-Website.git",
    },
    {
      id: 5,
      title: "Digital-Clock",
      description:
        "A simple digital clock built with HTML, CSS, and JavaScript that displays the current time and updates every second.",
      image: digitalclockLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saloni-khadav/Digital-Clock.git",
    },
    {
      id: 6,
      title: "QR-CODE Generator",
      description:
        "A QR code generator built with HTML, CSS, and JavaScript that converts text or URLs into scannable QR codes.",
      image: qrLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saloni-khadav/QR-Code-Generator.git",
    },
    {
      id: 7,
      title: "Rock-Paper-Scissor Game",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: rockLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saloni-khadav/Rock-Paper-Scissor.git",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 8,
      title: "Tic-Tac-Toe Game",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: tictacLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saloni-khadav/Tic-Tac-Toe.git",
      webapp: "https://webversedigital.com/",
    },
    
    
   
  ];  