export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Achievements {
  title: string;
  description: string;
  demoLink: string;
  image: string;
}

export interface Courses {
  title: string;
  description: string;

  demoLink: string;
  image: string;
}
