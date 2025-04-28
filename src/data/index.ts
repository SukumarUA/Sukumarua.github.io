import { NavItem, Social, Skill, Project, Experience } from '../types';
//import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/sukumarchinthalapudi', icon: 'Github' },
  { name: 'GitHub (Alt)', url: 'https://github.com/SukumarUA', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sukumarchinthalapudi', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:chinthalapudisukumar@gmail.com', icon: 'Mail' },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'backend' },
  { name: 'COBOL', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'C', category: 'backend' },
  { name: 'JCL', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'JSP', category: 'frontend' },
  
  // Frameworks & Tools
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Maven', category: 'backend' },
  { name: 'Git', category: 'other' },
  { name: 'Jenkins', category: 'other' },
  { name: 'JUnit', category: 'other' },
  { name: 'Selenium', category: 'other' },
  { name: 'Swagger', category: 'other' },
  { name: 'Postman', category: 'other' },
  { name: 'CI/CD', category: 'other' },
  { name: 'Agile', category: 'other' },
  { name: 'Jira', category: 'other' },
  
  // Databases
  { name: 'IBM DB2', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  
  // Cloud Platforms
  { name: 'AWS EC2', category: 'other' },
  { name: 'AWS ECS', category: 'other' },
  { name: 'AWS ECR', category: 'other' },
  { name: 'AWS IAM', category: 'other' },
  { name: 'AWS S3', category: 'other' },
  { name: 'AWS ELB', category: 'other' },
  { name: 'AWS RDS', category: 'other' },
  { name: 'AWS Lambda', category: 'other' },
  
  // Containerization & DevOps
  { name: 'Docker', category: 'other' },
  
  // IDEs & Environments
  { name: 'IntelliJ', category: 'other' },
  { name: 'Eclipse', category: 'other' },
  { name: 'Visual Studio', category: 'other' },
  
  // Operating Systems
  { name: 'Linux', category: 'other' },
  { name: 'Windows', category: 'other' },
  { name: 'MacOS', category: 'other' },
  { name: 'Unix', category: 'other' },
  { name: 'z/OS', category: 'other' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'SAGE Web Application Enhancement',
    description: 'Integrated third-party geocoding services and implemented Java Regex for parsing large address datasets, improving data accuracy and processing efficiency.',
    tags: ['Java', 'Spring Boot', 'SQL', 'API Integration'],
    imageUrl: 'https://raw.githubusercontent.com/SukumarUA/Portfolio/main/Images/sage.png',
    featured: true,
  },
  {
    id: '2',
    title: 'E-commerce Platform Development',
    description: 'Developed and maintained e-commerce solutions using Oracle ATG Commerce platform, implementing custom features and ensuring high performance.',
    tags: ['Java', 'JSP', 'Oracle ATG', 'E-commerce'],
    imageUrl: 'https://raw.githubusercontent.com/SukumarUA/Portfolio/main/Images/ecommerce.jpg',
    featured: true,
  },
  {
    id: '3',
    title: 'Supply Chain Analytics System',
    description: 'Developed Python scripts and SQL databases for supply chain optimization, creating interactive dashboards for real-time business insights.',
    tags: ['Python', 'SQL', 'Data Analytics'],
    imageUrl: 'https://raw.githubusercontent.com/SukumarUA/Portfolio/main/Images/homlot.png',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Information Technology Specialist 2(ITS)',
    company: 'State of New York',
    period: 'Sept 2023 - Present',
    description: 'Developed and optimized COBOL applications on IBM mainframes, managed DB2 databases, and automated tasks using z/VM and Rexx scripting.',
  },
  {
    title: 'Application Development Associate',
    company: 'Accenture Solutions Pvt. Ltd.',
    period: 'Jan 2021 – June 2022',
    description: 'Led development of e-commerce solutions using Oracle ATG Commerce platform, customized components, and engaged with global stakeholders.',
  },
  {
    title: 'Software Engineer',
    company: 'Homlot (Seedolabs Private Limited)',
    period: 'Jan 2020 – Dec 2020',
    description: 'Developed Python scripts for data processing, managed SQL databases, and created interactive dashboards for business analytics.',
  },
];

export const education = [
  {
    degree: "Master's in Computer and Information Sciences",
    institution: "University at Albany, State University of New York",
    location: "Albany, New York",
    period: "August 2022 – May 2024",
  },
  {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: "Anna University",
    location: "Chennai, India",
    period: "August 2017 - April 2021",
  },
];

export const aboutMe = {
  title: 'About Me',
  description: `I'm a software developer who speaks fluent Java, dreams in SQL queries, and occasionally argues with COBOL like an old friend.

I recently earned my Master's in Computer and Information Sciences from the State University of New York, Albany — where I mastered everything from operating systems to topological data analysis (and yes, drank way too much coffee along the way ☕).

With 4 years of IT experience under my belt, I've had the privilege of modernizing enterprise applications, optimizing databases, and collaborating with brilliant teams. Whether it's Java, COBOL, Python, or crafting full-stack solutions, I love building things that make systems faster, smarter, and a little less chaotic.

When I'm not coding, you'll probably find me tweaking AWS environments, automating a CI/CD pipeline, or secretly trying to make friends with Docker containers. 🚀

I believe great software is built on great communication, solid engineering, and a little bit of fun. I bring curiosity, creativity, and a no-fear attitude to every project I tackle — because tech should feel exciting, not intimidating.

If you're looking for someone who can talk both to humans and machines (and who enjoys doing both), let's connect!`,
  resumeUrl: 'https://raw.githubusercontent.com/SukumarUA/Portfolio/main/Resume/SUKUMAR%20JC.pdf',
};

export const contactInfo = {
  email: 'chinthalapudisukumar@gmail.com',
  phone: '+1 (518) 212-0787',
  location: 'Albany, New York',
};