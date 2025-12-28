
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  tags: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
