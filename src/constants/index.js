import {
  mobile,
  backend,
  
  web,
  javascript,
  
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  
  git,
 
  cognizant,
  memories,
  netflix,
  chatapp,
  codeeditor,
  Omnifood,
  alan,
  vue,
  vscode,
  webpack,
  linux,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title:"Resume"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  
  {
    name: "git",
    icon: git,
  },
  
  {name:"vue",icon:vue},
  {name:"vscode",icon:vscode},
  {name:"webpack",icon:webpack},
  {name:"python",icon:python},
  {name:"linux",icon:linux},
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "2 years of experience in developing UIs and apps in React environment.",
      "Managing and Collaborating with cross-functional teams for ideating on new features to ensure seamless User Experience.",
      "Experience in debugging and delivered performance improvement by 40% in ReactJS environment",
      "Worked with tools like redux, jest, webpack, vite, code sandbox and React libraries",
      "Experience in frameworks for Webapp with Vue and hybrid apps with React-native.",
      "Participation in code reviews for resolving queries and constructive feedback as per knowledge."
    ],
  },
  
  
  
];



const projects = [
  {
    name: "OmniFood",
    description: "A start-up inspired, catchy and user-friendly website, build with HTML,CSS and SCSS for flavour. Responsive and UX is kept in mind while developing the above-mentioned",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Omnifood,
    source_code_link: "https://pratikbee.github.io/Omnifood/",
  },
  {
    name: "Netflix mobile app",
    description: "A full fledged Netflix clone mobile app powered by React-Native and axios for REST api calls for movie/shows data.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "React-Navigation",
        color: "pink-text-gradient",
      },
      {
        name: "Android",
        color: "blue-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/pratikbee/Netflix_RN",
  },
  {
    name: "Memories",
    description: "A social hub where users are able to share/post/like eachothers posts, inspired by instagram and powered by React",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux, Redux-thunk",
        color: "green-text-gradient",
      },
      {
        name: "Firebase/Rest_api",
        color: "pink-text-gradient",
      },
      {
        name: "Material_UI",
        color: "blue-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://memories-pratikbee.netlify.app/",
  },
  {
    name: "Chat App",
    description: "A fun, easy to use Chatting room, where each member can chat with eachother and share their daily gossips.",
    tags: [
      {
        name: "VueJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase/Rest_api",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://pratik-vue-app.onrender.com/",
  },
  {
    name: "Online Code-editor",
    description: "An online Code-editor powered by React, supports coding in 5 languages including, Python, Java, C, C++ and the evergreen JavaScript.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Fileloader",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS and ExpressJS ",
        color: "blue-text-gradient",
      },
    ],
    image: codeeditor,
    source_code_link: "https://github.com/pratikbee/Code_Editor",
  },
  {
    name: "AI based news app",
    description: "A voice support news app for queries and searches for what is happening around the globe.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Alan AI",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Rest API ",
        color: "blue-text-gradient",
      },
    ],
    image: alan,
    source_code_link: "https://github.com/pratikbee/artificial",
  },
];

export { services, technologies, experiences, projects };
