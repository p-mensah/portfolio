import type React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  tags: string[];
}

export interface WorkExperience {
  company: string;
  title: string;
  period: string;
  summary: string;
  details: string[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface CertificationItem {
    institution: string;
    name: string;
    date: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}
