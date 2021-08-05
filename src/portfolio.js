import emoji from 'react-easy-emoji'
import { faBootstrap, faCss3Alt, faGithub, faGitlab, faHtml5, faJira, faJs, faNodeJs, faNpm, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import Granaderos from './assets/images/Granaderos.jpg'
import selfTaught from './assets/images/selfTaught.png'
import privateTeacher from './assets/images/privateTeacher.png'
import DGCE from './assets/images/DGCE.jpg'
import webDeveloper from './assets/images/webDeveloper.png'
import todoApp from './assets/images/todoApp.png'
import theRestaurant from './assets/images/theRestaurant.png'
import watchApp from './assets/images/watchApp.png'
import weatherApp from './assets/images/weatherApp.png'
import pianoApp from './assets/images/pianoApp.png'
import personalBudget from './assets/images/personalBudget.png'

// Greeting Section

const greeting = {
  username: "Aaron Ivan",
  title: "Hi, I'm Aaron",
  subTitle: emoji(
    "A passionate 👨🏻‍💻 Front-End Developer. Since I discovered my passion for coding, especially the UI – with a mixture of an ♟️ analytical, and at the same time, 🎨 creative mindset – I've always been learning 💻 new technologies and trying to 🔑 master the ones I know."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nlVcKBZuBDjjRU_aeIRCIBaIC4JIzB9v/view?usp=sharing",
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aaronivanamaro",
  linkedin: "https://www.linkedin.com/in/aaron-ivan-amaro/",
  gmail: "aaronivanamaro@gmail.com",
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "What can I offer?",
  softSkills: [
    emoji("☑️ Effective Communication"),
    emoji("☑️ Self-Motivation"),
    emoji("☑️ Self-Discipline"),
    emoji("☑️ Accepting Feedback"),
    emoji("☑️ Public Speaking"),
    emoji("☑️ Teamwork"),
    emoji("☑️ Problem Solving Skills"),
    emoji("☑️ Work Pressure Management"),
    emoji("☑️ Servant Leadership"),
    emoji("☑️ Emotional Intelligence")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  techSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: faHtml5
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: faCss3Alt
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: faJs
    },
    {
      skillName: "React js",
      fontAwesomeClassname: faReact
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: faSass
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: faBootstrap
    },
    {
      skillName: "npm",
      fontAwesomeClassname: faNpm
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: faGithub
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: faGitlab
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: faJira
    },
    {
      skillName: "Node js",
      fontAwesomeClassname: faNodeJs
    },
    {
      skillName: "+ Front-End Libraries",
      fontAwesomeClassname: faFileCode
    },
    {
      skillName: "Responsive Design",
      fontAwesomeClassname: faMobileAlt
    }
  ],
};

// Education Section

const educationInfo = {
  title: "Education",
  schools: [
    {
      schoolName: "Instituto Superior Granaderos",
      logo: Granaderos,
      subHeader: "Certified Teacher of English",
      duration: "Febrary 2017 - December 2020",
      description: "This was good",
      descBullets: [
        "It was a great learning experience with very good teachers that not only taught me English but also helped me grow in teamwork and communication skills.",
        "Last year, in spite of the pandemic, I had to prepare a complex set of lessons for secondary students. I worked with Florencia, and we made an awesome online team, with very high-level results."
      ]
    },
    {
      schoolName: "Self-taught",
      logo: selfTaught,
      subHeader: "Front-End Developer",
      duration: "November 2020 - Forever Learning",
      description:
        "To work with others is super, but I learned some of the greatest lessons of my life at my own pace. I gained most of my knowledge and experience from:",
      descBullets: [
        "A lot of practice",
        "Developing my own projects",
        "Reading official documentation",
        "freeCodeCamp",
        "Udemy",
        "University of Michigan (through Coursera)",
        "YouTube Coding Channels"
    ]
    }
  ]
};

// Work experience section

const workExperiences = {
  title: "Experience",
  experience: [
    {
      role: "English Teacher",
      company: "Self-employed",
      companylogo: privateTeacher,
      date: "December 2017 – December 2020",
      descBullets: [
        "Planification and delivery of private lessons to different age groups.",
        "English teaching for different purposes: medicine, technology, work, exams, school and university.",
        "Flexible and adaptable teaching to the level and needs of the students."        
      ]
    },
    {
      role: "English Teacher",
      company: "Dirección General de Cultura y Educación",
      companylogo: DGCE,
      date: "June 2019 – Present",
      descBullets: [
        "Planification and delivery of English lessons.",
        "Group management.",
        "Experience with children, adolescents, and adults.",
        "Flexible and adaptable teaching to the level and needs of the students."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Freelance",
      companylogo: webDeveloper,
      date: "November 2020 – Present",
      descBullets: [
        "Design and development of simple web pages with HTML, CSS, and JavaScript.",
        "Development of web applications with React + other Front-End Libraries such as Material UI, Bootstrap, Spring Animation, GSAP, Moment, Random Color, and Sweet Alert 2."
      ]
    }
  ]
};

// Projects section

const projects = {
  titleName: "Projects",
  title: "My Projects",
  subtitle: emoji("🔥 These are some of the projects that I've designed and developed :"),
  projects: [
    {
      image: todoApp,
      projectName: "To-Do App",
      projectDesc: "It's a React App that allows you to schedule different tasks and projects adding, removing and updating them in firebase.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://get-tasks-done.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: weatherApp,
      projectName: "Weather App",
      projectDesc: "It works with the Open Weather API in order to provide the temperature of different cities around the world while updating the UI accordingly.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weather-react-web-app.netlify.app/"
        }
      ]
    },
    {
      image: theRestaurant,
      projectName: "The Restaurant",
      projectDesc: "It is a web app with many functionalities, such as the possibility of ordering from a menu with different options.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://the-restaurant-bar.netlify.app/"
        }
      ]
    },
    {
      image: personalBudget,
      projectName: "Personal Budget",
      projectDesc: "This is a web application that allows you to register your income and expenses, giving you a balance of your personal budget.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://budget-webapplication.netlify.app/"
        }
      ]
    },
    {
      image: pianoApp,
      projectName: "Piano App",
      projectDesc: "This app works with data attributes allowing the user to play different piano sounds when playing the corresponding keys.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://piano-web-app.netlify.app/"
        }
      ]
    },
    {
      image: watchApp,
      projectName: "Watch App",
      projectDesc: "It's a watch app that updates the UI according to the time. You may also select different themes: romantic, family, winter and tropical.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reloj-app.netlify.app/"
        }
      ]
    }
  ],
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
};

// Contact Section

const contactInfo = {
  titleName: "Contact",
  title: "Contact Me!",
  subtitle:
    emoji("Want to discuss a project or just want to say hi? Let's 🤙 talk a little bit..."),
  number: "+54 11-2297-2268",
  email_address: "aaronivanamaro@gmail.com"
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  projects,
  blogSection,
  contactInfo,
};
