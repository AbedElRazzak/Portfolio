import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Abed El Razzak Chreim",
  title: "Hi 👋, I'm Abed El Razzak",
  description:
    "I am a Software Developer with a major in Mechatronics and hands-on industrial experience in the Automation & Reliability Department at Sibline Cement Plant, where I got the grade excellent. I also gained one month of internship experience and five months of professional work at Way2Go Digital, contributing to four key projects. As a self-taught Web Developer, I’ve completed seven freelancing projects, including e-commerce and business websites, and payment gateway integrations with Blom Bank Cybersource, Credit Bank and Areeba. Outside of work, I enjoy drawing, exploring physics, and connecting with new people.",
  resumeLink: "https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/refs/heads/main/CV%20-%20AbedElRazzakChreim.pdf",
};

export const openSource = {
  githubUserName: "AbedElRazzak",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:chreimabedelrazzak@gmail.com",
  linkedin: "https://www.linkedin.com/in/abed-el-razzak-chreim-b5a33a1a3/",
  github: "https://github.com/AbedElRazzak",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "I WORK WITH MECHATRONIC SYSTEMS IN AN INDUSTRIAL SETTING",
  data: [
    {
      title: "PLCs & HMIs",
      lottieAnimationFile: "/lottie/skills/industrial.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Creating documentation for securing the HMI network"),
        emoji("⚡ Setting up HMIs as reserves"),
        emoji("⚡ Downloading, Uploading, Restoring and Downgrading *mer files"),
      ],
      softwareSkills: [
        {
          skillName: "Allen Bradley",
          iconifyTag: "ab",
        },
        {
          skillName: "Haver and Boecker",
          iconifyTag: "hb",
        },
        {
          skillName: "Siemens",
          iconifyTag: "siemens",
        },
        {
          skillName: "Beijer",
          iconifyTag: "beijer",
        },
        {
          skillName: "Eaton",
          iconifyTag: "eaton",
        },
        {
          skillName: "Schneider",
          iconifyTag: "schneider",
        },
        // {
        //   skillName: "Heroku",
        //   iconifyTag: "logos:heroku-icon",
        // },
        // {
        //   skillName: "Github",
        //   iconifyTag: "akar-icons:github-fill",
        // },
        // {
        //   skillName: "Docker",
        //   iconifyTag: "logos:docker-icon",
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Programming", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Building Restful APIs",
    progressPercentage: "90",
  },
  {
    Stack: "Critical Thinking",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Matn University College (MUC)",
    subHeader: "Bachelor of Technology in Mechatronics",
    duration: "2020 - 2024",
    desc: "",
    grade: "Gpa 3.33",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Industrial Intern, Grade: Excellent",
    company: "Sibline Cement Plant",
    companyLogo: "/img/icons/common/siblineLogo.png",
    date: "Jun 2024 - Nov 2024",
    desc: "During my internship at Sibline Cement Plant, I gained hands-on experience in cement manufacturing, studying LIBNOR standards, raw material processing, and final production. I explored key machinery like kilns, vertical mills, and ball mills while learning about automation technologies such as PLCs, SCADA, HMIs, and sensors. Additionally, I worked on securing the HMI network to address operational continuity challenges during partial or complete HMI failures.",
  },
  {
    role: "Full Stack Developer",
    company: "Way2go Digital",
    companyLogo: "/img/icons/common/way2go.png",
    date: "Jul 2023 - Nov 2023",
    desc: "Developed and maintained 3 web applications as part of a team of four, leveraging technologies such as ReactJS, PHP, and WordPress. Contributed to the creation of business and e-commerce websites, as well as the maintenance of existing websites. Designed and implemented RESTful APIs, ensuring seamless database communication and integration with the Blom Bank Cybersource payment gateway.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Way2go Digital",
    companyLogo: "/img/icons/common/way2go.png",
    date: "Jun 2023 - Jul 2023",
    desc: "As a Full Stack Developer Intern at Way2Go Digital, collaborated with a team of four developers on an e-commerce project, leveraging ReactJS and PHP. Designed and implemented RESTful APIs to facilitate efficient database communication and functionality.",
  },
  {
    role: "Full Stack Developer",
    company: "Freelancing",
    companyLogo: "/img/icons/common/freelance.png",
    date: "Dec 2023 - Present",
    desc: "As a freelancer, completed seven diverse projects using WordPress, JavaScript, PHP, and CSS, including informative and e-commerce websites. Developed RESTful APIs for payment gateways like Blom Bank Cybersource, Credit Bank and Areeba Gateway.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Vresso Casa - Ecommerce ",
    desc: "This website is an ecommerce website that displays their products with a payment gateway integrated.",
    link: "https://vressocasa.com/",
  },
  {
    name: "ICCEnergy - Business",
    desc: "This website is a business website that displays information about the company and their services.",
    link: "https://icc.energy/",
  },
  {
    name: "Premier ARC - Business",
    desc: "This website is a business website that displays information about the company and their services.",
    link: "https://premier-arc.com/",
  },
  {
    name: "Dentrooper 360 - Business",
    desc: "This website is a business website that displays information about the company and their services.",
    link: "https://dentrooper360.com/",
  },
  {
    name: "Navigate Success - Business",
    desc: "This website is a business website that displays information about the company and their services.",
    link: "https://navigate-success.com/",
  },
  {
    name: "Fleurielb - Ecommerce",
    desc: "This website is an ecommerce website that displays their products with a payment gateway integrated.",
    link: "https://www.fleurielb.com/",
  },
  {
    name: "MUC ACE - University Informative",
    desc: "This website is a business website that displays information about the university academy and their offers.",
    link: "https://academy.muc.edu.lb/",
  },
  {
    name: "Mega Brands - Areeba Payment Gateway",
    desc: "This website is an ecommerce website that displays their products with a payment gateway integrated.",
    link: "https://megabrandsoutlet.net/",
  },
  {
    name: "Vitto - Blom Bank Cybersource Gateway",
    desc: "This website is an ecommerce website that displays their products with a payment gateway integrated.",
    link: "https://vittoonline.com/",
  },
  {
    name: "Hafnutrition - Ecommerce",
    desc: "This website is an ecommerce website that displays their products.",
    link: "https://hafnutrition.com/",
  },
  {
    name: "Adopt a Cedar - Credit Bank Netcommerce Gateway",
    desc: "This website is an ecommerce website that displays their product with a payment gateway integrated.",
    link: "https://www.adoptacedar.org/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Abed El Razzak Portfolio",
  description: greetings.description,
  author: "Abed El Razzak Chreim",
  image: "https://avatars.githubusercontent.com/u/98018982?v=4",
  url: "https://portfolio-rouge-seven-26.vercel.app/",
  keywords: [
    "Abed El Razzak",
    "Abed El Razzak Chreim",
    "AbedElRazzak",
    "Portfolio",
    "Abed El Razzak Portfolio ",
    "Abed El Razzak Chreim Portfolio",
  ],
};
