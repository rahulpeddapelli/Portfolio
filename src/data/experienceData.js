import xlLogo from "../assets/experience/xl/xl-management-logo.webp";
import certificate from "../assets/experience/xl/xl-internship-certificate.png";
import lor from "../assets/experience/xl/xl-lor.png";


export const experiences = [
    {
        id: 1,

        role: "Web Developer Intern",

        company: "XL Management Services",

        website: "https://xlmanagementservices.in/",

        logo: xlLogo,

        startDate: "03/26",

        endDate: "Present",

        shortDescription:
            "Contributed to the development of client websites and web applications, focusing on responsive design, user experience improvements, SEO implementation, and end-to-end project delivery.",

        responsibilities: [
            "Led frontend development for selected client projects, collaborating with team members to deliver responsive and visually appealing websites.",

            "Developed modern and responsive business and service-based websites using HTML, CSS, JavaScript, Bootstrap, and React.",

            "Worked closely with clients to understand requirements, gather feedback, and ensure project goals were successfully achieved.",

            "Implemented responsive layouts and UI enhancements to improve user experience across desktop, tablet, and mobile devices.",

            "Performed website maintenance, content updates, bug fixes, and feature enhancements for existing client websites.",

            "Implemented on-page SEO improvements including meta tags, structured content, image optimization, and performance enhancements.",

            "Assisted clients with domain registration, hosting setup, website deployment, and technical configuration.",

            "Managed project delivery from initial requirement gathering through development, testing, deployment, and final handover to clients.",

            "Collaborated with the development team to ensure quality, performance, and consistency across multiple web projects."
        ],

        technologies: [
            "JavaScript",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "React",
        ],

        gallery: [
            {
                title: "Internship Certificate",
                image: certificate,
            },
            {
                title: "Letter of Recommendation",
                image: lor,
            },
        ],
    }
];