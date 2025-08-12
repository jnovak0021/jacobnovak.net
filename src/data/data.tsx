import {
  AcademicCapIcon,
  //ArrowDownTrayIcon,
  BuildingOffice2Icon,
  //CalendarIcon,
  //FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
//import profilepic from '../images/profilepic.jpg';
//import headshot from '/Headshot.PNG';
import testimonialImage from 'public/testimonialBackground.jpg';
import React from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import hackathon1 from 'public/portfolio/hackathon/hackathon1.png';
import earthquake1 from 'public/portfolio/earthquake/earthquake1.png';
//import earthquake2 from 'public/portfolio/earthquake/earthquake2.png';
//import hackathon2 from 'public/portfolio/hackathon/hackathon2.png';
import ml1 from 'public/portfolio/ml/ml1.png';
import data2 from 'public/portfolio/data/data2.png';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jacob Novak',
  description: "Jacob Novak's Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Strengths: 'strengths',
} as const;


export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jacob Novak.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base sm:prose-md">
        Welcome to my portfolio website! This website was developed using typescript, tailwind css. As highlighted throughout this website, I possess a blend of cybersecurity expertise gained through workplace experience and certifications such as CompTIA Security+ and Network+. 
        Combined with real-world software development experience and a proven track record in leadership, problem-solving, and effective communication, I am well-equipped to contribute to any technical team.
        Feel free to explore this website to learn more about me, understand my strengths in greater depth, view my resume, testimonial, and projects. 
        Lastly, feel free to connect with me through either 
        <strong className="text-stone-100"><Link href="https://www.linkedin.com/in/jacob-mark-novak/"> LinkedIn</Link></strong>, or the <strong className="text-stone-100"><a href='/#contact'>contact me </a></strong> page on this site.      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      </p>
    </>
  ),
  actions: [
      
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: '/Headshot.PNG' ,
  description: `Originally from Lake Tahoe, I grew up skiing, camping, and hiking. In middle school, my family moved to the mountains of Colorado. Tired of the cold, I eventually moved to San Diego, CA, where I graduated from Point Loma Nazarene University with a BS in Computer Science with an emphasis in Cybersecurity and a minor in Software Engineering.

While at PLNU, I took on every opportunity to challenge myself and gain expertise through completing certifications, competing in competitions, and participating in multiple internships, which have provided me with a diverse skill set.

Currently, I am working in the biopharmaceutical space as a cyber security intern at Neurocrine Biosciences.

My main interests within computer science revolve around software development, SecDevOps, vulnerability management and mitigation in enterprise software, and threat detection and analysis.

Currently, I am looking for full-time positions in software engineering or cybersecurity.
        
        
        `,
  aboutItems: [
    {label: 'Location', text: 'San Diego', Icon: MapIcon},
    //{label: 'Age', text: '29', Icon: CalendarIcon},
    //{label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Guitar, Drums', Icon: SparklesIcon},
    {label: 'School', text: 'Point Loma Nazarene University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Neurocrine Biosciences', Icon: BuildingOffice2Icon},
  ],
};


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SDSU /SHARP Big Data Hackathon 1st Place Mobile App',
    description: 'Mobile Application Developed using React and Typescript for scheduling and managing Non-Emergency Medical Transportation (NEMT) Rides for loved ones. This mobile application won my team 1st place at the SDSU/SHARP Big Data Hackathon in October 2024.',
    url: 'https://github.com/jnovak0021/HACKATHON-NEMT-APP',
    image: hackathon1,
  },
  {
    title: 'USGS Earthquake Data Web Application',
    description: 'This project was developed using docker to containerize a mysql database, a goland backend, and a nextjs frontend. The goal of creating this full stack web-application was to allow users to view earthquake data across the globe by interacting with a globe.',
    url: 'https://github.com/jnovak0021/Earthquake_Globe_Web',
    image: earthquake1,
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'This project was developed using React, Typescript, and Tailwind CSS. The goal of this project was to create a data visualization dashboard that allows users to view and interact with data in a visually appealing way.',
    url: 'https://github.com/jnovak0021/Data_Dashboard',
    image: data2,
  },
  {
    title: 'Machine Learning project for predicting earthquake magnitude',
    description: 'The project leverages machine learning using Linear, Polynomial, and Random Forest regression models with feature selection and hyperparameter tuning to accurately predict earthquake magnitudes from 25 years of global data, supported by data processing and visualization in both Python and R.',
    url: 'https://github.com/jnovak0021/Earthquake_ML',
    image: ml1,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Michael Griffin',
      jobTitle: 'System Communication Manager, Vail Health',
      text: "During the summer, Jacob did security assessments, ran SQL queries, attended daily development meetings, did research on behalf of the team, and performed QA on new site features. He was also a critical part of the team in testing and debugging throughout the development process. Jacob not only became a valuable member of the team but also a pleasure to work with. He’s focused when it’s called for but at the same time enjoyable to work alongside. I am confident that he would be a great addition to any technical team",

      image: '/MikeGriffinHeadshot.jpg',
    },
    {
      name: 'Macy Dennis',
      jobTitle: 'CISO, Ember River',
      text: 'Jacob Novak worked for Ember River as a Security Analyst during his internship.  He was very attentive to deadlines.  He would go the extra step in his research and analysis including the documentation and publication phases of his work.  Overall Jacob excels at his soft skills, research capabilities, and writing.  Additionally Jacob has a unique drive if he doesn’t understand or know something he digs in to self educate himself.  Great intern and would be a good hire for a full time position.  ',
      image: 'MacyDennisHeadshot.jpg',
    },
    {
      name: 'Sean kennedy',
      jobTitle: 'Director of Information Technology, San Diego Symphony',
      text: 'During the lead-up to the grand reopening of the Jacobs Music Center, Jacob played a crucial role in configuring and troubleshooting the network. He demonstrated strong technical skills and a proactive approach by installing and documenting the network infrastructure, ensuring the system was operational in time.',
      image: 'SeanKennedyHeadshot.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please reach out to me using one of the following methods:',
  items: [
    {
      type: ContactType.Email,
      text: 'jnovak0021@gmail.com',
      href: 'mailto:jnovak0021@gmail.com',
    },

    {
      type: ContactType.LinkedIn,
      text: '@jacob-mark-novak',
      href: 'https://www.linkedin.com/in/jacob-mark-novak/',
    },
    {
      type: ContactType.Github,
      text: 'jnovak0021',
      href: 'https://github.com/jnovak0021',
    },
    {
      type: ContactType.Phone,
      text: '970-390-8232',
      href: 'tel:970-390-8232',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jnovak0021'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: "https://www.linkedin.com/in/jacob-mark-novak/"},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
