import ABspeech from "../assets/project-images/AB-speech.png";
import ChatHub from "../assets/project-images/chat-hub.png";
import CmDental from "../assets/project-images/CM-Dental.png";
import GreenInk from "../assets/project-images/green-ink.png";
import MovePhysio from "../assets/project-images/move-physiocare.png";
import NewsCatcher from "../assets/project-images/News-catcher.png";

export const projects = [
  {
    id: 1,

    type: "Personal",

    title: "Chat Hub",

    image: ChatHub,

    shortDescription:
      "Real-time chat application supporting private messaging, group conversations, and media sharing.",

    description:
      "Chat Hub is a real-time chat web application that enables users to communicate through private chats and groups. The platform supports instant messaging, online user tracking, media sharing, and secure authentication.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],

    github:
      "https://github.com/rahulpeddapelli/ChatHub",

    live:
      "https://chathub-nine-sigma.vercel.app/signin",

    features: [
      "Real-time private messaging",
      "Group chat functionality",
      "Online user tracking using Socket.IO",
      "Image and document sharing",
      "Secure JWT authentication",
      "Responsive user interface",
      "Message persistence using MongoDB",
      "User profile and contact management",
    ],
  },

  {
    id: 2,

    type: "Personal",

    title: "News Catcher",

    image: NewsCatcher,

    shortDescription:
      "News aggregator platform delivering real-time headlines across multiple categories and countries.",

    description:
      "News Catcher is a news aggregation platform that fetches real-time news articles from external APIs. Users can browse category-wise news, filter content by country, and personalize their reading experience.",

    technologies: [
      "React",
      "Bootstrap",
      "REST API",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],

    github:
      "https://github.com/rahulpeddapelli/News-Catcher",

    features: [
      "Real-time news fetching using APIs",
      "Category-wise news browsing",
      "Country-based filtering",
      "Responsive user interface",
      "Dynamic API integration",
      "Fast content loading",
      "Modern news dashboard design",
    ],
  },

  {
    id: 3,

    type: "Client",

    title: "Green Ink Compliance Solutions",

    image: GreenInk,

    shortDescription:
      "Business website developed and optimized for accounting and bookkeeping services.",

    description:
      "Worked on development, maintenance, SEO optimization, responsive design implementation, performance enhancements, and content management for the Green Ink Accounting Solutions website.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "SEO",
    ],

    github: "",

    live:
      "https://greenink.xlmanagementservices.in/index",

    features: [
      "Responsive website development",
      "UI/UX improvements",
      "SEO implementation and optimization",
      "Content updates and maintenance",
      "Performance optimization",
      "Cross-device compatibility",
      "Client requirement implementation",
      "Website deployment support",
    ],
  },

  {
    id: 4,

    type: "Client",

    title: "Move Physiocare",

    image: MovePhysio,

    shortDescription:
      "Healthcare and physiotherapy service website focused on user engagement and lead generation.",

    description:
      "Developed and maintained responsive website pages, improved user experience, optimized SEO, and supported deployment and content updates for the Move Physiocare website.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "SEO",
    ],

    github: "",

    live:
      "https://www.movephysiocare.com/",

    features: [
      "Responsive layouts",
      "SEO optimization",
      "Performance improvements",
      "Business-focused service pages",
      "Lead generation improvements",
      "Cross-device optimization",
      "Content management",
      "Client collaboration",
    ],
  },

  {
    id: 5,

    type: "Client",

    title: "AB Speech & Hearing Solutions",

    image: ABspeech,

    shortDescription:
      "Professional healthcare website developed for speech and hearing care services.",

    description:
      "Worked on modern UI implementation, responsive layouts, website enhancements, SEO improvements, deployment, and ongoing maintenance for the AB Speech & Hearing Solutions website.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "SEO",
    ],

    github: "",

    live:
      "https://speechandhearingspecialist.com/",

    features: [
      "Responsive web design",
      "SEO implementation",
      "Modern user interface",
      "Performance optimization",
      "Content updates",
      "Cross-browser compatibility",
      "Business service presentation",
      "Website deployment",
    ],
  },

  {
    id: 6,

    type: "Client",

    title: "CM Dental",

    image: CmDental,

    shortDescription:
      "Dental clinic website developed to improve online presence and patient engagement.",

    description:
      "Contributed to website development, SEO implementation, responsive design, content updates, and deployment activities while ensuring a smooth user experience across devices.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "SEO",
    ],

    github: "",

    live:
      "https://cmdental.in",

    features: [
      "Responsive website development",
      "SEO implementation",
      "Patient-focused user experience",
      "Performance optimization",
      "Mobile-first layouts",
      "Content management",
      "Website deployment",
      "Ongoing maintenance support",
    ],
  },
];