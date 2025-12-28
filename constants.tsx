
import { Project, Certification, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DocQuery AI',
    description: 'Developed a RAG-based chatbot that answers queries from uploaded documents using Ollama embeddings with Qdrant for efficient retrieval, and LLaMA (Ollama) and Gemini for context-aware responses.',
    imageUrl: './public/docquery.png',
    githubUrl: 'https://github.com/Sriya987/RAG-chatbot',
    tags: ['LangChain','FastAPI','React','Qdrant VectorDB']
  },
  {
    id: '2',
    title: 'Email Automator',
    description: 'Built a Python tool using smtplib to automate bulk personalized emails with features like scheduling, dynamic templates, and contact book integration streamlining announcements, and invitations reducing manual effort and improving efficiency.',
    imageUrl: './public/email-automator.png',
    githubUrl: 'https://github.com/Sriya987/EmailAutomator',
    tags: ["Python", "smtplib", "Pandas"]
  },
  
  {
    id: '3',
    title: "AI Spaced Repetition",
    description: 'Developed an AI-powered spaced repetition platform with adaptive reviews, using SQLAlchemy models to manage users, concepts, and progress, and integrated AI-driven feedback for personalized learning.',
    imageUrl: './public/AI-spaced.jpeg',
    githubUrl: 'https://drive.google.com/file/d/1QawDDm9S06ewpwOipyxWAMHzb6ZFrjv-/view?usp=drive_link',
    tags: ['React', 'FastAPI', 'GeminiAPI', 'SQLAlchemy']
  },
  
  {
    id: '4',
    title: 'GloNaVox',
    description: 'Designed a speech translation system with real-time and recorded input support, integrating speech recognition, language translation, and speech synthesis for end-to-end audio translation across global languages using gTTS and Google Translate. Do check out Readme!!',
    imageUrl: './public/glonavox.png',
    githubUrl: 'https://github.com/Sriya987/GloNaVox  ',
    tags: ['Python', 'SpeechRecognition', 'Google Translate API', 'gTTS']
  },
  {
    id: '5',
    title: 'Lead Conversion Prediction Model',
    description: 'Built ML models (Logistic Regression, SVM, Decision Tree, Random Forest) for lead conversion prediction, improving recall from 62% to 75% with 86% accuracy using threshold tuning and pruning.',
    imageUrl: './public/lead-conversion.png',
    githubUrl: 'https://github.com/Sriya987/LeadConversionPrediction',
    tags: ["Python","Pandas", "Scikit-learn", "Machine Learning"]
  },
  {
    id: '6',
    title: 'Sweetspot Inventory System',
    description: 'Contributed to the backend of the SweetSpot E-commerce platform using Django and Django REST Framework.Integrated customer management, cataloging, real-time delivery tracking using Google Maps API, and a secure admin dashboard.',
    imageUrl: './public/sweetspot.png',
    githubUrl: 'https://github.com/Sriya987/Sweetspot_ECommerce',
    tags: ['Django','PostgreSQL', 'Google Maps API']
  }
  

];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    name: 'Software Engineer Intern',
    issuer: 'Hackerrank',
    date: '2024',
    imageUrl: './public/HackerrankSoftwareEngineerIntern.jpg'
  },
  {
    id: 'c2',
    name: 'Internship 4.0',
    issuer: 'Infosys Springboard',
    date: '2024',
    imageUrl: './public/infosys4.0.png'
  },
  {
    id: 'c3',
    name: 'Web Dev in React',
    issuer: 'Coursera Project Network',
    date: '2024',
    imageUrl: './public/CourseraReact.jpg'
  },
  {
    id: 'c4',
    name: 'GCCP',
    issuer: 'Google Developer Student Clubs',
    date: '2023',
    imageUrl: './public/Gccp.jpg'
  },
  {
    id: 'c5',
    name: 'Python Certification',
    issuer: 'Hackerrank',
    date: '2023',
    imageUrl: './public/HackerrankPython.jpg'
  },
  {
    id: 'c6',
    name: 'Python Young Professional',
    issuer: 'Infosys Springboard',
    date: '2024',
    imageUrl: './public/PythonInfy.jpg'
  }
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python","Java", "SQL"]
  },
  {
    category: "Libraries & Frameworks",
    items: ["React", "HTML5", "CSS3" , "Bootstrap", "Streamlit","NumPy","Pandas"]
  },
  {
    category: "Backend & Databases",
    items: [ "FastAPI","Spring Boot(Basic)","MySQL", "MongoDB"]
  },

  {
    category: "Tools & Platforms",
    items: ["Git", " GitHub", "VS Code", "Docker", "Jenkins"]
  }
];
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/sriya-kotagiriwar',
    icon: 'fa-brands fa-linkedin-in'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/sriyaaa.19/',
    icon: 'fa-brands fa-instagram'
  },
  {
    platform: 'Mail',
    url: 'mailto:sriyakotagiriwar@gmail.com',
    icon: 'fa-solid fa-at'
  }
];
